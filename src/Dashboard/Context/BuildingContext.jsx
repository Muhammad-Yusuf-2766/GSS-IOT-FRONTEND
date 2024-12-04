// context/BuildingsContext.js
import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {
	fetchAdminBuildings,
	fetchBossBuilidngs,
	fetchBuildingNodes,
	fetchWorkerBuilidngs,
} from '../../Services/getData'

const BuildingsContext = createContext()

export const BuildingsProvider = ({ children }) => {
	const [buildings, setBuildings] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem('user_data'))
		if (!userData) {
			setLoading(false)
			return
		}

		const getBuildings = async () => {
			try {
				const bossBuildings =
					userData.user_title === 'BOSS'
						? await fetchBossBuilidngs(userData._id, userData.user_title)
						: userData.user_title === 'WORKER'
						? await fetchWorkerBuilidngs(userData._id, userData.user_title)
						: userData.user_title === 'ADMIN'
						? await fetchAdminBuildings(userData._id)
						: null

				if (bossBuildings && bossBuildings.length > 0) {
					setBuildings(bossBuildings)
					console.log('Context updated with buildings:', bossBuildings)

					// Har bir building uchun nodlarni tekshirish
					for (const building of bossBuildings) {
						const savedNodes = localStorage.getItem(
							`buildingData_${building._id}`
						)
						if (!savedNodes) {
							// Agar nodlar mavjud bo'lmasa
							await getNodes(building._id)
						} else {
							try {
								const parsedNodes = JSON.parse(savedNodes)
								console.log(
									`Loaded nodes from localStorage for building ${building._id}:`,
									parsedNodes
								)
							} catch (error) {
								console.error('Failed to parse saved nodes:', error)
								await getNodes(building._id)
							}
						}
					}
				} else {
					toast.info('Not found buildings for this boss :(')
				}
			} catch (error) {
				toast.error('Failed to fetch buildings.')
				console.error(error)
			} finally {
				setLoading(false)
			}
		}

		const getNodes = async buildingId => {
			try {
				const response = await fetchBuildingNodes(buildingId)
				console.log(response)
				if (response.state === 'Success' && Array.isArray(response.data)) {
					localStorage.setItem(
						`buildingData_${buildingId}`,
						JSON.stringify(response.data)
					)
					console.log(`Saved nodes for building ${buildingId}:`, response.data)
				} else {
					toast.error(
						response.data.error || 'An error occurred while fetching nodes'
					)
				}
			} catch (error) {
				console.error('Error fetching nodes:', error)
				toast.error('An unexpected error occurred while fetching nodes.')
			}
		}

		getBuildings()
	}, [])

	return (
		<BuildingsContext.Provider value={{ buildings, loading }}>
			{children}
		</BuildingsContext.Provider>
	)
}

export const useBuildings = () => useContext(BuildingsContext)
