import { createContext, useContext, useEffect, useState } from 'react'

const BuildingIoContext = createContext()

export const useBuildingIoContext = () => useContext(BuildingIoContext)

export const BuildingIoProvider = ({ children }) => {
	const [buildingData, setBuildingData] = useState({}) // Har bir building uchun obyekt sifatida saqlash

	const updateBuildingData = (buildingId, updatedData) => {
		setBuildingData(prevData => ({
			...prevData,
			[buildingId]: updatedData, // buildingId asosida yangilash
		}))
	}

	// buildingData o'zgarganda uni konsolda kuzatish uchun useEffect qo'shamiz
	useEffect(() => {
		console.log('Yangilangan buildingData:', buildingData)
	}, [buildingData])

	return (
		<BuildingIoContext.Provider value={{ buildingData, updateBuildingData }}>
			{children}
		</BuildingIoContext.Provider>
	)
}
