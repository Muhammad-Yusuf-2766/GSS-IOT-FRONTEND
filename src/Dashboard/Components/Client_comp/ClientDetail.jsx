import React, { useEffect, useState } from 'react'
import { BsBuildingsFill, BsCalendarDate } from 'react-icons/bs'
import { FaHourglassStart } from 'react-icons/fa6'
import { MdOutlineLocationCity } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import { fetchClientDetails } from '../../../Services/getData'
import { calculateDaysUntilExpiry } from '../../Functions/Cal_Expiry_date'
import Totalcountbox from '../shared/TotalCount'

const ClientDetails = () => {
	const { id } = useParams()
	const [buildings, setBuildings] = useState([])

	const getClientDetail = async id => {
		try {
			const response = await fetchClientDetails(id)
			if (!response.success) {
				throw new Error('Error on client details')
			}
			const clientBuildings = response.data.buildings
			console.log('Client-Buildings:', clientBuildings)
			setBuildings(clientBuildings)
		} catch (error) {
			throw error
		}
	}

	useEffect(() => {
		getClientDetail(id)
	}, [id])

	return (
		<div>
			<div className='w-fit flex mx-auto mt-4'>
				<Totalcountbox
					itemName={'Buildings'}
					item={buildings}
					icon={<BsBuildingsFill />}
				/>
			</div>
			<div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4'>
				{buildings.map((building, index) => {
					const daysRemaining = calculateDaysUntilExpiry(
						building.expiration_date
					)
					const daysRemainingStyle = daysRemaining < 20 ? 'text-red-700' : ''
					return (
						<Link
							to={`/admin/dashboard/building/${building._id}`}
							key={index}
							className='p-5 bg-white rounded-xl shadow-xl shadow-indigo-200 cursor-pointer hover:shadow-indigo-400'
						>
							<div className='flex justify-between'>
								<h1 className='text-center text-xl font-semibold text-indigo-700 ml-1'>
									{building.building_name.length > 20
										? `${building.building_name.slice(0, 20)} ...`
										: `${building.building_name}:`}
									{'  '}
									<span className='leading-none text-lg text-gray-700 pb-2'>
										building - {building.building_num}
									</span>
								</h1>

								{''}
								<BsBuildingsFill
									className={`text-indigo-700 ${daysRemainingStyle}`}
									size={40}
								/>
							</div>
							<div className='mt-5 flex flex-col space-y-5 pr-10'>
								<div className='flex justify-start space-x-10 items-center text-left'>
									<MdOutlineLocationCity size={30} className='text-gray-700' />
									<h1 className='w-1/2'>Total Gate-ways</h1>
									<p>{building.gateway_sets.length}</p>
								</div>
								<div className='flex justify-start space-x-10 items-center text-left'>
									<MdOutlineLocationCity size={30} className='text-gray-700' />
									<h1 className='w-1/2'>Total Workers</h1>
									<p>{building.users.length}</p>
								</div>
								<div
									className={`flex justify-start space-x-10 items-center text-left ${daysRemainingStyle}`}
								>
									<FaHourglassStart
										size={30}
										className={`text-gray-700 ${daysRemainingStyle}`}
									/>
									<h1 className={`w-1/2 `}>Remaining days</h1>
									<p>{daysRemaining}</p>
								</div>
								<div className='flex justify-start space-x-10 items-center text-left'>
									<BsCalendarDate size={30} className='text-gray-700' />
									<h1 className='w-1/2'>Expiry-date</h1>
									<p>{building.expiration_date}</p>
								</div>
								<div className='flex justify-start space-x-10 items-center text-left'>
									<MdOutlineLocationCity size={30} className='text-gray-700' />
									<h1 className='w-1/2'>Building address</h1>
									<p>{building.building_addr}</p>
								</div>
							</div>
						</Link>
					)
				})}
			</div>
		</div>
	)
}

export default ClientDetails
