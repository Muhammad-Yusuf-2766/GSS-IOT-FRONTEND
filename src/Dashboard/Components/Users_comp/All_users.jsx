import React from 'react'

const tHead = [
	'User name',
	'User email',
	'User type',
	'Change user',
	'Delete user',
]

const AllUsers = ({ allUsers, handleClient, handleUser }) => {
	return (
		<div className='overflow-y-auto  shadow-md shadow-slate-500 bg-white m-5 sm:rounded-lg'>
			<div className='max-h-[620px] overflow-y-auto'>
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
						{allUsers.map(user => (
							<tr
								key={user._id}
								className='border-2 border-gray-400 hover:bg-gray-100 text-left'
							>
								<th
									scope='row'
									className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap'
								>
									{user.user_name}
								</th>
								<td className='px-4 py-3 border-x-2 border-gray-400 text-left'>
									{user.user_email}
								</td>
								<td className='px-4 py-3 border-x-2 border-gray-400'>
									{user.user_type}
								</td>
								<td className='px-4 py-3 border-x-2 border-gray-400 text-center'>
									{user.user_type === 'CLIENT' ? (
										<button
											onClick={() => handleUser(user._id)}
											className='w-[110px] border py-2 px-4 rounded-md bg-gray-500 text-white hover:bg-gray-600'
										>
											Make User!
										</button>
									) : (
										<button
											onClick={() => handleClient(user._id)}
											className='border py-2 px-4 rounded-md bg-indigo-500 text-white/100 hover:bg-indigo-600'
										>
											Make Cleint!
										</button>
									)}
								</td>
								<td className='px-4 py-3 border-x-2 border-gray-400 text-center'>
									<button className='border py-2 px-4 rounded-md bg-red-500 text-white hover:bg-red-600'>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default AllUsers
