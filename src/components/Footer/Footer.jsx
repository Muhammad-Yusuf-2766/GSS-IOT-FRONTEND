import { Mail, MapPin, Phone, Smartphone } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/last_heighted_logo.png'

const Footer = () => {
	return (
		<>
			<div className='w-full h-auto flex items-center justify-center bg-white py-12 lg:px-24 md:px-16 sm:px-6 px-4'>
				<div className='w-full h-auto flex items-center lg:justify-between md:justify-between sm:justify-center justify-center gap-5  flex-wrap'>
					{/* main-Left */}
					<div className='lg:w-[30%] md:w-[30%] sm:w-full w-full h-auto p-2 flex lg:items-start md:items-start sm:items-center items-center flex-col justify-center'>
						<Link
							to={'/'}
							className='w-fit h-auto text-3xl text-indigo-600 font-semibold tracking-[0.1rem] flex items-end gap-x-1 relative mb-3'
						>
							<img src={logo} width={250} alt='Logo' />
						</Link>
						<p className='text-base text-gray-500 font-normal mb-4 lg:text-start md:text-start sm:text-center text-center'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
							facere necessitatibus autem ex numquam ullam ipsam. Illo
							exercitationem in facilis, error adipisci culpa odio asperiores.
						</p>
					</div>
					{/* Main-Middle */}
					<div className='lg:w-[30%] h-auto space-y-4 text-gray-700 font-semibold'>
						<div className='w-full h-auto flex items-center justify-start gap-x-4  hover:text-indigo-600 ease-out duration-300 cursor-pointer mb-4'>
							<p className='text-base'>
								법인명(상호) : 글로벌스마트솔루션 주식회사
							</p>
						</div>
						<div className='w-full h-auto flex items-center justify-start gap-x-4  hover:text-indigo-600 ease-out duration-300 cursor-pointer mb-4'>
							<p className='text-base'>대표자 : 박옥경</p>
						</div>
						<div className='w-full h-auto flex items-center justify-start gap-x-4  hover:text-indigo-600 ease-out duration-300 cursor-pointer mb-4'>
							<p className='text-base'>사업자 등록번호 안내 : 894-88-00403</p>
						</div>
						<div className='w-full h-auto flex items-center justify-start gap-x-4  hover:text-indigo-600 ease-out duration-300 cursor-pointer'>
							<p className='text-base'>
								통신판매업 신고 : 제 2020 - 고양덕양구 - 1484호
							</p>
						</div>
					</div>
					{/* Main-Right */}
					<div className='lg:w-[30%] h-auto space-y-4 text-gray-700 font-semibold'>
						<div className='w-full h-auto flex items-center justify-start gap-x-4 text-gray-700 hover:text-indigo-600 ease-out duration-300 cursor-pointer mb-4'>
							<Mail className='w-8 h-8' />
							<p className='text-base'>김재현 (gssiot@naver.com)</p>
						</div>
						<div className='w-full h-auto flex items-center justify-start gap-x-4  hover:text-indigo-600 ease-out duration-300 cursor-pointer mb-4'>
							<Smartphone className='w-8 h-8' />
							<p className='text-base'>010-5945-0242</p>
						</div>
						<div className='w-full h-auto flex items-center justify-start gap-x-4  hover:text-indigo-600 ease-out duration-300 cursor-pointer mb-4'>
							<Phone className='w-8 h-8' />
							<p className='text-base'>02-6404-2370</p>
						</div>
						<div className='w-full h-auto flex items-center justify-start gap-x-4  hover:text-indigo-600 ease-out duration-300 cursor-pointer'>
							<MapPin className='w-8 h-8' />
							<p className='text-base'>
								경기도 고양시 덕양구 삼막3길 5, (618호) <br />
								(고양삼송한강듀클래스)
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer
