import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function Layout({ children }) {
	return (
		<div className='w-full min-h-screen items-center flex flex-col'>
			<Navbar />
			<ToastContainer autoClose={1500} closeOnClick />
			<div className='flex-grow w-full bg-[#efefef] pt-20'>
				{/* Add pt-16 to push content down */}
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}

export default Layout
