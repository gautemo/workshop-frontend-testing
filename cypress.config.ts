import { defineConfig } from 'cypress'

export default defineConfig({
	e2e: {
		baseUrl: 'http://localhost:3000',
		video: false,
	},
	component: {
		video: false,
		devServer: {
			framework: 'react',
			bundler: 'vite',
		},
	},
})
