import { BsBuildingsFill } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa6'
import { PiUserCircleCheckFill } from 'react-icons/pi'
import UsersCard from '../../Components/Users_comp/UsersCard'

const MainClient = () => {
	// const { buildings } = useBuildings()

	const bossCardData = [
		{
			header: 'Boss',
			icon: PiUserCircleCheckFill,
			number: 3,
		},
		{
			header: 'Workers',
			icon: FaUsers,
			number: 7,
		},
		{
			header: 'Buildings',
			icon: BsBuildingsFill,
			number: 5,
		},
	]

	// const [nodes, setNodes] = useState([])
	// const fetchUserGateways = async userId => {
	// 	// try {
	// 	const endpoint = '${import.meta.env.VITE_SERVER_BASE_URL}/product/user-subscribe-mqtt'

	// 	const response = await axios.get(endpoint, {
	// 		params: { userId },
	// 	})

	// 	console.log(response.data)
	// }

	// // const buildingId = '6725e01479297627b9b44c1c'

	// useEffect(() => {
	// 	const socket = io('${import.meta.env.VITE_SERVER_BASE_URL}')
	// 	const userData = JSON.parse(localStorage.getItem('user_data'))

	// 	if (userData && userData._id && userData.user_title) {
	// 		fetchUserGateways(userData._id, userData.user_title)
	// 	}

	// 	socket.on('connect', () => {
	// 		console.log('Socket connected')
	// 	})

	// 	socket.on('disconnect', () => {
	// 		console.log('Socket disconnected')
	// 	})

	// 	buildings.forEach(building => {
	// 		const buildingId = building._id
	// 		// MQTT ma'lumotlar uchun socket.on ni qo'shish
	// 		socket.on(`mqttData_${buildingId}`, ({ serialNumber, data }) => {
	// 			console.log('Received MQTT data via Socket.io:', data)

	// 			const parsedData = JSON.parse(data)
	// 		})
	// 	})

	// 	return () => {
	// 		socket.off('connect')
	// 		socket.off('disconnect')
	// 		buildings.forEach(building => {
	// 			const buildingId = building._id
	// 			socket.off(`mqttData_${buildingId}`)
	// 		})
	// 	}
	// }, [buildings])

	return (
		<div className='p-5'>
			<h1 className='leading-none text-3xl font-bold text-gray-700 pb-2 mb-5'>
				Company Statistics
			</h1>
			<div className=''>
				<UsersCard cardData={bossCardData} />
			</div>
			<div className='w-full flex justify-center mt-10'>
				<img
					className='w-[700px] h-full'
					src='/others/construction.png'
					alt=''
				/>
			</div>
		</div>
	)
}

export default MainClient
