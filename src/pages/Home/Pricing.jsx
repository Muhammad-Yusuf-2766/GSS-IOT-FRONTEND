import { CheckSquare, FileBadge } from 'lucide-react'
import React from 'react'
import PrimaryBtn from '../../components/Button/PrimaryBtn'

const Pricing = () => {
	const plans = [
		{
			title: 'Basic Plan',
			price: 165.0,
			period: 'monthly',
			support1: 'Get all service support',
			support2: '24/7 Monitoring by phone',
			support3: 'High level of security',
			checked: 'text-indigo-600',
		},
		{
			title: 'Premium Plan',
			price: 200.0,
			period: 'monthly',
			support1: 'Get all service support',
			support2: '24/7 Monitoring by phone',
			support3: 'High level of security',
			checked: 'text-indigo-600',
		},
		{
			title: 'Wip Plan',
			price: 210.0,
			period: 'monthly',
			support1: 'Get all service support',
			support2: '24/7 Monitoring by phone',
			support3: 'High level of security',
			checked: 'text-indigo-600',
		},
	]
	return (
		<>
			<div className='w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4'>
				<h6 className='text-3xl font-medium text-indigo-600 flex items-center gap-x-2 mb-6'>
					<FileBadge
						size={'70px'}
						strokeWidth='1'
						className='text-indigo-500'
					/>
					Our Pricing Plan
				</h6>
				<div className='w-full h-auto flex justify-center gap-x-5 gap-y-8 flex-wrap'>
					{/* Basic Plan */}
					{plans.map((plan, index) => (
						<div
							key={index}
							className='lg:w-[28%] md:-w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-white rounded-lg border-1 border-indigo-600 shadow shadow-indigo-600 hover:scale-105 hover:shadow-md ease-out duration-500 cursor-pointer'
						>
							<h2 className='lg:text-4xl md:text-4xl sm::text-3xl text-3xl text-indigo-600 font-semibold mb-5'>
								{plan.title}
							</h2>
							<h1 className='lg:text-5xl md:text-5xl sm::text-4xl text-4xl text-indigo-600 font-bold mb-3 tracking-wide'>
								${plan.price}
								<span className='lg:text-xl md:text-xl sm:text-lg text-base text-gray-500 font-medium tracking-normal'>
									/ {plan.period}
								</span>
							</h1>
							<hr className='border-gray-600/40 my-7' />
							<div className='w-full h-auto space-y-2 mb-8'>
								<div className='w-full h-auto flex items-center gap-x-2'>
									<CheckSquare className='w-5 h-5 text-indigo-600' />
									<p className='text-gray-600 lg:text-base md:text-base sm:text-base text-sm'>
										{plan.support1}
									</p>
								</div>
								<div className='w-full h-auto flex items-center gap-x-2'>
									<CheckSquare className='w-5 h-5 text-indigo-600' />
									<p className='text-gray-600 lg:text-base md:text-base sm:text-base text-sm'>
										{plan.support3}
									</p>
								</div>
								<div className='w-full h-auto flex items-center gap-x-2'>
									<CheckSquare className='w-5 h-5 text-indigo-600' />
									<p className='text-gray-600 lg:text-base md:text-base sm:text-base text-sm'>
										{plan.support3}
									</p>
								</div>
							</div>
							<PrimaryBtn className='w-full h-11 text-lg bg-indigo-600/80 text-white justify-center font-semibold tracking-wider mb-3 uppercase rounded-md'>
								Select Plan
							</PrimaryBtn>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Pricing
