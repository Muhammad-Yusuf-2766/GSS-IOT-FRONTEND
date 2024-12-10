// ==== ICONS ==== //
import { useState } from 'react'
import { AiOutlineProduct } from 'react-icons/ai'
import { LuBox, LuUser } from 'react-icons/lu'
import { TbUsers } from 'react-icons/tb'
import { Link, NavLink } from 'react-router-dom'
// ==== ICONS ==== //

const Sidebar = () => {
	const [activeLink, setActiveLink] = useState(0)
	const handleLinkClick = index => {
		setActiveLink(index)
	}
	const SIDEBAR_LINKS = [
		{ id: 1, path: '/admin/dashboard', name: '대시보드', icon: LuBox },
		{ id: 2, path: 'users', name: '사용자', icon: TbUsers },
		{ id: 4, path: 'products', name: '제품', icon: AiOutlineProduct },
		{ id: 5, path: 'clients', name: '임대 현황', icon: LuUser },
	]
	return (
		<div className='w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r px-4 bg-white'>
			{/* Logo */}
			<div className=''>
				<Link to={'/'}>
					<h1 className='md:hidden flex text-indigo-500 font-bold my-10'>
						GSS
					</h1>
					<img
						src='/Logo_last.png'
						alt='Logo'
						className='w-38 hidden lg:flex md:flex'
					/>
				</Link>
			</div>
			{/* Logo */}

			{/* Navigation Links */}
			<ul className='mt-2 space-y-7'>
				{SIDEBAR_LINKS.map((link, index) => (
					<li
						key={index}
						className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${
							activeLink === index ? 'bg-indigo-100 text-indigo-600' : ''
						}`}
					>
						<NavLink
							to={link.path}
							onClick={() => handleLinkClick(index)}
							className={
								' flex items-center justify-center md:justify-start md:gap-5'
							}
						>
							<span className='text-indigo-500 text-[20px]'>{link.icon()}</span>
							<span className='text-sm text-gray-500 hidden md:flex'>
								{link.name}
							</span>
						</NavLink>
					</li>
				))}
			</ul>
			{/* Navigation Links */}

			<div className='w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center'>
				<p className='flex justify-center text-md text-white py-2 px-5 bg-gradient-to-r from-indigo-600 to-violet-400 rounded-full'>
					{' '}
					{/* <span>?</span> */}
					<span className='md:hidden flex'>?</span>
					<span className='hidden md:flex'>문의 ?</span>
				</p>
			</div>
		</div>
	)
}

export default Sidebar
