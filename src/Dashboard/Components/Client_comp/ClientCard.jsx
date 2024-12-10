import { FaHourglassStart } from 'react-icons/fa6'
import { ImLocation2, ImSpinner9 } from 'react-icons/im'
import { MdOutlineLocationCity } from 'react-icons/md'
import { PiUserCircleCheckFill } from 'react-icons/pi'
import { TbXboxX } from 'react-icons/tb'

const AllClients = ({ client }) => {
	return (
		<>
			<div className='p-5 bg-white rounded-xl shadow-xl shadow-indigo-200 cursor-pointer hover:shadow-indigo-400'>
				<div className='flex justify-between'>
					<h1 className='leading-none text-xl font-bold text-gray-700 pb-2'>
						회사:
						<span className='text-center text-lg font-semibold text-indigo-700 ml-1'>
							{client.company}
						</span>
					</h1>
					<PiUserCircleCheckFill className={`text-indigo-700`} size={40} />
				</div>
				<div className='mt-5 flex flex-col space-y-5 pr-10 text-gray-700'>
					<div className='flex justify-start space-x-10 items-center text-left'>
						<MdOutlineLocationCity size={30} />
						<h1 className='w-1/2 text-gray-700'> 총 건물</h1>
						<p>{client.buildings.length}</p>
					</div>
					<div className='flex justify-start space-x-10 items-center text-left text-gray-700'>
						<FaHourglassStart size={30} className='text-gray-700' />
						<h1 className='w-1/2'>회사 상태</h1>
						{client.status == true ? (
							<ImSpinner9 size={25} className='animate-spin text-indigo-500' />
						) : (
							<TbXboxX size={30} color='red' />
						)}
					</div>
					<div className='flex justify-start space-x-10 items-center text-left text-gray-700'>
						<ImLocation2 size={30} />
						<h1 className='w-1/2'>주소</h1>
						<p className='text-sm'>{client.company_addr.slice(0, 3)}...</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default AllClients
