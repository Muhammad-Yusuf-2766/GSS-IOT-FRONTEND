import React from 'react'
import { verifyUserData } from '../../ApiServices/verifyAuth'

const MyPage = () => {
	return (
		<>
			{verifyUserData && (
				<div className='w-full h-[630px]'>
					<div className='w-full h-auto mt-14 flex justify-center items-center'>
						<h1 className='text-2xl font-semibold  text-gray-700'>
							You are in your account Page
						</h1>
					</div>
					<div className='w-full h-auto flex justify-center items-center gap-10 px-10 mt-10	'>
						{/* User Box */}
						<div className='w-[350px] h-[400px] px-10 flex flex-col  justify-center items-center bg-white rounded-lg shadow-lg shadow-gray-500 hover:shadow-indigo-500 duration-200'>
							<img
								src='/Members/default_user.webp'
								className='object-cover w-28 cursor-pointer rounded-full'
								alt=''
							/>
							<h1 className='text-3xl font-semibold text-gray-800 mt-3 mb-5 underline underline-offset-4'>
								{verifyUserData.user_name}
							</h1>
							<h2 className='text-2xl font-semibold text-gray-600 mt-3'>
								Status:{' '}
								{verifyUserData.user_type === 'ADMIN'
									? verifyUserData.user_type
									: verifyUserData.user_title}
							</h2>
							<h3 className='text-xl font-semibold text-gray-600 mt-1 text-center'>
								Hyundai Constructions Group
							</h3>
							<div className='flex justify-center gap-4'>
								<a
									className='mt-5 text-gray-600 hover:text-gray-800 duration-200'
									href=''
								>
									{/* <SiKakaotalk size={30} color='' /> */}
								</a>
								<a
									className='mt-5 text-gray-600 hover:text-blue-600 duration-200'
									href='https://t.me/Muhammad_Yusuf2766'
								>
									{/* <SiTelegram size={30} color='' /> */}
								</a>
							</div>
						</div>
						{/* Information Box */}
						<div className='w-[60%] h-[400px] px-10 flex justify-center items-center bg-white rounded-lg shadow-lg shadow-gray-500 hover:shadow-indigo-500 duration-200'>
							<ul className='w-full'>
								<li className='flex justify-between text-2xl text-gray-600 py-5 border-b-2 border-gray-400'>
									<span className='w-1/2'>User name:</span>{' '}
									<span className=' w-1/2 text-left text-gray-800'>
										{verifyUserData.user_name}
									</span>
								</li>
								<li className='flex justify-between text-2xl text-gray-600 py-5 border-b-2 border-gray-400'>
									<span className='w-1/2'>Email:</span>
									<span className='w-1/2 text-left text-gray-800'>
										{verifyUserData.user_email}
									</span>
								</li>
								<li className='flex justify-between text-2xl text-gray-600 py-5 border-b-2 border-gray-400'>
									<span className='w-1/2'>Phone:</span>
									<span className='w-1/2 text-left text-gray-800'>
										{verifyUserData.user_phone}
									</span>
								</li>
								<li className='flex justify-between text-2xl text-gray-600 py-5 border-b-2 border-gray-400'>
									<span className='w-1/2'>User type:</span>{' '}
									<span className='w-1/2 text-left text-gray-800'>
										{verifyUserData.user_type}
									</span>
								</li>
								<li className='flex justify-between text-2xl text-gray-600 py-5'>
									<span className='w-1/2'>User title:</span>{' '}
									<span className='w-1/2 text-left text-gray-800'>
										{verifyUserData.user_title}
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default MyPage
