import axios from 'axios'
import ActiveProducts from '../../Components/Home_comp/ActiveProducts'
import Clinets from '../../Components/Home_comp/ClientsCard'
import Products from '../../Components/Home_comp/Products'
import Users from '../../Components/Home_comp/UsersCard'
import ProjectStatistics from './ProjectStatistics'

const Home = () => {
	const checkMe = async () => {
		const result = await axios.get('http://localhost:3000/check-me', {
			withCredentials: true,
		})
		console.log(result)
	}
	return (
		<div className='p-5'>
			<h1 className='leading-none text-3xl font-bold text-gray-700 pb-2 mb-5'>
				대시보드
			</h1>
			<button onClick={checkMe}>Check me</button>
			<div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
				<Users />
				<Clinets />
				<Products />
				{/* <MemberCard /> */}
			</div>
			<div className='w-full h-auto mt-5 mb-5'>
				<ProjectStatistics />
			</div>
			<div className='flex flex-col mt-5'>
				<h1 className='leading-none text-3xl font-bold text-gray-700 pb-2 mb-5'>
					실시간 사용자
				</h1>
				<ActiveProducts />
			</div>
		</div>
	)
}

export default Home
