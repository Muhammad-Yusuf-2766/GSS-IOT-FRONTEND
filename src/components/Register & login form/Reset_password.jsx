import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { resetPwRequest, resetPwVerify } from '../../ApiServices/Auth_api'

const Resetwassword = () => {
	const [user_email, setEmail] = useState('')
	const [otp, setOtp] = useState()
	const [new_password, setPassword] = useState('')
	const [sending, setSending] = useState(false)
	const [otpSts, setOtpSts] = useState({
		state: false,
		message: '',
	})
	const [error, setError] = useState('')

	const navigate = useNavigate()

	const handleResetPwRequest = async e => {
		e.preventDefault()
		if (!user_email) {
			setOtpSts(prev => ({
				...prev,
				message: 'Email is required!',
			}))
			return
		}
		try {
			setSending(true) // Spinnerni ishga tushirish
			const data = await resetPwRequest(user_email) // API chaqiruvi

			if (data.state === 'success') {
				toast.success('OTP sent successfully!')
				setOtpSts(prev => ({
					...prev,
					state: true,
					message: data.message,
				}))
			} else if (data.state === 'Fail') {
				toast.error(data.state)
				setOtpSts(prev => ({
					...prev,
					message: '',
				}))
				setError(data.message)
			}
		} catch (error) {
			console.error(error)
			setError(error.message || 'An error occurred')
			toast.error(
				'An error occurred. Please check your credentials and try again.'
			)
		} finally {
			setSending(false) // Har qanday holatda spinnerni to‘xtatish
		}
	}

	const handleSubmit = async e => {
		e.preventDefault()
		setSending(true) // Start spinner
		const requestData = {
			user_email,
			otp,
			new_password,
		}
		try {
			const data = await resetPwVerify(requestData) // Assuming `resetPwVerify` is your API call
			if (data.state === 'success') {
				toast.success('Password reseted successfully!', {
					onClose: () => {
						navigate('/login')
					},
				})
				// Additional success logic if required
			} else {
				setError(data.message)
				toast.error(data.message || 'Failed to reset password!')
			}
		} catch (error) {
			console.error(error)
			toast.error(
				'An error occurred. Please check your credentials and try again.'
			)
		} finally {
			setSending(false) // Stop spinner
		}
	}

	return (
		<div className='w-full h-screen grid grid-cols-2 justify-between items-center'>
			<div>
				<img src='/Logo_last.png' alt='Logo' />
			</div>
			<section className=''>
				<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
					<div className='w-full bg-white rounded-lg custom-shadow dark:border md:mt-0 sm:max-w-md xl:p-0'>
						<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
							<h1 className='text-lg font-bold leading-tight tracking-tight text-gray-700 md:text-xl'>
								Reset your password with email
							</h1>
							<form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
								<div className='flex flex-col gap-y-3 text-gray-600'>
									<label htmlFor='email' className='block text-sm font-medium'>
										Enter your registered email
									</label>
									<input
										type='text'
										name='email'
										id='email'
										disabled={otpSts.state}
										value={user_email}
										autoComplete='username'
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
										placeholder='name@company.com'
										required
										onChange={e => setEmail(e.target.value)}
									/>
									<p className='text-sm'>{otpSts.message}</p>

									<button
										type='button'
										onClick={handleResetPwRequest}
										disabled={otpSts.state}
										className={`flex items-center gap-2 w-fit text-white border-2 rounded-lg text-sm px-3 py-2 ${
											otpSts.state
												? 'bg-gray-400 cursor-not-allowed'
												: 'bg-indigo-600 hover:bg-indigo-700'
										}`}
									>
										{otpSts.state ? (
											<>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='w-5 h-5 text-white'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
													strokeWidth={2}
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														d='M5 13l4 4L19 7'
													/>
												</svg>
												Sent
											</>
										) : sending ? ( // sending - spinner uchun alohida state
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='w-5 h-5 text-white animate-spin'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
												strokeWidth={2}
											>
												<circle
													cx='12'
													cy='12'
													r='10'
													stroke='currentColor'
													strokeWidth='4'
												/>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M12 2v4m0 12v4m10-10h-4M4 12H2'
													stroke='currentColor'
													strokeWidth='4'
												/>
											</svg>
										) : (
											'Send'
										)}
									</button>
								</div>

								{/* OTP Verification part */}
								{otpSts.state && (
									<div className='flex flex-col gap-y-2 text-gray-600'>
										<label htmlFor='otp' className='block text-sm font-medium'>
											Enter OTP code
										</label>
										<input
											type='number'
											name=''
											id='otp'
											placeholder='number'
											autoComplete='current-password'
											className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
											required
											value={otp}
											onChange={e => setOtp(e.target.value)}
										/>
										<label
											htmlFor='new_password'
											className='block text-sm font-medium'
										>
											Enter your new password
										</label>
										<input
											type='password'
											name='new_password'
											id='new_password'
											placeholder='new password'
											autoComplete='current-password'
											className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
											required
											value={new_password}
											onChange={e => setPassword(e.target.value)}
										/>

										<button
											type='submit'
											className={`w-full text-white border-2 bg-indigo-600 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
												sending ? 'cursor-not-allowed opacity-75' : ''
											}`}
											disabled={sending} // Disable button while sending
										>
											{sending ? (
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='w-5 h-5 text-white animate-spin mx-auto'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
													strokeWidth={2}
												>
													<circle
														cx='12'
														cy='12'
														r='10'
														stroke='currentColor'
														strokeWidth='4'
													/>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														d='M12 2v4m0 12v4m10-10h-4M4 12H2'
														stroke='currentColor'
														strokeWidth='4'
													/>
												</svg>
											) : (
												'Submit'
											)}
										</button>
									</div>
								)}

								{error && <p className='text-red-500'>{error}</p>}
								<p className='text-sm font-light text-gray-600 '>
									Do you not have an account yet ?{' '}
									<a
										href='/signup'
										className='font-medium hover:underline text-blue-600'
									>
										Create account here
									</a>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Resetwassword
