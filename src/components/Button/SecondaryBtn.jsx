import React from 'react'
import download_icon from '../../assets/download (2).png'

const SecondaryBtn = ({ className }) => {
	return (
		<>
			<a
				href='/GSSIOT.pdf'
				target='_blank'
				rel='noopener noreferrer'
				className={`secondary px-6 py-4 ${className}`}
			>
				<p>About Company</p>
				<img src={download_icon} alt='Download Icon' />
			</a>
		</>
	)
}

export default SecondaryBtn
