import { Link } from 'react-router-dom'
import {
	GatewaysCard,
	NodesCard,
} from '../../Components/Products_components/ProductsCard'

const AllProducts = () => {
	return (
		<>
			<div className='w-full h-auto flex justify-center mt-4'>
				<h1 className='leading-none text-3xl font-bold text-gray-700 pb-2 mb-5 underline underline-offset-4'>
					All Products List
				</h1>
			</div>
			<div className='w-[80%] h-auto m-auto flex items-center justify-between gap-4 p-4'>
				<Link
					to={`${
						import.meta.env.VITE_REACT_BASE_URL
					}/admin/dashboard/product/gateways`}
					className='w-1/2'
				>
					<GatewaysCard />
				</Link>

				<Link
					to={`${
						import.meta.env.VITE_REACT_BASE_URL
					}/admin/dashboard/product/nodes`}
					className='w-1/2'
				>
					<NodesCard />
				</Link>
			</div>
		</>
	)
}

export default AllProducts
