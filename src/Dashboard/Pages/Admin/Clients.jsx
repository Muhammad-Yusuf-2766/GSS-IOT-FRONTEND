// import React from 'react'
import { useEffect, useState } from 'react'
import { LuUser } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { fetchAllClients } from '../../../Services/getData'
import AllClients from '../../Components/Client_comp/ClientCard'
import Totalcountbox from '../../Components/shared/TotalCount'

const Clients = () => {
	const [allClients, setAllClients] = useState([])
	const [error, setError] = useState('')

	const getAllClients = async () => {
		try {
			const data = await fetchAllClients()
			if (data.state === 'Fail') {
				setError(data.message)
			}

			console.log(data)
			setAllClients(data.clients)
		} catch (error) {
			return error
		}
	}

	useEffect(() => {
		getAllClients()
	}, [])
	return (
		<div>
			<div className='w-fit mx-auto mt-4'>
				<Totalcountbox
					itemName={'Clients'}
					item={allClients}
					icon={<LuUser />}
				/>
			</div>
			<div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4'>
				{allClients ? (
					allClients.map(client => (
						<Link to={`/admin/dashboard/client/${client._id}`} key={client._id}>
							<AllClients client={client} />
						</Link>
					))
				) : (
					<div className='col-span-3 text-center text-gray-700 py-10'>
						<h1 className='text-xl font-bold mx-auto text-red-500'>{error}</h1>
					</div>
				)}
			</div>
		</div>
	)
}

export default Clients
