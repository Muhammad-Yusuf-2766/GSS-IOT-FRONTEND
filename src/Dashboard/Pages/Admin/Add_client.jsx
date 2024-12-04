import { useEffect, useState } from 'react'
import { fetchGateways, fetchUsers } from '../../../Services/getData'
import ClientForm from '../../Components/Client_comp/Client_form'
import BuildingForm from '../../Components/Creating_comp/Building_form'

const AddClient = () => {
	const [gateways, setGateways] = useState([])
	const [users, setUsers] = useState([])

	useEffect(() => {
		const getGateways = async () => {
			const gateWays = await fetchGateways()
			console.log(gateways)
			setGateways(gateWays)
		}

		const getUsers = async () => {
			const users = await fetchUsers()
			setUsers(users)
		}

		getUsers()
		getGateways()
	}, [])

	return (
		<div className='w-full h-auto flex justify-center items-start mt-10 gap-3 p-3 pb-10'>
			<BuildingForm gateways={gateways} users={users} />
			<ClientForm users={users} />
		</div>
	)
}

export default AddClient
