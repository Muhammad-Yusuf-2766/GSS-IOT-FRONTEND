import React from 'react'
import About from './About'
import Hero from './Hero'
import Members from './Members'
import Pricing from './Pricing'
import Services from './Services'

const Home = () => {
	return (
		<>
			<div className='w-full h-auto'>
				<About />
				<Hero />
				<Services />
				{/* <Banner /> */}
				<Members />
				<Pricing />
			</div>
		</>
	)
}

export default Home
