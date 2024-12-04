import React from 'react'
import about_img from '../../assets/about_us.webp'
import logo from '../../assets/Logo_last.png'
import PrimaryBtn from '../../components/Button/PrimaryBtn'

const About = () => {
	return (
		<>
			<div className='w-full h-auto flex items-center justify-between gap-7 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse'>
				<div className='lg:w-[38%] md:w-full sm-full w-full h-auto relative overflow-hidden rounded-md'>
					<img
						src={about_img}
						alt='about'
						className='w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover'
					/>
				</div>
				<div className='lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center'>
					<h6 className='bg-white border border-indigo-600 rounded-md text-2xl font-medium text-indigo-600 flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-7 mb-7'>
						<img src={logo} alt='log' className='w-[200px]' />
						About Us
					</h6>
					<h1 className='lg:text-3xl md:text-3xl sm:text-2xl text-xl text-center font-normal text-gray-700 mb-4 leading-normal pe-5'>
						글로벌스마트솔루션은 사물인터넷 기술을 기반으로사회 및 산업전반에
						걸쳐 비대면 원격 무선 환경 제어 솔루션을 제공하는 IT 기업입니다.
					</h1>
					<p className='lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4'>
						글로벌스마트솔루션은 설립이래 풍부한 경험과 전문성을 지닌 연구진을
						바탕으로 IT인프라/플랫폼 구축에서 어플리케이션 개발에 이르기까지의
						고객의 니즈에 맞는 최적의 솔루션을 제공하고자 끊임없는 가치혁신에
						힘을 쏟고 있습니다.
					</p>
					<p className='lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-8'>
						포스트코로나 시대에 급변하는 환경에 발맞추어 끊임없는 연구개발을
						진행하며, 4차산업혁명시대에서 소외된 계층 및 실버 세대들을 위한
						맞춤형 IoT제품, 농어촌을 위한 다양한 IoT솔루션(스마트팜,스마트축사
						등)을 연구개발하는 기술선도형 IT기업으로 지역사회 및 한국경제, 더
						나아가 세계로 발돋움할 수 있는 기업으로 발전해 나아가고자 합니다.
					</p>
					<PrimaryBtn className='bg-white border-indigo-400 py-4 px-8 mt-5 text-indigo-500 hover:text-indigo-700'>
						Become a Member
					</PrimaryBtn>
				</div>
			</div>
		</>
	)
}

export default About
