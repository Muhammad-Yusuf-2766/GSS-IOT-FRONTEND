import React from 'react'
import { useParams } from 'react-router-dom'
import { ServiceData } from '../../DB/index' // Make sure to update the path according to your project structure
import download_icon from '../../assets/download (2).png'
import TertiaryLink from '../../components/LinkBtn/TertiaryLink'

const DetailedService = () => {
	const { id } = useParams()
	const service = ServiceData.find(item => item.id === parseInt(id))

	if (!service || undefined) {
		return <div>Service not found</div>
	}

	return (
		<>
			<div className='w-full h-auto flex items-center justify-between gap-7 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap'>
				<div className='lg:w-[38%] md:w-full sm-full w-full h-auto relative overflow-hidden rounded-md'>
					<img
						src={service.serviceImg}
						alt='about'
						className='w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover'
					/>
				</div>
				<div className='lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center'>
					<h6 className='border border-indigo-400 rounded-md p-5 text-lg font-medium text-indigo-400 flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-7 mb-7'>
						{/* <img src={logo} alt='log' className='w-[100px]' /> */}
						{service.title}-{service.title_2}
					</h6>
					<h1 className='lg:text-3xl md:text-3xl sm:text-2xl text-xl text-center font-normal text-gray-100 mb-4 leading-normal pe-5'>
						{service.header}
					</h1>
					<p className='lg:text-base md:text-base sm:text-sm text-sm text-gray-800 font-medium mb-4'>
						{service.explanation}
					</p>
				</div>

				{/* Added condition to check if about_service exists */}
				{service.about_service && (
					<div className='w-full h-auto flex flex-col flex-wrap lg:mx-20 md:mx-15 sm:mx-10 mx-5 my-10 gap-y-5 '>
						{service.about_service.map((data, index) => (
							<div
								key={data.id || index}
								className='lg:w-[100%] md:w-[100%] sm:w-[100%] w-full flex lg:flex-row md:flex-row sm:flex-col flex-col items-center lg:gap-x-7 md:gap-x-8 sm:gap-x-5 gap-x-0  text-indigo-600'
							>
								<h2 className='w-full flex justify-center lg:text-3 md:text-2xl sm:text-xl text-xl'>
									{data.header}
								</h2>
								<p className='w-full text-start lg:text-lg md:text-md sm:text-sm text-gray-800'>
									{data.text}
								</p>
							</div>
						))}
					</div>
				)}

				{/* {service.pdf_url && ( */}
				<div className='w-full h-full flex items-center justify-center flex-col text-white p-4 z-10'>
					<TertiaryLink
						link={''}
						isNested
						className='w-[250px] h-[70px] bg-indigo-600 text-white hover:bg-indigo-700'
					>
						About Service
						<img src={download_icon} alt='Download Icon' className='ml-2' />
					</TertiaryLink>
				</div>
				{/* // )} */}
			</div>
		</>
	)
}

export default DetailedService
