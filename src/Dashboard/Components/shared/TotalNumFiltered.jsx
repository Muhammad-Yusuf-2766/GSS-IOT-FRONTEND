import React from 'react'

const FilteredTotalCnt = ({ itemName, item, handleNodeStatus }) => {
	const itemArray = Array.isArray(item) ? item : []
	console.log(itemArray)

	return (
		<div className=''>
			<div className='w-full px-6 py-3 flex items-center justify-between gap-2 bg-slate-700 text-white mx-auto'>
				<span className='border-r-2 px-2'>
					Total {itemName}: {itemArray.length}
				</span>
				<span className='flex items-center gap-2 border-r-2 px-2'>
					<div className='w-5 h-5 rounded-full bg-green-500 mx-auto animate-pulse' />
					Using {itemName}:{' '}
					{itemArray.filter(node => node.product_status === false).length}
				</span>
				<div className=' px-2 border-r-2 flex items-center gap-2'>
					<div className='w-5 h-5 rounded-full bg-red-500 mx-auto animate-pulse' />
					Free {itemName}:{' '}
					{itemArray.filter(node => node.product_status === true).length}
				</div>
				<button
					type='button'
					className=' px-3 py-2 rounded-full border border-indigo-400 hover:text-indigo-400'
					onClick={handleNodeStatus}
				>
					Make all nodes free
				</button>
			</div>
		</div>
	)
}

export default FilteredTotalCnt
