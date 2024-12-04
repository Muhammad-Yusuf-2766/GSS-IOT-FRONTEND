import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { signupRequest } from '../../ApiServices/Auth_api'

const SignupForm = () => {
	const [user_name, setUserName] = useState('')
	const [user_email, setEmail] = useState('')
	const [user_phone, setPhone] = useState('')
	const [user_password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [error, setError] = useState('')

	const handleSubmit = async e => {
		e.preventDefault()

		// Check if password and confirm password match
		if (user_password !== confirmPassword) {
			setError('Passwords do not match')
			return // Stop execution if passwords do not match
		}

		try {
			const signupData = {
				user_name,
				user_email,
				user_phone,
				user_password,
			}

			// Call the API service to sign up
			const data = await signupRequest(signupData)
			if (data.state === 'Fail') {
				toast.error(data.state)
				setError(data.message)
			} else if (data.state === 'Success') {
				toast.success('Created Account successfully!', {
					onClose: () => {
						window.location.reload() // Reload the page after toast is closed
					},
				})
				setError('')
			}

			// Optionally, redirect to another page
			// window.location.href = '/login'; // Redirect to login page after sign-up
		} catch (error) {
			setError(error.message || 'Sign up failed')
		}
	}

	return (
		<div className='w-full h-auto pb-4 grid grid-cols-2 gap-4 justify-between items-center'>
			<div>
				<img src='/Logo_last.png' alt='Logo' />
			</div>
			<section className='mt-10'>
				<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
					<div className='w-full bg-white rounded-lg custom-shadow md:mt-0 sm:max-w-md xl:p-0'>
						<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
							<h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
								Create an account
							</h1>
							<form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
								<div>
									<label
										htmlFor='user_name'
										className='block mb-2 text-sm font-medium'
									></label>
									<input
										type='text'
										name='user_name'
										id='user_name'
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
										placeholder='User name'
										required
										value={user_name}
										onChange={e => setUserName(e.target.value)}
									/>
								</div>
								<div>
									<label
										htmlFor='email'
										className='block mb-2 text-sm font-medium'
									></label>
									<input
										type='email'
										name='email'
										id='email'
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
										placeholder='name@company.com'
										required
										value={user_email}
										onChange={e => setEmail(e.target.value)}
									/>
								</div>
								<div>
									<label
										htmlFor='phone'
										className='block mb-2 text-sm font-medium'
									></label>
									<input
										type='number'
										name='phone'
										id='phone'
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
										placeholder='User phone'
										required
										value={user_phone}
										onChange={e => setPhone(e.target.value)}
									/>
								</div>
								<div>
									<label
										htmlFor='password'
										className='block mb-2 text-sm font-medium'
									></label>
									<input
										type='password'
										name='password'
										id='password'
										placeholder='password'
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
										required
										value={user_password}
										onChange={e => setPassword(e.target.value)}
									/>
								</div>
								<div>
									<label
										htmlFor='confirm-password'
										className='block mb-2 text-sm font-medium'
									></label>
									<input
										type='password'
										name='confirm-password'
										id='confirm-password'
										placeholder='password confirm'
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
										required
										value={confirmPassword}
										onChange={e => setConfirmPassword(e.target.value)}
									/>
								</div>
								<button
									type='submit'
									className='w-full text-white border-2 bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
								>
									Create an account
								</button>
								{error && <p className='text-red-500'>{error}</p>}
								<p className='text-sm font-light text-gray-600 '>
									Already have an account?{' '}
									<a
										href='/login'
										className='font-medium hover:underline text-blue-600'
									>
										Login here
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

export default SignupForm
