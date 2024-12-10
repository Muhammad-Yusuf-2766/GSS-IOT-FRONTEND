import { FaUserSlash } from 'react-icons/fa'
import { PiUserCircleCheckFill, PiUserSwitchFill } from 'react-icons/pi'

const Clinets = () => {
	return (
		<div className='p-5 bg-white rounded-xl'>
			<div className='flex justify-between'>
				<h1 className='leading-none text-3xl font-bold text-gray-700 pb-2'>
					사용자{' '}
				</h1>
				<PiUserCircleCheckFill className='text-indigo-700' size={40} />
			</div>
			<div className='mt-5 flex flex-col space-y-5 pr-10'>
				<div className='flex justify-start space-x-10 items-center text-left'>
					<PiUserCircleCheckFill size={30} className='text-gray-700' />
					<h1 className='w-1/2'>전체 고객</h1>
					<p>71</p>
				</div>
				<div className='flex justify-start space-x-10 items-center text-left'>
					<PiUserSwitchFill size={30} className='text-gray-700' />
					<h1 className='w-1/2'>실시간 사용자</h1>
					<p>22</p>
				</div>
				<div className='flex justify-start space-x-10 items-center text-left'>
					<FaUserSlash size={30} className='text-gray-700' />
					<h1 className='w-1/2'>누적 사용자</h1>
					<p>49</p>
				</div>
			</div>
		</div>
	)
}

export default Clinets
