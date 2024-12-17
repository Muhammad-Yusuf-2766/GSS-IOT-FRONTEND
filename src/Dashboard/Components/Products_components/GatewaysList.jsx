import React from 'react'

const tHead = ['No.', '게이트웨이 No.', '노드', '상태', '상태 변경', '삭제']

const GatewaysList = ({ allgateways }) => {
	// Tekshirish: allgateways massiv mavjudligini va bo'sh emasligini
	if (!Array.isArray(allgateways) || allgateways.length === 0) {
		return (
			<div className='text-center text-gray-700 py-10'>
				<h1 className='text-xl font-bold'>There is no Gateways available</h1>
			</div>
		)
	}

	return (
		<div className='max-h-[700px] overflow-y-auto'>
			{/* Set max height as needed */}
			<table className='w-full text-sm text-center rtl:text-right text-gray-500  rounded-md'>
				<thead className='text-gray-700 text-xs uppercase bg-gray-300 border-2 border-gray-400'>
					<tr className=''>
						{tHead.map(head => (
							<th
								key={head}
								scope='col'
								className='px-4 py-3 border-x-2 border-gray-400'
							>
								{head}:
							</th>
						))}
					</tr>
				</thead>
				<tbody className='text-center'>
					{allgateways.map((gateway, index) => (
						<tr
							key={gateway._id}
							className='border-2 border-gray-400 hover:bg-gray-100 text-left'
						>
							<td className='w-5 px-4 py-3 border-x-2 border-gray-400 text-center text-gray-900'>
								{index + 1}
							</td>
							<td className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap'>
								{gateway.serial_number}
							</td>
							<td className='px-4 py-3 border-x-2 border-gray-400 text-center'>
								{gateway.nodes.length}
							</td>
							<td className='px-4 py-3 border-x-2 border-gray-400'>
								<div
									className={`w-5 h-5 rounded-full ${
										gateway.product_status ? 'bg-red-500' : 'bg-green-400'
									} mx-auto`}
								/>
							</td>

							<td className='px-4 py-3 border-x-2 border-gray-400 text-center'>
								<button className='border py-2 px-4 rounded-md bg-indigo-500 text-white hover:bg-indigo-600'>
									상태 변경
								</button>
							</td>

							<td className='px-4 py-3 border-x-2 border-gray-400 text-center'>
								<button className='border py-2 px-4 rounded-md bg-red-500 text-white hover:bg-red-600'>
									삭제
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default GatewaysList
