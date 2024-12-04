import React from 'react'
import { HiHome } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const AuthorizeError = () => {
	return (
		<div className='w-full h-full flex flex-col items-center pt-20'>
			<h1 className='text-xl font-bold text-gray-700'>
				Only Authorized Users can use this page!
			</h1>
			<h3 className='text-xl font-bold text-gray-700'>
				Please Login with your Client accaunt.
			</h3>
			<img src='/Shared_photo/Auth_err.jpg' alt='' className='' />
			<Link
				to={'/'}
				className='text-white underline underline-offset-4 py-2 px-4 bg-teal-500 mt-4 flex gap-2 justify-center items-center rounded-full hover:translate-x-1 ease-out duration-500 shadow-lg shadow-white hover:shadow-gray-500'
			>
				<HiHome size={50} />
				<h2>Go back to Main-page!</h2>
			</Link>
		</div>
	)
}

export default AuthorizeError
