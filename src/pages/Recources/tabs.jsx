import { Accordion } from 'flowbite-react'
import { ArrowDownToLine } from 'lucide-react'

export function RecourceList({ data }) {
	return (
		<Accordion className='w-4/6 border-2 border-gray-700'>
			{data.map((item, index) => (
				<Accordion.Panel key={index}>
					<Accordion.Title className='text-xl border-2 text-gray-700 flex justify-between items-center gap-x-10'>
						{item.name}
					</Accordion.Title>
					<Accordion.Content className=''>
						<p className='text-lg text-gray-700 dark:text-gray-400 mb-5'>
							{item.description}
						</p>
						<div className='flex items-center'>
							<label
								htmlFor=''
								className='underline underline-offset-4 text-blue-500 mr-2'
							>
								{item.file} 다운로드:
							</label>
							<a
								href={item.url} // Replace with the actual link from your data
								target='_blank'
								rel='noopener noreferrer'
								className='w-fit flex items-center gap-3 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600'
							>
								다운로드
								<ArrowDownToLine />
							</a>
						</div>
					</Accordion.Content>
				</Accordion.Panel>
			))}
			{/* <div className='felx flex-col '>
				{data.map(url => (
					// <a
					// 	href={url.url} // Replace with the actual link from your data
					// 	target='_blank'
					// 	rel='noopener noreferrer'
					// 	className='bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600'
					// >
					// 	Download Catalog
					// </a>
				))}
			</div> */}
		</Accordion>
	)
}
