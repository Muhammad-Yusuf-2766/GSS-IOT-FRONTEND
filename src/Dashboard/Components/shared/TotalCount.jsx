import React from 'react'

const Totalcountbox = ({ itemName, item, icon }) => {
	const itemCount = Array.isArray(item) ? item.length : 0

	return (
		<div className='flex items-center gap-x-4 bg-white border text-gray-600  border-indigo-500 shadow-md shadow-gray-300 font-medium rounded-lg text-xl px-5 py-3 text-center'>
			<span className='text-4xl'>{icon}</span>
			<span>
				Total {itemName} number: {itemCount}
			</span>
		</div>
	)
}

export default Totalcountbox
