import axios from 'axios'
import Papa from 'papaparse'
import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify'

const TotalcntCsv = ({ itemName, item, icon }) => {
	const [fileData, setFileData] = useState([])
	const fileInputRef = useRef(null) // Fayl input uchun ref

	const handleFileUpload = e => {
		const file = e.target.files[0]
		Papa.parse(file, {
			header: true,
			complete: results => {
				const cleanedData = results.data.filter(row =>
					Object.values(row).some(value => value)
				)
				setFileData(cleanedData)
				console.log('ParsedData:', cleanedData)
			},
		})
	}

	const SetPostionRequest = async data => {
		const endpoint = `${
			import.meta.env.VITE_SERVER_BASE_URL
		}/product/setnodes-position`
		try {
			const response = await axios.post(endpoint, data, {
				withCredentials: true,
			})
			const pnodes = response.data
			if (pnodes.positioned) {
				toast.success(pnodes.state, {
					onClose: () => {
						setFileData([]) // FileData-ni bo'shatamiz
						fileInputRef.current.value = '' // Fayl inputini tozalash
					},
				})
			} else if (pnodes.error) {
				toast.error(pnodes.message)
			}
		} catch (error) {
			toast.error('Something went wrong!')
			console.error(error)
		}
	}

	return (
		<div className='w-full mb-10'>
			<div className='flex items-center justify-around gap-x-4 bg-white border text-gray-600 border-indigo-500 shadow-md shadow-gray-300 font-medium rounded-lg text-xl px-5 py-3 text-center'>
				<div className='flex items-center gap-3'>
					<span className='text-4xl'>{icon}</span>
					<span>
						총 {itemName} 수: {item.length}
					</span>
				</div>
				<div className='flex justify-center items-center gap-3'>
					<label htmlFor='nodesFile'>노드 위치 CSV 파일 업로드:</label>
					<input
						id='nodesFile'
						ref={fileInputRef} // Ref orqali fayl inputni ulaymiz
						className='w-[250px] h-10 rounded-md flex items-center hover:text-indigo-500 transition-all ease-in duration-150'
						type='file'
						accept='.csv'
						onChange={handleFileUpload}
					/>
				</div>
			</div>

			{fileData.length > 0 && (
				<>
					<table className='table-auto border-collapse border border-gray-400 mt-4 text-gray-700'>
						<thead>
							<tr>
								{Object.keys(fileData[0]).map((key, index) => (
									<th
										key={index}
										className='bg-gray-400 border border-gray-400 px-4 py-2'
									>
										{key}:
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{fileData.map((row, index) => (
								<tr key={index}>
									{Object.values(row).map((value, idx) => (
										<td
											key={idx}
											className='border border-gray-400 px-4 py-2 bg-white'
										>
											{value || 'N/A'}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
					<button
						className='py-2 px-3 w-fit h-auto bg-indigo-500 text-white text-mg rounded-md mt-3'
						onClick={() => SetPostionRequest(fileData)}
					>
						노드 위치 설정
					</button>
				</>
			)}
		</div>
	)
}

export default TotalcntCsv
