import Cookies from 'universal-cookie'

const cookie = new Cookies()
const accessToken = cookie.get('access_token')

let user_data

if (accessToken) {
	const userDataJson = localStorage.getItem('user_data')
	user_data = userDataJson ? JSON.parse(userDataJson) : null
	if (user_data) {
		user_data.user_img = '/Members/Kim_prof.jpg'
	}
	console.log('You are Authenticated')
} else {
	console.log('You are not authenticated, clearing user_data')
	localStorage.removeItem('user_data')
}

console.log('== verify ==')

export const verifyUserData = user_data ?? null
