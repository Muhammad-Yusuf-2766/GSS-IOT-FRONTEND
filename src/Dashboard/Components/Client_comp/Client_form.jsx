/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { fetchBuildings, postClientdata } from '../../../Services/getData'

const ClientForm = ({ users }) => {
	// State to manage client data
	const [client, setClient] = useState({
		company: '',
		buildings: [],
		company_addr: '',
		boss_users: [],
	})
	const [buildings, setBuildings] = useState([])

	// State to manage the visibility of the dropdown
	const [userDropdownOpen, setUserDropdownOpen] = useState(false)
	const [buildigDropdownOpen, setBuildingDropdownOpen] = useState(false)
	const [selectedUsers, setSelectedUsers] = useState([])
	const [selectedBuildings, setSelectedBuildings] = useState([])

	useEffect(() => {
		const GetBuildings = async () => {
			const buildings = await fetchBuildings()
			console.log(buildings)
			setBuildings(buildings)
		}

		GetBuildings()
	}, [])

	const resetForm = () => {
		setClient({
			company: '',
			buildings: [],
			company_addr: '',
			boss_users: [],
		})
		setSelectedUsers([])
		setSelectedBuildings([])
	}

	const toggleUserDropdown = () => {
		setUserDropdownOpen(prevState => !prevState)
	}

	const toggleBuildingDropdown = () => {
		setBuildingDropdownOpen(prevState => !prevState)
	}

	// Handle input change
	const handleInputChange = e => {
		const { name, value } = e.target
		setClient(prevClient => ({
			...prevClient,
			[name]: value,
		}))
	}

	// Handle checkbox change for users
	const handleUserCheckbox = userId => {
		setSelectedUsers(prevSelectedUsers =>
			prevSelectedUsers.includes(userId)
				? prevSelectedUsers.filter(id => id !== userId)
				: [...prevSelectedUsers, userId]
		)
	}

	const handleBuildingCheckbox = bgId => {
		setSelectedBuildings(SelectedBuildings =>
			SelectedBuildings.includes(bgId)
				? SelectedBuildings.filter(id => id !== bgId)
				: [...SelectedBuildings, bgId]
		)
	}

	// Function to check and update client status based on expiry date
	const checkClientStatus = () => {
		const today = new Date()
		const expiryDate = new Date(client.expiry_date)

		// Adjust time to ignore time part in the date comparison
		today.setHours(0, 0, 0, 0) // Set to midnight to compare dates only, ignoring time
		expiryDate.setHours(0, 0, 0, 0)

		if (expiryDate < today) {
			// If expiry date has passed, set client_status to false
			setClient(prevClient => ({
				...prevClient,
				client_status: false,
			}))
		} else {
			// If expiry date is in the future or today, set client_status to true
			setClient(prevClient => ({
				...prevClient,
				client_status: true,
			}))
		}
	}

	// Automatically check status on expiry date change
	useEffect(() => {
		if (client.expiry_date) {
			checkClientStatus()
		}
	}, [client.expiry_date])

	// Handle form submission
	const handleSubmit = e => {
		e.preventDefault()

		// Update client state with selected gateways
		const updatedClient = {
			...client,
			buildings: selectedBuildings,
			boss_users: selectedUsers,
		}

		const PostClient = async () => {
			const clientData = await postClientdata(updatedClient)
			console.log(clientData)
			if (clientData.state === 'Success') {
				toast.success('Building created successfully')
				resetForm()
			} else {
				toast.error('Error on creating building')
			}
		}
		PostClient()

		// Check client status on submit as well
		checkClientStatus()
	}

	return (
		<div className='w-[40%] flex justify-center items-center flex-col'>
			<h1 className='leading-none text-3xl font-bold text-gray-700 pb-2 mb-5 underline underline-offset-4'>
				Create new Client
			</h1>
			<form
				onSubmit={handleSubmit}
				className='w-full p-4 border bg-white rounded-lg shadow-lg shadow-indigo-300'
			>
				{/* Client Company */}
				<div className='mb-4'>
					<label className='block text-gray-500 text-sm font-medium mb-2'>
						Client Company:
					</label>
					<input
						required
						type='text'
						name='company'
						value={client.company}
						onChange={handleInputChange}
						className='w-full px-3 py-2 border border-gray-300 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-700'
					/>
				</div>

				{/* Number of Buildings */}
				{/* <div className='mb-4'>
					<label className='block text-gray-500 text-sm font-medium mb-2'>
						Number of Buildings:
					</label>
					<input
						required
						type='number'
						name='buildings'
						value={client.number_of_buildings}
						onChange={handleInputChange}
						className='w-full px-3 py-2 border border-gray-300 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-700'
					/>
				</div> */}

				{/* Buildings Addresses */}
				<div className='mb-4'>
					<label className='block text-gray-500 text-sm font-medium mb-2'>
						Company Address:
					</label>
					<input
						required
						type='text'
						name='company_addr'
						value={client.company_addr}
						onChange={handleInputChange}
						className='w-full px-3 py-2 border border-gray-300 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-700'
					/>
				</div>

				{/* Buildings Selection Dropdown */}
				<div className='mb-4'>
					<h3 className='text-lg font-semibold text-gray-700'>
						Select Buildings
					</h3>
					<div className='relative'>
						<button
							type='button'
							onClick={toggleBuildingDropdown}
							className='w-full px-4 py-2 bg-indigo-700 text-white rounded-md text-left flex justify-between items-center hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-700'
						>
							Choose Buildings
							<svg
								className={`w-5 h-5 transform transition-transform ${
									userDropdownOpen ? 'rotate-180' : ''
								}`}
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M19 9l-7 7-7-7'
								/>
							</svg>
						</button>

						{buildigDropdownOpen && (
							<div className='mt-2 p-4 border border-gray-300 rounded-md bg-gray-200 absolute w-full z-10'>
								{buildings.length === 0 ? (
									<p className='text-gray-500'>No available users</p>
								) : (
									buildings.map((building, index) => (
										<div key={index} className='flex items-center mb-2'>
											<input
												type='checkbox'
												id={`user-${building._id}`}
												checked={selectedBuildings.includes(building._id)}
												onChange={() => handleBuildingCheckbox(building._id)}
												className='mr-2'
											/>
											<label
												htmlFor={`user-${building._id}`}
												className='text-gray-500'
											>
												{building.building_name}:{building.building_num}
											</label>
										</div>
									))
								)}
							</div>
						)}
					</div>
				</div>

				{/* User Selection Dropdown */}
				<div className='mb-4'>
					<h3 className='text-lg font-semibold text-gray-700'>Select Users</h3>
					<div className='relative'>
						<button
							type='button'
							onClick={toggleUserDropdown}
							className='w-full px-4 py-2 bg-indigo-700 text-white rounded-md text-left flex justify-between items-center hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-700'
						>
							Choose Users
							<svg
								className={`w-5 h-5 transform transition-transform ${
									userDropdownOpen ? 'rotate-180' : ''
								}`}
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M19 9l-7 7-7-7'
								/>
							</svg>
						</button>

						{userDropdownOpen && (
							<div className='mt-2 p-4 border border-gray-300 rounded-md bg-gray-200 absolute w-full z-10'>
								{users.length === 0 ? (
									<p className='text-gray-500'>No available users</p>
								) : (
									users.map((user, index) => (
										<div key={index} className='flex items-center mb-2'>
											<input
												type='checkbox'
												id={`user-${user._id}`}
												checked={selectedUsers.includes(user._id)}
												onChange={() => handleUserCheckbox(user._id)}
												className='mr-2'
											/>
											<label
												htmlFor={`user-${user._id}`}
												className='text-gray-500'
											>
												{user.user_name}
											</label>
										</div>
									))
								)}
							</div>
						)}
					</div>
				</div>

				{/* Submit Button */}
				<div className='flex justify-center mt-6'>
					<button
						type='submit'
						className='bg-indigo-700 text-white px-6 py-2 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-700'
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	)
}

export default ClientForm
