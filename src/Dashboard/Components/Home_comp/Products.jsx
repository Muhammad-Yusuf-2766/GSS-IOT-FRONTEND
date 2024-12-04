import { AiFillControl, AiFillProduct } from 'react-icons/ai'
import { MdOutlineKitchen } from 'react-icons/md'
import { PiFarmLight } from 'react-icons/pi'

const Products = () => {
	return (
		<div className='p-5 bg-white rounded-xl'>
			<div className='flex justify-between'>
				<h1 className='leading-none text-3xl font-bold text-gray-700 pb-2'>
					Products
				</h1>
				<AiFillProduct className='text-indigo-700' size={40} />
			</div>
			<div className='mt-5 flex flex-col space-y-5 pr-10'>
				<div className='flex justify-start space-x-10 items-center text-left'>
					<AiFillControl size={30} className='text-gray-700' />
					<h1 className='w-1/2'>Safety Management System</h1>
					<p>10</p>
				</div>
				<div className='flex justify-start space-x-10 items-center text-left'>
					<MdOutlineKitchen size={30} className='text-gray-700' />
					<h1 className='w-1/2'>Kitchen-Control-Sytem</h1>
					<p>22</p>
				</div>
				<div className='flex justify-start space-x-10 items-center text-left'>
					<PiFarmLight size={30} className='text-gray-700' />
					<h1 className='w-1/2'>Smart-Farm-System</h1>
					<p>5</p>
				</div>
			</div>
		</div>
	)
}

export default Products
