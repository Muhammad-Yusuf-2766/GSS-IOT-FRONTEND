import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ allowedRoles, children }) => {
	const userData = JSON.parse(localStorage.getItem('user_data'))

	if (!userData) {
		// Agar foydalanuvchi login qilmagan bo'lsa, login sahifasiga yo'naltiramiz
		return
	}

	if (!allowedRoles.includes(userData.user_type)) {
		// Agar foydalanuvchi roli ruxsat etilgan rolda bo'lmasa, xato sahifasiga yo'naltiramiz
		return <Navigate to='/unauthorized' />
	}

	// Ruxsat bo'lsa, komponentni render qilamiz
	return children
}

export default PrivateRoute
