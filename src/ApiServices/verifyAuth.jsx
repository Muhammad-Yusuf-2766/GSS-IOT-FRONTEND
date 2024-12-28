import axios from 'axios'
import { create } from 'zustand'

const useAuthStore = create(set => ({
	user: null,
	isLoading: false,
	error: null,

	checkUserState: async () => {
		set({ isLoading: true, error: null })
		try {
			const res = await axios.get(
				`${import.meta.env.VITE_SERVER_BASE_URL}/check-me`,
				{
					withCredentials: true,
				}
			)
			const data = res.data
			if (data.state === 'Success') {
				set({ user: data.user, isLoading: false })
			} else {
				set({ user: null, isLoading: false })
			}
		} catch (error) {
			set({ error: error.message, isLoading: false })
		}
	},
	// logout: () => set({ user: null }),
}))

export default useAuthStore
