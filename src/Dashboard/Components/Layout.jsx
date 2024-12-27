import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { io } from 'socket.io-client'
import useAuthStore from '../../ApiServices/verifyAuth'
import { useBuildings } from '../Context/BuildingContext'
import { useBuildingIoContext } from '../Context/BuildingSocket'
import { GatewaySetsContext } from '../Context/Gw_setsContext'
import AuthorizeError from './Errors/Error'
import Header from './Headers/Header'
import HeaderClient from './Headers/Header_Client'
import Sidebar from './Sidebars/Sidebar'
import SidebarClient from './Sidebars/Sidebar_Client'

const DashboardLayout = () => {
	const { buildings } = useBuildings()
	const { updateBuildingData } = useBuildingIoContext()
	const { user, checkUserState } = useAuthStore()
	const alarmRef = useRef(null)
	const socket = useRef(null) // Socket clientni saqlash uchun reference
	const [gatewaySets, setGatewaySets] = useState()

	const fetchUserGateways = async (userId, userTitle, userType) => {
		try {
			const endpoint =
				userType === 'ADMIN'
					? `${
							import.meta.env.VITE_SERVER_BASE_URL
					  }/product/admin-subscribe-mqtt`
					: userTitle === 'BOSS'
					? `${
							import.meta.env.VITE_SERVER_BASE_URL
					  }/product/boss-subscribe-mqtt`
					: `${
							import.meta.env.VITE_SERVER_BASE_URL
					  }/product/worker-subscribe-mqtt`

			// Endpointni tekshiramiz
			if (!endpoint) {
				console.error(
					'Invalid endpoint: userType or userTitle is not recognized.'
				)
				return null
			}

			// API so'rovni yuborish
			const response = await axios.get(endpoint, {
				params: { userId, userTitle, userType },
				withCredentials: true,
			})

			const gatewaySets = response.data.gateway_sets
			console.log('fetchUserGateways', response)
			setGatewaySets(gatewaySets)
			return gatewaySets
		} catch (error) {
			console.log('Error fetching user gateways:', error.message)
		}
	}

	const playAlarm = () => {
		if (alarmRef.current) {
			alarmRef.current
				.play()
				.catch(err => console.log('Error playing alarm:', err))
		}
	}

	useEffect(() => {
		if (user && user._id && user.user_title) {
			fetchUserGateways(user._id, user.user_title, user.user_type)
		}
		// Socket.IO ulanishini yaratish
		if (!socket.current) {
			// Agar socket mavjud bo'lmasa, yangi socket ulanishini o'rnatish
			socket.current = io(`${import.meta.env.VITE_SERVER_BASE_URL}`, {
				withCredentials: true,
			})

			socket.current.on('connect', () => {
				console.log('Socket connected')
			})

			socket.current.on('disconnect', () => {
				console.log('Socket disconnected')
			})
		}

		// Har bir building uchun socketni o'rnatish
		buildings.forEach(building => {
			const buildingId = building._id

			// MQTT ma'lumotlarini olish uchun
			socket.current.on(`mqttData_${buildingId}`, ({ serialNumber, data }) => {
				const mqttData = JSON.parse(data)
				console.log('Received MQTT data via Socket.io:', mqttData)

				// Alarmni boshqarish
				if (mqttData.doorChk === 1) {
					playAlarm()
				} else if (mqttData.doorChk === 0 && alarmRef.current) {
					alarmRef.current.pause()
					alarmRef.current.currentTime = 0
				}

				// Building uchun localStorage'dan ma'lumot olish
				const storedBuildingData =
					JSON.parse(localStorage.getItem(`buildingData_${buildingId}`)) || []
				// setNodes(storedBuildingData)

				// Ma'lumotlarni yangilash
				const updatedBuildingData = storedBuildingData.map(door => {
					if (door.doorNum === mqttData.doorNum) {
						return { ...door, ...mqttData }
					}
					return door
				})

				// BuildingContext orqali yangilash
				updateBuildingData(buildingId, updatedBuildingData)

				// Yangilangan ma'lumotlarni localStorage'ga qayta yozish
				localStorage.setItem(
					`buildingData_${buildingId}`,
					JSON.stringify(updatedBuildingData)
				)
			})
		})

		// Cleanup: Component unmount bo'lsa yoki buildings o'zgarganda socketni tozalash
		return () => {
			socket.current.off('connect')
			socket.current.off('disconnect')
			buildings.forEach(building => {
				const buildingId = building._id
				socket.current.off(`mqttData_${buildingId}`)
				localStorage.removeItem(`buildingData_${buildingId}`)
			})
		}
	}, [buildings])
	if (!user) {
		return <AuthorizeError />
	}

	return (
		<>
			<GatewaySetsContext.Provider value={gatewaySets}>
				{user.user_type === 'ADMIN' ? (
					<div className='flex bg-[#efefef] h-full'>
						<Sidebar />
						<div className='w-full ml-16 md:ml-56'>
							<Header />
							<Outlet />
							<ToastContainer autoClose={1500} closeOnClick />
						</div>
						<audio ref={alarmRef} src='/Audio/alarm_audio.wav' />
					</div>
				) : user.user_type === 'CLIENT' ? (
					<div className='flex bg-[#efefef] h-full'>
						{/* Client specific layout */}
						<SidebarClient />
						<div className='w-full ml-16 md:ml-56'>
							<HeaderClient />
							<Outlet gwSets={gatewaySets} />
							<ToastContainer autoClose={1500} closeOnClick />
						</div>
						<audio ref={alarmRef} src='/Audio/alarm_audio.wav' />
					</div>
				) : (
					<AuthorizeError />
				)}
			</GatewaySetsContext.Provider>
		</>
	)
}

export default DashboardLayout
