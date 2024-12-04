import React from 'react'

const MemberCard = ({ data }) => {
	return (
		<>
			<div className='lg:w-[23%] md:w-[48%] sm:w-[48%] w-[80%] lg:h-[50vh] md:h-[50vh] sm:h-[45vh] h-[45vh] rounded-xl overflow-hidden hover:border relative hover:scale-105 ease-out duration-300 cursor-pointer shadow-md shadow-indigo-400 hover:shadow-indigo-800'>
				<img
					src={data.MemberImg}
					alt='Member image'
					className='w-full h-full object-cover'
				/>
				<div className='w-full h-auto bg-gray-900/70 absolute bottom-0 left-0 py-4 px-2 flex items-center justify-center flex-col'>
					<h1 className='text-xl text-white text-semi-bold'>{data.name}</h1>
					<p className='text-sm text-gray-300'>{data.role}</p>
				</div>
			</div>
		</>
	)
}

export default MemberCard
