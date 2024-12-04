import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/',
	server: {
		port: 3001, // Shu yerda portni 3000 qilib sozlaymiz
	},
	optimizeDeps: {
		include: ['react-icons/ri'], // Explicitly include react-icons/ri
	},
})
