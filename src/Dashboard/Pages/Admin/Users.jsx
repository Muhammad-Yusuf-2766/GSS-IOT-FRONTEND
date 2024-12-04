import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {
	getAllUsersRequest,
	makeClient,
	makeUser,
} from '../../../ApiServices/Auth_api'
import AllUsers from '../../Components/Users_comp/All_users'

const Users = () => {
	const [allUsers, setAllUsers] = useState([])
	const handleGetAllUsers = async () => {
		const response = await getAllUsersRequest()
		const users = response.data
		console.log('FOUND USERS:::', users)

		if (users.length === '' || null) {
			throw new Error('There is no users found. :(')
		}

		setAllUsers(users)
	}

	const handleMakeClient = async id => {
		try {
			const changedUser = await makeClient(id)
			console.log(changedUser)

			// Check if changedUser is an empty object
			if (!changedUser || Object.keys(changedUser).length === 0) {
				toast.error('There is no any user data to request :(')
				return // Exit the function to avoid showing the success message
			}
			toast.success('Client changed to User successfully :)')
			handleGetAllUsers()
		} catch (error) {
			console.error('Error changing user:', error)
			toast.error('Something went wrong while changing the user.')
		}
	}

	const handleMakeUser = async id => {
		try {
			const changedUser = await makeUser(id)
			console.log(changedUser)

			if (!changedUser || Object.keys(changedUser).length === 0) {
				toast.error('There is no any user data to request :(')
				return
			}
			toast.success('User changed to Client successfully :)')
			handleGetAllUsers()
		} catch (error) {
			console.error('Error changing user:', error)
			toast.error('Something went wrong while changing the user.')
		}
	}

	useEffect(() => {
		handleGetAllUsers()
	}, [])
	return (
		<div className=''>
			<AllUsers
				allUsers={allUsers}
				handleClient={handleMakeClient}
				handleUser={handleMakeUser}
			/>
		</div>
	)
}

export default Users
