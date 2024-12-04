import { FolderCog, MoveRight } from 'lucide-react'
import React from 'react'
import PrimaryBtn from '../../components/Button/PrimaryBtn'
import ServiceCard from '../../components/Card/service.card'
import { ServiceData } from '../../DB'

export const Services = () => {
	return (
		<>
			<div className='w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-10 md:px-16 sm:px-16 px-4'>
				<h6 className='text-3xl font-medium text-indigo-600 flex items-center gap-x-2 mb-6'>
					<FolderCog
						size={'70px'}
						strokeWidth='1'
						className='text-indigo-500'
					/>
					Our Services
				</h6>
				<div className='w-full bg-white py-10 shadow shadow-indigo-500 rounded-lg h-auto flex items-center justify-center gap-x-4 gap-y-10 flex-wrap mb-10'>
					{ServiceData.slice(0, 3).map(data => (
						<ServiceCard data={data} key={data.id} />
					))}
				</div>
				<PrimaryBtn
					route={'/services'}
					className='py-4 px-8 flex gap-x-4 border bg-indigo-600 text-white hover:bg-indigo-700'
				>
					View All Services
					<MoveRight />
				</PrimaryBtn>
			</div>
		</>
	)
}

export default Services
