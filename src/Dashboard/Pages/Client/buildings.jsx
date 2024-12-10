import { BsBuildingsFill, BsCalendarDate } from 'react-icons/bs'
import { FaHourglassStart } from 'react-icons/fa6'
import { MdOutlineLocationCity } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Totalcountbox from '../../Components/shared/TotalCount'
import { useBuildings } from '../../Context/BuildingContext'
import { calculateDaysUntilExpiry } from '../../Functions/Cal_Expiry_date'

const Buildings = ({}) => {
	const { buildings } = useBuildings()
	return (
		<div>
			<div className='w-fit mx-auto mt-4'>
				<Totalcountbox
					itemName={'건물'}
					item={buildings}
					icon={<BsBuildingsFill />}
				/>
			</div>
			<div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4'>
				{buildings.map((building, index) => {
					const daysRemaining = calculateDaysUntilExpiry(
						building.expiration_date
					)
					const daysRemainingStyle = daysRemaining < 20 ? 'text-red-700' : ''
					return (
						<Link
							to={`/client/dashboard/check-building-nodes/${building._id}`}
							key={index}
							className='p-5 bg-white rounded-xl shadow-xl shadow-indigo-200 cursor-pointer hover:shadow-indigo-400'
						>
							<div className='flex justify-between'>
								<h1 className='text-center text-xl font-semibold text-indigo-700 ml-1'>
									{building.building_name.length > 20
										? `${building.building_name.slice(0, 20)} ...`
										: `${building.building_name}:`}
									{'  '}
									<span className='leading-none text-lg text-gray-700 pb-2'>
										건물 - {building.building_num}
									</span>
								</h1>

								{''}
								<BsBuildingsFill
									className={`text-indigo-700 ${daysRemainingStyle}`}
									size={40}
								/>
							</div>
							<div className='mt-5 flex flex-col space-y-5 pr-10'>
								<div className='flex justify-start space-x-10 items-center text-left'>
									<MdOutlineLocationCity size={30} className='text-gray-700' />
									<h1 className='w-1/2'>총 게이트웨이</h1>
									<p>{building.gateway_sets.length}</p>
								</div>
								<div className='flex justify-start space-x-10 items-center text-left'>
									<MdOutlineLocationCity size={30} className='text-gray-700' />
									<h1 className='w-1/2'>총 근로자</h1>
									<p>{building.users.length}</p>
								</div>
								<div
									className={`flex justify-start space-x-10 items-center text-left ${daysRemainingStyle}`}
								>
									<FaHourglassStart
										size={30}
										className={`text-gray-700 ${daysRemainingStyle}`}
									/>
									<h1 className={`w-1/2 `}>잔여일</h1>
									<p>{daysRemaining}</p>
								</div>
								<div className='flex justify-start space-x-10 items-center text-left'>
									<BsCalendarDate size={30} className='text-gray-700' />
									<h1 className='w-1/2'>만료일</h1>
									<p>{building.expiration_date}</p>
								</div>
								<div className='flex justify-start space-x-10 items-center text-left'>
									<MdOutlineLocationCity size={30} className='text-gray-700' />
									<h1 className='w-1/2'>현장 주소</h1>
									<p>{building.building_addr}</p>
								</div>
							</div>
						</Link>
					)
				})}
			</div>
		</div>
	)
}

export default Buildings
