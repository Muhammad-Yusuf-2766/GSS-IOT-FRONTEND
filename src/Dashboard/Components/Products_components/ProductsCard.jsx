import { HiMiniSquares2X2 } from 'react-icons/hi2'
import { PiShareNetworkFill } from 'react-icons/pi'

export const NodesCard = () => {
	return (
		<div className='p-5 w-full h-[250px] flex justify-center items-center gap-x-10	 bg-white rounded-xl shadow-xl shadow-indigo-200 cursor-pointer hover:shadow-gray-400 duration-200'>
			<HiMiniSquares2X2 size={100} className='text-indigo-600 font-bold' />

			<h1 className='text-2xl text-indigo-600 font-bold'>Nodes</h1>
		</div>
	)
}

export const GatewaysCard = () => {
	return (
		<div className='p-5 w-full h-[250px] flex justify-center items-center gap-x-10 bg-white rounded-xl shadow-xl shadow-indigo-200 cursor-pointer hover:shadow-gray-400 duration-200'>
			<PiShareNetworkFill size={100} className='text-indigo-600 font-bold' />

			<h1 className='text-2xl text-indigo-600 font-bold'>Gate-ways</h1>
		</div>
	)
}
