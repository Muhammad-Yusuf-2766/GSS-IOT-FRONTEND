import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getAllNodesRequest } from '../../../ApiServices/Auth_api'
import {
	deleteNode,
	updateAllNodeStatus,
	updateNodeStatus,
} from '../../../Services/getData'
import NodesList from '../../Components/Products_components/NodesList'
import FilteredTotalCnt from '../../Components/shared/TotalNumFiltered'

const Nodes = () => {
	const [allNodes, setAllNodes] = useState([])

	const handleGetAllNodes = async () => {
		const response = await getAllNodesRequest()
		const nodes = response.nodes
		console.log('FOUND nodes:::', nodes)
		if (nodes.length === '' || null) {
			throw new Error('There is no nodes found. :(')
		}
		setAllNodes(nodes)
	}

	const handleAllNodeStatus = async () => {
		try {
			const response = await updateAllNodeStatus()
			if (response.state !== 'Success') {
				toast.error(response.state)
			}
			toast.success('Nodes updated successfully')
			setAllNodes(response.updated_nodes)
		} catch (error) {
			toast.error(error)
		}
	}

	const handleNodeStatus = async id => {
		try {
			const response = await updateNodeStatus(id)
			if (response.state !== 'Success') {
				toast.error(response.state)
			}
			toast.success(response.state)
			setAllNodes(prevNodes =>
				prevNodes.map(node =>
					node.doorNum === response.updated_node.doorNum
						? response.updated_node
						: node
				)
			)
		} catch (error) {
			toast.error(error)
		}
	}

	const handleNodeDelete = async id => {
		try {
			const response = await deleteNode(id)
			if (response.state !== 'Success') {
				toast.error(response.state)
			}
			toast.success(response.state)
			setAllNodes(response.updated_node)
		} catch (error) {
			toast.error(error)
		}
	}

	useEffect(() => {
		handleGetAllNodes()
	}, [])
	return (
		<div className=''>
			<FilteredTotalCnt
				item={allNodes}
				itemName={'Nodes'}
				handleNodeStatus={handleAllNodeStatus}
			/>
			<NodesList
				allNodes={allNodes}
				updateNode={handleNodeStatus}
				deleteNode={handleNodeDelete}
			/>
		</div>
	)
}

export default Nodes
