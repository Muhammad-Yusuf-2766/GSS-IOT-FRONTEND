import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { loginRequest } from '../../ApiServices/Auth_api'

const LoginForm = () => {
	const [user_email, setName] = useState('')
	const [user_password, setPassword] = useState('')
	const [error, setError] = useState('')

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const loginData = { user_email, user_password }
			const data = await loginRequest(loginData)

			// Handle successful login (e.g., store token, redirect)
			if (data.state === 'Success') {
				toast.success('Login successful!', {
					onClose: () => {
						window.location.reload()
					},
				})
				setError('')
			} else if (data.state === 'Fail') {
				toast.error(data.state)
				setError(data.message)
			}
		} catch (error) {
			console.error(error)
			setError(error || 'Login failed')
			toast.error(
				'An error occurred. Please check your credentials and try again.'
			)
		}
	}

	return (
		<div className='w-full h-screen grid grid-cols-2 justify-between items-center'>
			<div>
				<img src='/Logo_last.png' alt='Logo' />
			</div>
			<section className=''>
				<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
					<a href='#' className='flex items-center mb-6 text-2xl font-semibold'>
						<img
							className='w-8 h-8 mr-2'
							src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'
							alt='logo'
						/>
						Flowbite
					</a>
					<div className='w-full bg-white rounded-lg custom-shadow dark:border md:mt-0 sm:max-w-md xl:p-0'>
						<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
							<h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
								Login account
							</h1>
							<form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
								<div>
									<label
										htmlFor='name'
										className='block mb-2 text-sm font-medium'
									>
										Email
									</label>
									<input
										type='text'
										name='name'
										id='name'
										value={user_email}
										autoComplete='username'
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
										placeholder='name@company.com'
										required
										onChange={e => setName(e.target.value)}
									/>
								</div>
								<div>
									<label
										htmlFor='password'
										className='block mb-2 text-sm font-medium'
									>
										Password
									</label>
									<input
										type='password'
										name='password'
										id='password'
										placeholder='••••••••'
										autoComplete='current-password'
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
										required
										value={user_password}
										onChange={e => setPassword(e.target.value)}
									/>
								</div>

								<button
									type='submit'
									className='w-full text-white border-2 bg-indigo-600 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
								>
									Login
								</button>
								{error && <p className='text-red-500'>{error}</p>}
								<p className='text-sm font-light text-gray-600 '>
									Do you not have an account yet ?{' '}
									<a
										href='/signup'
										className='font-medium hover:underline text-blue-600'
									>
										Create account here
									</a>{' '}
									or{' '}
									<a
										href='/reset-password'
										className='font-medium hover:underline text-blue-600'
									>
										Reset password
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

export default LoginForm
