import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'

const NodeForm = () => {
	const [nodeData, setNodeData] = useState({
		startNode: '',
		endNode: '',
		doorChk: 0,
		product_status: true,
	})

	// Handle input changes for startNode, endNode, and uuid_number
	const handleInputChange = e => {
		const { name, value, type, checked } = e.target
		setNodeData({
			...nodeData,
			[name]: type === 'checkbox' ? checked : value,
		})
	}

	const handleSubmit = async e => {
		e.preventDefault()
		const { startNode, endNode, product_status, doorChk } = nodeData
		try {
			// Convert string inputs to numbers
			const start = parseInt(startNode, 10)
			const end = parseInt(endNode, 10)

			// Check if inputs are valid
			if (start > end) {
				toast.error('Start node must be less than or equal to end node')
				return
			}

			// Loop through the range of nodes and prepare an array of data
			const nodes = []
			for (let i = start; i <= end; i++) {
				const data = {
					doorNum: i,
					doorChk,
					product_status,
				}
				nodes.push(data)
			}

			// Send POST request to create multiple nodes at once
			const response = await axios.post(
				`${import.meta.env.VITE_SERVER_BASE_URL}/product/create-multiple-nodes`,
				nodes
			)

			// Handling success or error response
			if (response.data && response.data.state === 'Success') {
				toast.success(
					`${response.data.nodes.length} nodes created successfully!`
				)
			} else {
				toast.error(response.data.message || 'Error creating nodes')
			}
		} catch (error) {
			console.error('Error occurred:', error)
			toast.error('Error on creating nodes :(')
		}
	}

	return (
		<div className='w-[30%] flex justify-center items-center flex-col'>
			<h1 className='leading-none text-xl font-bold text-gray-700 pb-2 mb-5 underline underline-offset-4'>
				Create new Nodes
			</h1>
			<form
				onSubmit={handleSubmit}
				className='w-full h-[400px] p-4 border bg-white rounded-lg shadow-lg shadow-indigo-300'
			>
				<h4 className='text-center text-lg text-gray-700 font-bold capitalize mb-4'>
					Safety management control system
				</h4>
				<div className='mb-4'>
					<label className='block text-gray-700 font-bold mb-2'>
						Start Node:
					</label>
					<input
						type='number'
						name='startNode'
						value={nodeData.startNode}
						onChange={handleInputChange}
						className='w-1/2 outline outline-1 outline-indigo-500 px-3 py-2 border border-gray-300 rounded-md'
						required
					/>
				</div>

				<div className='mb-4'>
					<label className='block text-gray-700 font-bold mb-2'>
						End Node:
					</label>
					<input
						type='number'
						name='endNode'
						value={nodeData.endNode}
						onChange={handleInputChange}
						className='w-1/2 outline outline-1 outline-indigo-500 px-3 py-2 border border-gray-300 rounded-md'
						required
					/>
				</div>

				<button
					type='submit'
					className='flex items-center justify-between text-white bg-indigo-600 shadow-md shadow-gray-50 hover:shadow-gray-400 font-medium rounded-lg text-sm px-5 py-3 text-center me-2'
				>
					Create Nodes
				</button>
			</form>
		</div>
	)
}

export default NodeForm
