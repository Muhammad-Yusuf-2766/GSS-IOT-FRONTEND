// === Icons === //
import { FaClipboardList, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { logOutRequest } from '../../../ApiServices/Auth_api'
import { verifyUserData } from '../../../ApiServices/verifyAuth'
import UserHeader from '../../../components/User/Userbadge'

const Header = () => {
	// Handle logout
	const handleLogoutRequest = async () => {
		try {
			const res = await logOutRequest()
			if (res) {
				toast.success('Log Out Successfully!', {
					onClose: () => {
						window.location.replace('/') // Use navigate here to redirect after logout
					},
				})
			}
			return res
		} catch (err) {
			console.log(err)
			toast.error('Error on Logout :(')
		}
	}

	return (
		<div className='flex justify-between items-center p-4 border-gray-500 border-b-2'>
			{verifyUserData && (
				<div>
					<h1 className='text-md font-semibold text-gray-700'>Welcome Back!</h1>
					<p className='text-xl font-semibold text-gray-700'>
						GSS-GROUP Manager{' '}
						<span className='text-xl font-bold text-indigo-700'>
							{' '}
							{verifyUserData.user_name.toUpperCase()}
						</span>
					</p>
				</div>
			)}

			<div className='flex items-center space-x-5'>
				<div className='hidden md:flex'>
					<Link to={'/admin/dashboard/statistics-list'}>
						<button
							type='button'
							className='flex items-center justify-between text-gray-700 bg-white shadow-md shadow-gray-400 hover:shadow-gray-600 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-3 text-center me-2'
						>
							Statistics-List
							<FaClipboardList size={20} className='ml-2 text text-gray-700' />
						</button>
					</Link>
					<Link to={'/admin/dashboard/add-product'}>
						<button
							type='button'
							className='flex items-center justify-between text-indigo-600 bg-white shadow-md shadow-indigo-300 hover:shadow-indigo-500 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-3 text-center me-2'
						>
							Add Product
							<FaPlus className='ml-2' />
						</button>
					</Link>
					<Link to={'/admin/dashboard/add-client'}>
						<button
							type='button'
							className='flex items-center justify-between text-white bg-indigo-600 shadow-md shadow-gray-50 hover:shadow-gray-400 font-medium rounded-lg text-sm px-5 py-3 text-center me-2'
						>
							Create Client
							<FaPlus className='ml-2' />
						</button>
					</Link>
				</div>
				<div className='flex items-center space-x-5'>
					<button className='relative text-2xl text-gray-600'></button>
					<div className=''>
						<UserHeader handeLogout={handleLogoutRequest} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
