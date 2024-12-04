import axios from 'axios'

export const getActiveNodes = async () => {
	try {
		const response = await axios.get(
			`${import.meta.env.VITE_SERVER_BASE_URL}/product/active-nodes`
		)
		return response.data
	} catch (error) {
		console.error("Node ma'lumotlarini olishda xatolik:", error)
	}
}

export const fetchGateways = async () => {
	try {
		const response = await axios.get(
			`${import.meta.env.VITE_SERVER_BASE_URL}/product/active-gateWays`
		)
		return response.data
	} catch (error) {
		console.error("Gateway ma'lumotlarini olishda xatolik:", error)
	}
}

export const fetchUsers = async () => {
	try {
		const response = await axios.get(
			`${import.meta.env.VITE_SERVER_BASE_URL}/get-users`
		)
		return response.data
	} catch (error) {
		console.error("Users ma'lumotlarini olishda xatolik:", error)
	}
}

export const postBuildingdata = async data => {
	try {
		const response = await axios.post(
			`${import.meta.env.VITE_SERVER_BASE_URL}/product/create-building`,
			data
		)
		return response.data
	} catch (error) {
		console.error("Users ma'lumotlarini olishda xatolik:", error)
	}
}

export const postClientdata = async data => {
	try {
		const response = await axios.post(
			`${import.meta.env.VITE_SERVER_BASE_URL}/product/create-client`,
			data
		)
		return response.data
	} catch (error) {
		console.error("Users ma'lumotlarini olishda xatolik:", error)
	}
}

export const fetchBuildings = async () => {
	try {
		const response = await axios.get(
			`${import.meta.env.VITE_SERVER_BASE_URL}/product/get-buildings`
		)
		return response.data.data
	} catch (error) {
		console.error("Buildings ma'lumotlarini olishda xatolik:", error)
	}
}

export const fetchBossBuilidngs = async (userId, userTitle) => {
	try {
		if (!userTitle === 'BOSS') {
			return new Error('You are not Boss user.')
		}

		const response = await axios.get(
			`${import.meta.env.VITE_SERVER_BASE_URL}/product/get-boss/buildings`,
			{
				params: { userId },
			}
		)
		return response.data.buildings
	} catch (error) {
		return error
	}
}

export const fetchWorkerBuilidngs = async (userId, userTitle) => {
	try {
		if (!userTitle === 'WORKER') {
			return new Error('You are not WORKER user.')
		}

		const response = await axios.get(
			`${import.meta.env.VITE_SERVER_BASE_URL}/product/get-worker/buildings`,
			{
				params: { userId },
			}
		)
		return response.data.buildings
	} catch (error) {
		return error
	}
}

export const fetchBuildingNodes = async buildingId => {
	try {
		const response = await axios.get(
			`${
				import.meta.env.VITE_SERVER_BASE_URL
			}/product/get-boss/building-nodes/${buildingId}`
		)
		return response.data
	} catch (error) {
		return error
	}
}

// ================= ADMIN related functions =================== //

export const fetchAllClients = async () => {
	try {
		const response = await axios.get(
			`${import.meta.env.VITE_SERVER_BASE_URL}/product/get-all-clients`
		)
		return response.data
	} catch (error) {
		return error
	}
}

export const fetchClientDetails = async id => {
	try {
		const response = await axios.get(
			`${import.meta.env.VITE_SERVER_BASE_URL}/product/client/${id}`
		)
		return response.data
	} catch (error) {
		throw error
	}
}

export const fetchAdminBuildings = async (userId, user_title) => {
	try {
		if (!user_title === 'ADMIN') {
			return new Error('You are not ADMIN type user!')
		}

		const response = await axios.get(
			`${import.meta.env.VITE_SERVER_BASE_URL}/product/get-admin/buildings`,
			{ params: { userId } }
		)

		return response.data.buildings
	} catch (error) {
		return error
	}
}

export const updateAllNodeStatus = async () => {
	try {
		const response = await axios.get(
			`${import.meta.env.VITE_SERVER_BASE_URL}/product/update-allnodes_sts`
		)

		return response.data
	} catch (error) {
		throw error
	}
}

export const updateNodeStatus = async id => {
	try {
		const response = await axios.get(
			`${import.meta.env.VITE_SERVER_BASE_URL}/product/update-node_sts/${id}`
		)

		return response.data
	} catch (error) {
		throw error
	}
}

export const deleteNode = async id => {
	try {
		const response = await axios.delete(
			`${import.meta.env.VITE_SERVER_BASE_URL}/product/delete-node/${id}`
		)

		return response.data
	} catch (error) {
		throw error
	}
}
