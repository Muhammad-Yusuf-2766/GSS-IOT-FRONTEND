import React from 'react'
import { IoCheckmarkSharp } from 'react-icons/io5'

const ActiveNodes = ({ nodes }) => {
	return (
		<div className='flex justify-center items-center flex-col'>
			<h1 className='leading-none text-xl font-bold text-gray-700 underline underline-offset-4'>
				작동 노드 현황
			</h1>
			<div className='w-[200px] h-[540px] overflow-y-auto shadow-md shadow-indigo-500 bg-white m-5 sm:rounded-lg'>
				<div className='max-h-[620px]'>
					{/* Set max height as needed */}
					<table className='w-full text-sm text-center rtl:text-right text-gray-500  rounded-md'>
						<thead className='text-gray-700 text-xs uppercase bg-gray-300 '>
							<tr className=''>
								<th
									scope='col'
									className='px-4 py-3 border-x-2 border-gray-400'
								>
									노드 No.
								</th>
								<th
									scope='col'
									className='px-4 py-3 border-x-2 border-gray-400'
								>
									노드 상태:
								</th>
							</tr>
						</thead>
						<tbody className='text-center'>
							{nodes?.map(node => (
								<tr
									key={node._id}
									className='border-2 border-gray-400 hover:bg-gray-100'
								>
									<th
										scope='row'
										className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap'
									>
										{node.doorNum}
									</th>
									<td className='px-4 py-3 border-x-2 border-gray-400 text-center'>
										{node.product_status && (
											<IoCheckmarkSharp size={25} color='green' />
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default ActiveNodes
