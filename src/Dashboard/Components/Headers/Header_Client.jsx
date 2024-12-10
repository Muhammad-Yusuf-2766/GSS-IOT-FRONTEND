// === Icons === //
import { toast } from 'react-toastify'
import { logOutRequest } from '../../../ApiServices/Auth_api'
import { verifyUserData } from '../../../ApiServices/verifyAuth'
import UserHeader from '../../../components/User/Userbadge'

const HeaderClient = () => {
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
		<div className='flex justify-between items-center p-4 border-indigo-500 border-b-2 '>
			{verifyUserData && (
				<div>
					<h1 className='text-md font-semibold text-gray-700'>환영합니다.</h1>

					{verifyUserData.user_title === 'BOSS' ? (
						<p className='text-xl font-semibold text-gray-700'>
							매니저{' '}
							<span className='text-xl font-bold text-indigo-700'>
								{' '}
								{verifyUserData.user_name.toUpperCase()}
							</span>
						</p>
					) : (
						<span className='text-xl font-bold text-indigo-700'>
							{' '}
							{verifyUserData.user_name.toUpperCase()}
						</span>
					)}
				</div>
			)}
			<h1 className='leading-none text-3xl font-bold text-indigo-500'>
				Hyundai Constructions Company
			</h1>
			<div className=''>
				<UserHeader handeLogout={handleLogoutRequest} />
			</div>
		</div>
	)
}

export default HeaderClient
