import React from 'react'

const Banner = () => {
	const videoUrl =
		'https://videos.pexels.com/video-files/4708330/4708330-uhd_2732_1440_25fps.mp4'
	return (
		<>
			<div className='w-full lg:h-screen md:h-[70vh] sm:h-[50vh] h-[50vh] flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 relative mt-10 z-10'>
				<div className='w-[80%] rounded-xl flex justify-center h-[3px] bg-indigo-400 mb-10 absolute -top-20' />
				<video
					className='w-full h-full object-cover absolute top-0 left-0 -z-10'
					autoPlay
					loop
					muted
				>
					<source src={videoUrl} type='video/mp4' />
				</video>
				<div className='w-full h-full bg-black/20 absolute top-0 left-0 -z-10'></div>
				{/* to make a gradient add a text-transparent */}
				<h1 className='lg:text-6xl md:text-5xl sm:4xl text-4xl font-bold text-gray-200 uppercase mb-4 text-center bg-gradient-text opacity-50'>
					Create Your <br />
					Own
					<span className='mt-10 mb-10'> System With</span>
					<br />
					<span>GSS-Group</span>
				</h1>
			</div>
		</>
	)
}

export default Banner
