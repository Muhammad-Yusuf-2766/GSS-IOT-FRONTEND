import { FolderCog } from 'lucide-react'
import React from 'react'
import ServiceCard from '../../components/Card/service.card'
import { ServiceData } from '../../DB'

const Services = () => {
	return (
		<div className='w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-10 md:px-16 sm:px-6 px-4'>
			<h6 className='text-4xl font-medium text-gray-600 flex items-center gap-x-2 mb-6'>
				<FolderCog size={'70px'} strokeWidth='1' className='text-gray-600' />
				Our Services
			</h6>
			<div className='w-full h-auto flex items-start justify-center gap-x-4 gap-y-5 flex-wrap mb-10'>
				{ServiceData.map(data => (
					<ServiceCard data={data} key={data.id} />
				))}
			</div>
		</div>
	)
}

export default Services
