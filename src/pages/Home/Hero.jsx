import React from 'react'
import './Hero.css'

const Hero = () => {
	const statistics = [
		{
			number: 200,
			title: 'Clients',
		},
		{
			number: 24,
			title: 'Projects',
		},
		{
			number: 112,
			title: 'Products',
		},
		{
			number: 8,
			title: 'Years experience',
		},
	]
	return (
		<>
			<div className='w-full h-auto'>
				<div className='w-full bg-white h-auto flex items-center lg:justify-between md:justify-between sm:justify-center justify-center lg:gap-7 md:gap-7 sm:gap-5 gap-5 lg:px-24 md:px-16 sm:px-6 px-6 flex-wrap'>
					{/* === 1 === */}
					{statistics.map((item, index) => (
						<div
							key={index}
							className='group flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 hover:bg-gray-200 rounded-md ease-out duration-700 cursor-pointer'
						>
							<h5 className='text-4xl text-indigo-500 group-hover:text-indigo-400 ease-out duration-700 font-semibold mb-2 uppercase'>
								{item.number}
							</h5>
							<p className='text-lg text-indigo-500 font-medium'>
								{item.title}
							</p>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Hero
