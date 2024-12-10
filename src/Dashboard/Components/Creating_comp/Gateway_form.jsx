import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const GatewayForm = ({ availableNodes }) => {
	const [gatewayData, setGatewayData] = useState({
		serial_number: '00',
		product_status: true,
		nodes: [],
	})

	const [startNumber, setStartNumber] = useState('')
	const [endNumber, setEndNumber] = useState('')

	console.log(availableNodes)

	const handleChange = e => {
		const { name, value, type, checked } = e.target
		setGatewayData({
			...gatewayData,
			[name]: type === 'checkbox' ? checked : value,
		})
	}

	const handleNumberChange = e => {
		const { name, value } = e.target
		if (name === 'startNumber') {
			setStartNumber(value)
		} else {
			setEndNumber(value)
		}
	}

	const handleNodesSelection = () => {
		const start = parseInt(startNumber, 10)
		const end = parseInt(endNumber, 10)
		if (isNaN(start) || isNaN(end) || start > end) {
			toast.error("Iltimos, to'g'ri start va end raqamlarini kiriting.")
			return
		}

		const selectedNodes = availableNodes
			.filter(node => node.doorNum >= start && node.doorNum <= end)
			.map(node => node._id)

		setGatewayData(prevState => ({
			...prevState,
			nodes: selectedNodes,
		}))
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_SERVER_BASE_URL}/product/create-gateway`,
				gatewayData
			)
			console.log(response)
			if (response.data && response.data.state === 'Success') {
				toast.success('Gateway muvaffaqiyatli yaratildi!')
			} else {
				toast.error(response.data.error)
			}
		} catch (error) {
			toast.error(error)
		}
	}

	return (
		<div className='w-[40%] flex justify-center items-center flex-col'>
			<h1 className='leading-none text-xl font-bold text-gray-700 pb-2 mb-5 underline underline-offset-4'>
				게이트웨이 생성
			</h1>
			<form
				className='w-full h-auto p-4 pb-8 border bg-white rounded-lg shadow-lg shadow-indigo-300'
				onSubmit={handleSubmit}
			>
				<h4 className='text-center text-lg text-gray-700 font-bold capitalize mb-4'>
					스마트가드 게이트웨이 No.
				</h4>
				<div className='mb-4'>
					<label className='block text-gray-700 font-bold mb-2'>
						게이트웨이 No.
					</label>
					<input
						type='text'
						name='serial_number'
						value={gatewayData.serial_number}
						onChange={handleChange}
						className='w-full outline outline-1 outline-indigo-500 px-3 py-2 border border-gray-300 rounded-md'
						required
					/>
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700 font-bold mb-2'>
						노드 시작넘버:
					</label>
					<input
						type='number'
						name='startNumber'
						value={startNumber}
						onChange={handleNumberChange}
						className='w-full outline outline-1 outline-indigo-500 px-3 py-2 border border-gray-300 rounded-md'
						required
					/>
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700 font-bold mb-2'>
						노드 끝넘버:
					</label>
					<input
						type='number'
						name='endNumber'
						value={endNumber}
						onChange={handleNumberChange}
						className='w-full outline outline-1 outline-indigo-500 px-3 py-2 border border-gray-300 rounded-md'
						required
					/>
				</div>
				<button
					type='button'
					onClick={handleNodesSelection}
					className='w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-all duration-200 mb-4'
				>
					노드 확인
				</button>
				<div className='mb-4'>
					<label className='block text-gray-700 font-bold mb-2'>
						노드 선택:
					</label>
					{gatewayData.nodes.length > 0 ? (
						<div className='flex flex-wrap'>
							{gatewayData.nodes.map(nodeId => (
								<span key={nodeId} className='mr-4'>
									{nodeId}
								</span>
							))}
						</div>
					) : (
						<p>선택된 노드 없음</p>
					)}
				</div>
				<button
					type='submit'
					className='w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-all duration-200'
				>
					게이트웨이 생성
				</button>
			</form>
		</div>
	)
}

export default GatewayForm
