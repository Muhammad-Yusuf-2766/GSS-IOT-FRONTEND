import { Card } from 'flowbite-react'

export function CommunityCard({ data }) {
	return (
		<Card
			className='max-w-md h-[280px] hover:scale-105 ease-out duration-300 cursor-pointer shadow-md shadow-indigo-400 hover:shadow-indigo-800'
			imgSrc={data.MemberImg}
			horizontal
		>
			<h6 className='text-lg font-bold tracking-tight text-gray-700 '>
				{data.name}
			</h6>
			<h5 className='text-2xl font-bold tracking-tight text-gray-900 '>
				{data.role}
			</h5>
			<p className='font-normal text-gray-700 dark:text-gray-400'>
				Here are the biggest enterprise technology acquisitions of 2021 so far,
				in reverse chronological order.
			</p>
		</Card>
	)
}
