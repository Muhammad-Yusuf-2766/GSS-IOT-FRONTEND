import React from 'react'
import { Link } from 'react-router-dom'

const PrimaryBtn = ({ route, id, children, className, isNested }) => {
	return isNested ? (
		<>
			<div
				type={type}
				id={id}
				className={`text-base text-gray-200 border-slate-100 shadow-md font-medium px-5 py-1.5 rounded-full gap-x-1 hover:bg-indigo-700 border-2 border-white/20 ease-out duration-500 ${className}`}
			>
				{children}
			</div>
		</>
	) : (
		<Link
			to={route}
			className={`text-base border-slate-100 shadow-md shadow-indigo-400 font-medium px-5 py-1.5 rounded-lg gap-x-1 hover:shadow-indigo-600  border-white/20 ease-out duration-300 ${className}`}
		>
			{children}
		</Link>
	)
}

export default PrimaryBtn

// className =
// 	'flex items-center justify-between text-gray-700 bg-white shadow-md shadow-gray-400 hover:shadow-gray-600 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-3 text-center me-2'
