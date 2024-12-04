import { useEffect, useState } from 'react'
import { getActiveNodes } from '../../../Services/getData'
import ActiveNodes from '../../Components/Creating_comp/Active_nodes'
import GatewayForm from '../../Components/Creating_comp/Gateway_form'
import NodeForm from '../../Components/Creating_comp/Node_form'

const AddProduct = ({}) => {
	const [availableNodes, setAvailableNodes] = useState([])

	useEffect(() => {
		const getNodes = async () => {
			const nodes = await getActiveNodes()
			setAvailableNodes(nodes)
		}

		getNodes()
	}, [])

	return (
		<div className='w-full h-auto flex justify-center items-start mt-10 gap-3 p-3 pb-10'>
			<NodeForm />
			<GatewayForm availableNodes={availableNodes} />
			<ActiveNodes nodes={availableNodes} />
		</div>
	)
}

export default AddProduct
