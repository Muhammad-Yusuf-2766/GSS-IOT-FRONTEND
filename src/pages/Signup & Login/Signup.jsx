import React from 'react'
import { Navigate } from 'react-router-dom'
import { verifyUserData } from '../../ApiServices/verifyAuth'
import SignupForm from '../../components/Register & login form/Signup'

const SignupPage = () => {
	return verifyUserData ? (
		<div className='mt-20'>
			<Navigate to='/' replace />
		</div>
	) : (
		<div>
			<SignupForm />
		</div>
	)
}

export default SignupPage
