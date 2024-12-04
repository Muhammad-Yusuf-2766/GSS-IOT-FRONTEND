// =========  Bu Componentni ADMIN, va CLIENT user route larni himoyalash uchun xizmat qiladi. ======== //

import { Navigate } from 'react-router-dom'

const PrivateClientRoute = ({ allowedRoles, children }) => {
	const userData = JSON.parse(localStorage.getItem('user_data'))

	if (!userData) {
		// Agar foydalanuvchi login qilmagan bo'lsa, login sahifasiga yo'naltiramiz
		return
	}

	if (!allowedRoles.includes(userData.user_title)) {
		// Agar foydalanuvchi roli ruxsat etilgan rolda bo'lmasa, xato sahifasiga yo'naltiramiz
		return <Navigate to='/unauthorized' />
	}

	// Ruxsat bo'lsa, komponentni render qilamiz
	return children
}

export default PrivateClientRoute
