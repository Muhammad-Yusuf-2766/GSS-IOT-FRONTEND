import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import useAuthStore from '../../ApiServices/verifyAuth'
import SignupForm from '../../components/Register & login form/Signup'

const SignupPage = () => {
	const { user, checkUserState } = useAuthStore()
	useEffect(() => {
		checkUserState()
	}, [checkUserState])
	return user ? (
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
