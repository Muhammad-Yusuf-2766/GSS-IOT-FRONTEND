import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import useAuthStore from '../../ApiServices/verifyAuth'
import LoginForm from '../../components/Register & login form/Login'

const LoginPage = () => {
	const { user, checkUserState } = useAuthStore()
	useEffect(() => {
		checkUserState()
	}, [checkUserState])
	return user ? (
		<div className='mt-20'>
			<Navigate to='/' replace />
		</div>
	) : (
		<>
			<LoginForm />
			{/* <ToastContainer autoClose={1500} closeOnClick /> */}
		</>
	)
}

export default LoginPage
