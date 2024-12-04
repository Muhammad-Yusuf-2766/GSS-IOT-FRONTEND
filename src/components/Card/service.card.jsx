import { MoveRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import TertiaryLink from '../LinkBtn/TertiaryLink'

const ServiceCard = ({ data }) => {
	return (
		<>
			<div
				// key={data.id}
				className='lg:w-[30%] md:w-[30%] sm:w-[48%] w-[80%] lg:h-[65vh] md:h-[60vh] sm:h-[55vh] h-[45vh] rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translate-y-2 ease-out duration-500 shadow-lg shadow-gray-700 hover:shadow-gray-800 focus:ring-1 focus:outline-none'
				style={{
					backgroundImage: `url(${data.serviceImg})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<Link to={`/services/${data.id}`}>
					<div className='w-full h-full bg-black/25 absolute top-0 left-0 -z-10'></div>
					<div className='w-full h-full flex items-center justify-center flex-col text-white p-4 z-10'>
						<h1 className='text-xl text-gray-100 font-semibold text-center mb-4'>
							{data.title} <br /> {data.title_2}
						</h1>
						<p className='text-base text-gray-200 font-normal text-center mb-4'>
							{data.desc}
						</p>
						<TertiaryLink isNested>
							<MoveRight className='w-4 h-4' />
						</TertiaryLink>
					</div>
				</Link>
			</div>
		</>
	)
}

export default ServiceCard
