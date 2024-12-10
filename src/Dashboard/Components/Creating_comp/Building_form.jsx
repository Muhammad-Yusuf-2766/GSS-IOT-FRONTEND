/* eslint-disable react/prop-types */
import { useState } from 'react'
import { toast } from 'react-toastify'
import { postBuildingdata } from '../../../Services/getData'

const BuildingForm = ({ gateways, users }) => {
	// State to manage form inputs
	const [building, setBuilding] = useState({
		building_name: '',
		building_addr: '',
		building_num: '',
		gateway_sets: [], // Will store selected gateway UUIDs
		users: [], // Will store selected user IDs
		permit_date: '',
		expiration_date: '',
		building_sts: true,
	})

	const [gatewayDropdownOpen, setGatewayDropdownOpen] = useState(false)
	const [userDropdownOpen, setUserDropdownOpen] = useState(false)
	const [selectedGateways, setSelectedGateways] = useState([])
	const [selectedUsers, setSelectedUsers] = useState([])

	// Toggle the gateway dropdown menu
	const toggleGatewayDropdown = () => {
		setGatewayDropdownOpen(prevState => !prevState)
	}

	// Toggle the user dropdown menu
	const toggleUserDropdown = () => {
		setUserDropdownOpen(prevState => !prevState)
	}

	// Handle checkbox change for gateways
	const handleGatewayCheckboxChange = gwId => {
		setSelectedGateways(prevSelectedGateways =>
			prevSelectedGateways.includes(gwId)
				? prevSelectedGateways.filter(id => id !== gwId)
				: [...prevSelectedGateways, gwId]
		)
	}

	// Handle checkbox change for users
	const handleUserCheckboxChange = userId => {
		setSelectedUsers(prevSelectedUsers =>
			prevSelectedUsers.includes(userId)
				? prevSelectedUsers.filter(id => id !== userId)
				: [...prevSelectedUsers, userId]
		)
	}

	// Handle input change
	const handleInputChange = e => {
		const { name, value } = e.target
		setBuilding(prevBuilding => ({
			...prevBuilding,
			[name]: value,
		}))
	}

	const resetForm = () => {
		setBuilding({
			building_name: '',
			building_addr: '',
			building_num: '',
			gateway_sets: [], // Will store selected gateway UUIDs
			users: [], // Will store selected user IDs
			permit_date: '',
			expiration_date: '',
			building_sts: true,
		})
		setSelectedUsers([])
		setSelectedGateways([])
	}

	// Handle form submission
	const handleSubmit = e => {
		e.preventDefault()

		// Create a new building object with the selected gateways and users
		const updatedBuilding = {
			...building,
			gateway_sets: selectedGateways, // Use selected gateways
			users: selectedUsers, // Use selected users
		}
		console.log(updatedBuilding)

		const PostBuilding = async () => {
			const postBuilding = await postBuildingdata(updatedBuilding) // Send the updated building
			console.log(postBuilding)
			if (postBuilding.state === 'Success') {
				toast.success('Building created successfully')
				resetForm()
			} else {
				toast.error('Error on creating building')
			}
		}
		PostBuilding()
	}

	return (
		<div className='w-[40%] flex justify-center items-center flex-col'>
			<h1 className='leading-none text-3xl font-bold text-gray-700 pb-2 mb-5 underline underline-offset-4'>
				현장 추가생성
			</h1>
			<form
				onSubmit={handleSubmit}
				className='w-full p-4 border bg-white rounded-lg shadow-lg shadow-indigo-300'
			>
				{/* Building Name */}
				<div className='mb-4'>
					<label className='block text-gray-500 text-sm font-medium mb-2'>
						기업명:
					</label>
					<input
						required
						type='text'
						name='building_name'
						value={building.building_name}
						onChange={handleInputChange}
						className='w-full px-3 py-2 border border-gray-300 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-700'
					/>
				</div>

				{/* Building Number */}
				<div className='mb-4'>
					<label className='block text-gray-500 text-sm font-medium mb-2'>
						현장 No.
					</label>
					<input
						required
						type='number'
						name='building_num'
						value={building.building_num}
						onChange={handleInputChange}
						className='w-full px-3 py-2 border border-gray-300 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-700'
					/>
				</div>

				{/* Building Address */}
				<div className='mb-4'>
					<label className='block text-gray-500 text-sm font-medium mb-2'>
						현장 주소:
					</label>
					<input
						required
						type='text'
						name='building_addr'
						value={building.building_addr}
						onChange={handleInputChange}
						className='w-full px-3 py-2 border border-gray-300 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-700'
					/>
				</div>

				{/* Gateway Selection Dropdown */}
				<div className='mb-4'>
					<h3 className='text-lg font-semibold text-gray-700'>
						게이트웨이 선택
					</h3>
					<div className='relative'>
						<button
							type='button'
							onClick={toggleGatewayDropdown}
							className='w-full px-4 py-2 bg-indigo-700 text-white rounded-md text-left flex justify-between items-center hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-700'
						>
							게이트웨이 선택
							<svg
								className={`w-5 h-5 transform transition-transform ${
									gatewayDropdownOpen ? 'rotate-180' : ''
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

						{gatewayDropdownOpen && (
							<div className='mt-2 p-4 border border-gray-300 rounded-md bg-gray-200 absolute w-full z-10'>
								{gateways.length === 0 ? (
									<p className='text-gray-500'>사용불가(게이트웨이)</p>
								) : (
									gateways.map(gw => (
										<div key={gw._id} className='flex items-center mb-2'>
											<input
												type='checkbox'
												id={`gw-${gw.GW_number}`}
												checked={selectedGateways.includes(gw._id)}
												onChange={() => handleGatewayCheckboxChange(gw._id)}
												className='mr-2'
											/>
											<label
												htmlFor={`gw-${gw.serial_number}`}
												className='text-gray-500'
											>
												게이트웨이: {gw.serial_number}
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
					<h3 className='text-lg font-semibold text-gray-700'>사용자 선택</h3>
					<div className='relative'>
						<button
							type='button'
							onClick={toggleUserDropdown}
							className='w-full px-4 py-2 bg-indigo-700 text-white rounded-md text-left flex justify-between items-center hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-700'
						>
							사용자 선택
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
									users.map(user => (
										<div key={user._id} className='flex items-center mb-2'>
											<input
												type='checkbox'
												id={`user-${user._id}`}
												checked={selectedUsers.includes(user._id)}
												onChange={() => handleUserCheckboxChange(user._id)}
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

				{/* Permit Date */}
				<div className='mb-4'>
					<label className='block text-gray-500 text-sm font-medium mb-2'>
						임대일:
					</label>
					<input
						required
						type='date'
						name='permit_date'
						value={building.permit_date}
						onChange={handleInputChange}
						className='w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-700'
					/>
				</div>

				{/* Expiry Date */}
				<div className='mb-4'>
					<label className='block text-gray-500 text-sm font-medium mb-2'>
						만료일:
					</label>
					<input
						required
						type='date'
						name='expiration_date'
						value={building.expiration_date}
						onChange={handleInputChange}
						min={building.permit_date} // Ensures expiry date can't be before permit date
						className='w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-700'
					/>
				</div>

				{/* Submit Button */}
				<div className='flex justify-center mt-6'>
					<button
						type='submit'
						className='bg-indigo-700 text-white px-6 py-2 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-700'
					>
						제출
					</button>
				</div>
			</form>
		</div>
	)
}

export default BuildingForm
