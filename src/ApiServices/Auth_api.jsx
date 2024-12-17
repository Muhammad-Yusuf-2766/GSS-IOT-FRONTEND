import axios from 'axios'

export const signupRequest = async signupData => {
	try {
		const result = await axios.post(
			`${import.meta.env.VITE_SERVER_BASE_URL}/signup`,
			signupData,
			{
				withCredentials: true,
			}
		)

		if (!result?.data || result.data.state === 'fail') {
			throw new Error('Sign up failed')
		}

		const user_data = result.data
		localStorage.setItem('user_data', JSON.stringify(user_data))
		return user_data // Assuming the response contains user data
	} catch (err) {
		console.error(`ERROR ::: signupRequest ${err.message}`)
		throw err
	}
}

export const loginRequest = async loginData => {
	try {
		const result = await axios.post(
			`${import.meta.env.VITE_SERVER_BASE_URL}/login`,
			loginData,
			{
				withCredentials: true,
			}
		)
		console.log(result)

		if (result.data.state !== 'Fail') {
			localStorage.setItem('user_data', JSON.stringify(result.data.data))
			return result.data
		}
		return result.data
	} catch (err) {
		console.error(`ERROR ::: loginRequest ${err.message}`)
		throw err
	}
}

export const resetPwRequest = async user_email => {
	try {
		console.log(user_email)
		const result = await axios.post(
			`${import.meta.env.VITE_SERVER_BASE_URL}/reset-password/request`,
			{ user_email },
			{
				withCredentials: true,
			}
		)
		return result.data
	} catch (err) {
		console.error(`ERROR ::: resetPwRequest ${err.message}`)
		throw err
	}
}

export const resetPwVerify = async data => {
	try {
		console.log(data)
		const result = await axios.post(
			`${import.meta.env.VITE_SERVER_BASE_URL}/reset-password/verify`,
			data,
			{
				withCredentials: true,
			}
		)
		return result.data
	} catch (err) {
		console.error(`ERROR ::: resetPwRequest ${err.message}`)
		throw err
	}
}

export const logOutRequest = async () => {
	try {
		const result = await axios.get(
			`${import.meta.env.VITE_SERVER_BASE_URL}/logout`,
			{
				withCredentials: true,
			}
		)
		if (!result?.data) {
			throw new Error('Failed Logout :(')
		}

		if (!result?.data.state === 'fail') {
			throw new Error('Failed Logout :(')
		}

		const logout_result = result.data.state
		localStorage.removeItem('user_data')
		logout_result === 'success' && localStorage.removeItem('nodes')

		return logout_result === 'success'
	} catch (err) {
		console.log(`ERROR ::: logOutRequest ${err.message}`)
		throw err
	}
}

export const getAllUsersRequest = async () => {
	try {
		const users = await axios.get(
			`${import.meta.env.VITE_SERVER_BASE_URL}/get-users`,
			{
				withCredentials: true,
			}
		)
		if (!users) {
			throw new Error('Users not found :( Check DB or Server')
		}

		return users
	} catch (error) {
		console.log(`ERROR ::: getAllUsersRequest ${error.message}`)
		throw error
	}
}

export const getAllGwsRequest = async () => {
	try {
		const response = await axios.get(
			`${import.meta.env.VITE_SERVER_BASE_URL}/product/all-gateways`,
			{
				withCredentials: true,
			}
		)
		return response.data
	} catch (error) {
		throw error
	}
}

export const getAllNodesRequest = async () => {
	try {
		const response = await axios.get(
			`${import.meta.env.VITE_SERVER_BASE_URL}/product/all-nodes`,
			{
				withCredentials: true,
			}
		)
		return response.data
	} catch (error) {
		throw error
	}
}

export const makeClient = async id => {
	try {
		const response = await axios.post(
			`${import.meta.env.VITE_SERVER_BASE_URL}/make-client`,
			{ user_id: id },
			{ withCredentials: true }
		)
		console.log(response.data)
		const changedUser = response.data
		if (!changedUser) {
			throw new Error('Users is not changed :(')
		}

		return changedUser
	} catch (error) {
		console.log(`ERROR ::: Make_Client_Request ${error.message}`)
		throw error
	}
}

export const makeUser = async id => {
	try {
		const response = await axios.post(
			`${import.meta.env.VITE_SERVER_BASE_URL}/make-user`,
			{ user_id: id },
			{ withCredentials: true }
		)
		console.log(response.data)
		const changedUser = response.data
		if (!changedUser) {
			throw new Error('Users is not changed :(')
		}

		return changedUser
	} catch (error) {
		console.log(`ERROR ::: Make_Client_Request ${error.message}`)
		throw error
	}
}
