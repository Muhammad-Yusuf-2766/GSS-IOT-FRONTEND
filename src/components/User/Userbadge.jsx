import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const UserHeader = ({ handeLogout }) => {
	const [openDrop, setOpenDrop] = useState(false)
	const [user, setUser] = useState()

	// ======== Click everywhere to close User Drop menu ======= //
	const menuRef = useRef()
	const imgRef = useRef()
	useEffect(() => {
		const stordeUser = localStorage.getItem('user_data')
		setUser(JSON.parse(stordeUser))
		const handleClickOutside = e => {
			// Check if the click is outside both the menu and the image
			if (
				menuRef.current &&
				imgRef.current &&
				menuRef.current !== e.target &&
				!imgRef.current.contains(e.target) // Bu yuqoridagi conditionni oson usuli
			) {
				setOpenDrop(false)
			}
		}

		window.addEventListener('click', handleClickOutside)

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener('click', handleClickOutside)
		}
	}, [])
	return (
		<div className='flex items-center gap-x-2'>
			<h4 className='text-gray-600 underline underline-offset-2 font-bold text-xl'>
				{user && user.user_name}
			</h4>
			<div className='w-32 relative'>
				<img
					ref={imgRef}
					className='object-cover w-12 cursor-pointer rounded-full shadow-md shadow-gray-400 hover:shadow-gray-600 duration-200'
					src='/Members/default_user.webp'
					alt=''
					onClick={() => setOpenDrop(!openDrop)}
				/>

				{openDrop && (
					<div
						ref={menuRef}
						className='w-full h-auto bg-white rounded-md p-4 border border-gray-300 shadow-lg  absolute -left-14 top-16 '
					>
						<ul>
							<li className='p-1 text-md cursor-pointer rounded hover:bg-blue-100'>
								<Link to={'/my-page'} onClick={() => setOpenDrop(false)}>
									마이페이지
								</Link>
							</li>
							<li
								onClick={handeLogout}
								className='p-1 text-md cursor-pointer rounded hover:bg-blue-100'
							>
								로그아웃
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}

export default UserHeader
