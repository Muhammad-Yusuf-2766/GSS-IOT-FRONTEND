/* eslint-disable react/prop-types */
const MemberCard = () => {
	return (
		<a
			href='#'
			className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100'
		>
			<img
				className='w-full rounded-t-lg h-100 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'
				src='/Members/Kim_prof.jpg'
				alt=''
			/>
			<div className='flex flex-col justify-between p-4 leading-normal'>
				<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
					Noteworthy technology acquisitions 2021
				</h5>
				<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
					Here are the biggest enterprise technology acquisitions of 2021 so
					far, in reverse chronological order.
				</p>
			</div>
		</a>
	)
}

export default MemberCard
