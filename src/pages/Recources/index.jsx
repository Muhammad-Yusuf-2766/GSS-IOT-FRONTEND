import React from 'react'
import { GrDocumentStore } from 'react-icons/gr'
import { RecourceList } from './tabs'

const downloads = [
	{
		name: 'Green Smart Control System',
		img: '/Resources/Smart_control.png',
		url: 'https://drive.google.com/file/d/1WnNztuo36lCXHU6YSeYLDuNSP9JWovrh/view?usp=drive_link', // Replace with actual URL

		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ipsa quaerat illum? Sint, iste deleniti! Deleniti dolorem tenetur quo consectetur perspiciatis itaque accusamus mollitia! Illo voluptas porro vel nesciunt blanditiis. Recusandae cum voluptates eum illum iste ratione. Molestias, doloremque exercitationem deserunt soluta labore praesentium quasi, eveniet alias assumenda, voluptatem quae ipsam illo? In a quibusdam suscipit, nesciunt dolore ad similique?',
		file: 'Catalog',
	},
	{
		name: 'E-Green Farm',
		img: 'Resources/Smart_farm.png',
		url: 'https://drive.google.com/file/d/1eWOQbSvxH_B0YkDs2rXZkFbZt-8cGSce/view?usp=drive_link', // Replace with actual URL

		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ipsa quaerat illum? Sint, iste deleniti! Deleniti dolorem tenetur quo consectetur perspiciatis itaque accusamus mollitia! Illo voluptas porro vel nesciunt blanditiis. Recusandae cum voluptates eum illum iste ratione. Molestias, doloremque exercitationem deserunt soluta labore praesentium quasi, eveniet alias assumenda, voluptatem quae ipsam illo? In a quibusdam suscipit, nesciunt dolore ad similique?',
		file: 'Catalog',
	},
	{
		name: 'Smart Guard',
		img: '/Resources/Smart_guard.png',
		url: 'https://drive.google.com/file/d/1jyBQeO9dW9E_bSCYIAqWx0G8L7ky4iJr/view?usp=drive_link', // Replace with actual URL

		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ipsa quaerat illum? Sint, iste deleniti! Deleniti dolorem tenetur quo consectetur perspiciatis itaque accusamus mollitia! Illo voluptas porro vel nesciunt blanditiis. Recusandae cum voluptates eum illum iste ratione. Molestias, doloremque exercitationem deserunt soluta labore praesentium quasi, eveniet alias assumenda, voluptatem quae ipsam illo? In a quibusdam suscipit, nesciunt dolore ad similique?',
		file: 'Catalog',
	},
	{
		name: 'Smart Guard Mobile-App',
		url: 'https://drive.google.com/file/d/1uICVqqcPN0MusqcUXxizORFUIj9VYTSH/view?usp=drive_link', // Replace with actual app link

		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ipsa quaerat illum? Sint, iste deleniti! Deleniti dolorem tenetur quo consectetur perspiciatis itaque accusamus mollitia! Illo voluptas porro vel nesciunt blanditiis. Recusandae cum voluptates eum illum iste ratione. Molestias, doloremque exercitationem deserunt soluta labore praesentium quasi, eveniet alias assumenda, voluptatem quae ipsam illo? In a quibusdam suscipit, nesciunt dolore ad similique?',
		file: 'Application',
	},
]

const DownloadPage = () => {
	return (
		<div className='w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-10 md:px-16 sm:px-6 px-4'>
			<h6 className='text-4xl flex items-center gap-5 font-medium text-gray-600 mb-6'>
				<GrDocumentStore className='text-gray-600' size={50} />
				Resources
			</h6>
			<RecourceList data={downloads} />
		</div>
	)
}

export default DownloadPage
