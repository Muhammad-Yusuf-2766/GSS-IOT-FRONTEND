// src/socket.js
// This function is for using socket everywhere and listen always incoming data
import { io } from 'socket.io-client'

const socket = io(`${import.meta.env.VITE_SERVER_BASE_URL}`)

export const initializeSocketListeners = () => {
	socket.on('connect', () => {
		console.log('Global socket connected')
	})

	socket.on('disconnect', () => {
		console.log('Global socket disconnected')
	})

	// Listen for MQTT data globally
	socket.on('mqttData', ({ serialNumber, data }) => {
		console.log('Revceived mqttData via Socket:', data)

		const parsedData = JSON.parse(data)
		const savedNodes = JSON.parse(localStorage.getItem('nodes')) || [] // nodes ni olib qaytar yoki || []bo'sh array qaytarish

		const existNodeIndex = savedNodes.findIndex(
			node => node.doorNum === parsedData.doorNum
		)

		let updatedNodes
		if (existNodeIndex !== -1) {
			updatedNodes = [...savedNodes]
			updatedNodes[existNodeIndex] = {
				...savedNodes[existNodeIndex],
				...parsedData,
			}
		} else {
			updatedNodes = [...savedNodes, parsedData]
		}

		// Save the updated nodes to localStorage
		localStorage.setItem('nodes', JSON.stringify(updatedNodes))
	})
}

// To remove listeners when not needed (e.g., component unmount)
export const removeSocketListeners = () => {
	socket.off('mqttData')
}
