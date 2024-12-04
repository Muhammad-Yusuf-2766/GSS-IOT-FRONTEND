import React from 'react'

const tHead = [
	'Count',
	'Node number',
	'Door status',
	'Battery status',
	'Node status',
	'Position',
	'Change status',
	'Delete gateway',
]

const NodesList = ({ allNodes, updateNode, deleteNode }) => {
	if (!Array.isArray(allNodes) || allNodes.length === 0) {
		return (
			<div className='text-center text-gray-700 py-10'>
				<h1 className='text-xl font-bold'>There is no Nodes available</h1>
			</div>
		)
	}

	return (
		// <div className='overflow-y-auto shadow-md shadow-slate-500 bg-white m-5 sm:rounded-lg mt-10'>
		<div className='max-h-[500px] overflow-y-auto bg-white'>
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
					{allNodes.map((node, index) => (
						<tr
							key={node._id}
							className='border-2 border-gray-400 hover:bg-gray-100 text-left'
						>
							<td className='w-5 px-4 py-3 border-x-2 border-gray-400 text-center text-gray-900'>
								{index + 1}
							</td>
							<td
								// scope='row'
								className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap'
							>
								{node.doorNum}
							</td>
							<td className='px-4 py-3 border-x-2 border-gray-400 text-center'>
								{node.doorChk}
							</td>
							<td className='px-4 py-3 border-x-2 border-gray-400 text-center'>
								{node.betChk}
							</td>

							<td className='px-4 py-3 border-x-2 border-gray-400'>
								<div
									className={`w-5 h-5 rounded-full ${
										!node.product_status ? 'bg-green-400' : 'bg-red-500'
									} mx-auto animate-pulse`}
								/>
							</td>
							<td className='px-4 py-3 border-x-2 border-gray-400 text-center'>
								{node.position}
							</td>

							<td className='px-4 py-3 border-x-2 border-gray-400 text-center'>
								<button
									onClick={() => updateNode(node._id)}
									className='border py-2 px-4 rounded-md bg-indigo-500 text-white hover:bg-indigo-600'
								>
									Change
								</button>
							</td>

							<td className='px-4 py-3 border-x-2 border-gray-400 text-center'>
								<button
									onClick={() => deleteNode(node._id)}
									className='border py-2 px-4 rounded-md bg-red-500 text-white hover:bg-red-600'
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
		// </div>
	)
}

export default NodesList
