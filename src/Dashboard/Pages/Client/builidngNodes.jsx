import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { FaLock, FaLockOpen } from 'react-icons/fa6'
import { HiMiniSquares2X2 } from 'react-icons/hi2'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { verifyUserData } from '../../../ApiServices/verifyAuth'
import TotalcntCsv from '../../Components/shared/TotalnctCSV'
import { useBuildingIoContext } from '../../Context/BuildingSocket'
import { useGatewaySets } from '../../Context/Gw_setsContext'

function BuildingNodes() {
	const [error, setError] = useState('')
	const [nodes, setNodes] = useState([])
	const { id } = useParams() // Bu user alohida tanlab kirgan bir building id si. uni routedan olmoqda
	const alarmRef = useRef(null)
	const { buildingData } = useBuildingIoContext()
	const gatewaySets = useGatewaySets()

	const fetchLastLogs = async gateway_sets => {
		try {
			const endpoint = `${
				import.meta.env.VITE_SERVER_BASE_URL
			}/product/get/last-logs`
			const response = await axios.post(endpoint, { gateway_sets })

			// Javobni log qilish
			const lastStoredData = response.data // Bu massiv ekanligi tasdiqlandi
			console.log('Last stored data:', lastStoredData)

			// Nodes'ni yangilash
			setNodes(prevNodes => {
				if (!Array.isArray(prevNodes)) return prevNodes // nodes massiv emas bo'lsa

				return prevNodes.map(node => {
					// lastStoredData'dan mos node topish
					const updatedNode = lastStoredData.find(
						updated => updated.doorNum === node.doorNum
					)

					// Agar mos node topilsa, qiymatlarni yangilash
					return updatedNode ? { ...node, ...updatedNode } : node
				})
			})
		} catch (error) {
			console.error('Error in fetchLastLogs:', error)
		}
	}

	useEffect(() => {
		fetchLastLogs(gatewaySets)
	}, [])

	useEffect(() => {
		const buildingNodes = buildingData[id]
		// mqtt dan kelgan datalar nodes ni yangilaydi.
		if (buildingNodes) {
			setNodes(buildingNodes)
			console.log('.1', buildingNodes)
		} else if (!buildingNodes) {
			// mqtt dan data kelmaganda localsrote dagi nodelarni oladi
			const storedNodes =
				JSON.parse(localStorage.getItem(`buildingData_${id}`)) || []
			console.log('..2', storedNodes)
			setNodes(storedNodes)
		} else {
			setError('Not found Building nodes :(')
			toast.info('Not found Building Nodes')
		}
	}, [id, buildingData])

	const getBatteryIconAndPercentage = batteryLevel => {
		let icon
		let color
		let percentage

		switch (true) {
			case batteryLevel >= 42:
				color = 'indigo-500'
				percentage = '100%'
				break
			case batteryLevel >= 41:
				color = 'indigo-500'
				percentage = '84%'
				break
			case batteryLevel >= 40:
				color = 'green-400'
				percentage = '65%'
				break
			case batteryLevel >= 39:
				color = 'green-400'
				percentage = '56%'
				break
			case batteryLevel >= 38:
				color = 'green-400'
				percentage = '50%'
				break
			case batteryLevel >= 37:
				color = 'red-400'
				percentage = '41%'
				break
			case batteryLevel >= 36:
				color = 'red-400'
				percentage = '35%'
				break
			case batteryLevel >= 35:
				color = 'red-400'
				percentage = '25%'
				break
			case batteryLevel >= 34:
				color = 'red-400'
				percentage = '20%'
				break
			case batteryLevel >= 30:
				color = 'red-500'
				percentage = '10%'
				break

			default:
				color = 'indigo-500'
				percentage = '100%'
		}

		return { color, percentage }
	}

	const betSample = [30, 31, 32, 34, 35, 37, 38, 39, 32, 31, 40, 41]

	return (
		<div className='w-full px-5 mt-10 mb-10'>
			<TotalcntCsv
				itemName={'Nodes'}
				item={nodes}
				icon={<HiMiniSquares2X2 />}
			/>

			{error && <h1 className='text-lg text-red-600 text-center'>{error}</h1>}

			<div className='node-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-5 cursor-pointer'>
				{nodes &&
					nodes.map((node, index) => {
						// betSample ichidan qiymat olish
						// const bet = betSample[index % betSample.length]
						const { color, percentage } = getBatteryIconAndPercentage(
							node.betChk
						)

						return (
							<div
								key={node._id}
								className='node-box flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-md shadow-indigo-300/50 hover:shadow-lg hover:shadow-indigo-500/50 transition-shadow relative'
							>
								<p className='w-10 h-10 flex justify-center items-center rounded-full bg-white border-indigo-400 border text-gray-700 font-semibold absolute -top-2 -left-2'>
									{index + 1}
								</p>
								<div className='flex items-center gap-2 text-sm bg-gray-300 p-1 rounded-md mb-2'>
									<p className='text-gray-700 font-semibold'>
										Position: {node.position}
									</p>
								</div>

								{node.doorChk == 1 ? (
									<FaLockOpen
										color='red'
										style={{ width: '70px', height: '70px' }}
									/>
								) : (
									<FaLock
										color='#818CF8'
										style={{ width: '70px', height: '70px' }}
									/>
								)}

								<h3
									className={`text-md mt-2 text-gray-700 ${
										node.doorChk == 1 ? 'text-red-600' : null
									}`}
								>
									{node.doorChk == 1 ? 'Door is Open' : 'Door is Closed'}
								</h3>

								{/* <div className='flex items-center mt-2'>
									{icon}
									<span
										className={`ml-2 text-md ${
											node.betChk <= 30 ? 'text-indigo-600' : 'text-red-600'
										}`}
									>
										{percentage}
									</span>
								</div> */}

								<div className='w-full flex justify-center items-center space-x-4'>
									<div className='w-1/3 bg-gray-300 rounded-full h-4'>
										<div
											className={`bg-${color} h-4 rounded-full`}
											style={{ width: `${percentage}` }}
										></div>
									</div>
									<span className='text-sm font-medium'>{percentage}</span>
								</div>
								<p className='text-lg text-indigo-700'>
									{verifyUserData.user_type === 'ADMIN' &&
										`Serial Number: ${node.doorNum}`}
								</p>
							</div>
						)
					})}
			</div>
			<audio ref={alarmRef} src='/Audio/alarm_audio.wav' />
			{/* ======================================================================= */}
			{/* <div className='p-4 max-w-sm mx-auto'>
				<h1 className='text-xl font-bold mb-4'>Battery Indicator</h1>
				<div className='space-y-2'>
					<div className='flex items-center space-x-4'>
						<div className='w-full bg-gray-200 rounded-full h-4'>
							<div
								className='bg-green-500 h-4 rounded-full'
								style={{ width: '0%' }}
							></div>
						</div>
						<span className='text-sm font-medium'>0%</span>
					</div>
					<div className='flex items-center space-x-4'>
						<div className='w-full bg-gray-200 rounded-full h-4'>
							<div
								className='bg-green-500 h-4 rounded-full'
								style={{ width: '10%' }}
							></div>
						</div>
						<span className='text-sm font-medium'>10%</span>
					</div>
					<div className='flex items-center space-x-4'>
						<div className='w-full bg-gray-200 rounded-full h-4'>
							<div
								className='bg-green-500 h-4 rounded-full'
								style={{ width: '15%' }}
							></div>
						</div>
						<span className='text-sm font-medium'>15%</span>
					</div>
					<div className='flex items-center space-x-4'>
						<div className='w-full bg-gray-200 rounded-full h-4'>
							<div
								className='bg-yellow-500 h-4 rounded-full'
								style={{ width: '25%' }}
							></div>
						</div>
						<span className='text-sm font-medium'>25%</span>
					</div>
					<div className='flex items-center space-x-4'>
						<div className='w-full bg-gray-200 rounded-full h-4'>
							<div
								className='bg-yellow-500 h-4 rounded-full'
								style={{ width: '40%' }}
							></div>
						</div>
						<span className='text-sm font-medium'>40%</span>
					</div>
					<div className='flex items-center space-x-4'>
						<div className='w-full bg-gray-200 rounded-full h-4'>
							<div
								className='bg-yellow-500 h-4 rounded-full'
								style={{ width: '56%' }}
							></div>
						</div>
						<span className='text-sm font-medium'>56%</span>
					</div>
					<div className='flex items-center space-x-4'>
						<div className='w-full bg-gray-200 rounded-full h-4'>
							<div
								className='bg-orange-500 h-4 rounded-full'
								style={{ width: '70%' }}
							></div>
						</div>
						<span className='text-sm font-medium'>70%</span>
					</div>
					<div className='flex items-center space-x-4'>
						<div className='w-full bg-gray-200 rounded-full h-4'>
							<div
								className='bg-orange-500 h-4 rounded-full'
								style={{ width: '84%' }}
							></div>
						</div>
						<span className='text-sm font-medium'>84%</span>
					</div>
					<div className='flex items-center space-x-4'>
						<div className='w-full bg-gray-200 rounded-full h-4'>
							<div
								className='bg-red-500 h-4 rounded-full'
								style={{ width: '100%' }}
							></div>
						</div>
						<span className='text-sm font-medium'>100%</span>
					</div>
				</div>
			</div> */}
		</div>
	)
}

export default BuildingNodes
