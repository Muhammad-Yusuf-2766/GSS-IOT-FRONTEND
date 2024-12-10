const UsersCard = ({ cardData }) => {
	return (
		<div className='w-full grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
			{cardData.map((card, index) => (
				<div
					key={index}
					className='p-5 bg-white rounded-xl h-[170px] shadow-lg shadow-indigo-200 hover:shadow-indigo-400 duration-150 ease-out'
				>
					<div className='flex justify-between'>
						<h1 className='leading-none text-3xl font-bold text-gray-700 pb-2'>
							{card.header}
						</h1>
						<card.icon className='text-indigo-700' size={40} />
					</div>
					<div className='mt-5 flex flex-col space-y-5 pr-10'>
						<div className='flex justify-start space-x-10 items-center text-left'>
							<card.icon size={30} className='text-gray-700' />
							<h1 className='w-1/2 text-gray-700'>총 {card.header}</h1>
							<p className='leading-none text-xl font-bold text-indigo-500'>
								{card.number}
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default UsersCard
