import { CircleUserRound, MoveRight } from 'lucide-react'
import React from 'react'
import PrimaryBtn from '../../components/Button/PrimaryBtn'
import { CommunityCard } from '../../components/Card/MemberCard'
import { MembersData } from '../../DB'

const Members = () => {
	return (
		<>
			<div className='w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 hover:'>
				<h6 className='text-3xl font-medium text-indigo-600 flex items-center gap-x-2 mb-6'>
					<CircleUserRound
						size={'70px'}
						strokeWidth='1'
						className='text-indigo-500'
					/>
					기업 구성원
				</h6>
				<div className='w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 lg:gap-y-8 md:gap-y-6 sm:gap-y-10 gap-y-10 flex-wrap mb-10'>
					{/* Let's display them through loop */}
					{MembersData.slice(0, 2).map(data => (
						<CommunityCard data={data} key={data.id} />
					))}
				</div>
				<PrimaryBtn
					route={'/community'}
					className='py-4 px-8 flex gap-x-4 border bg-indigo-600 text-white hover:bg-indigo-700'
				>
					자세히보기
					<MoveRight />
				</PrimaryBtn>
			</div>
		</>
	)
}

export default Members
