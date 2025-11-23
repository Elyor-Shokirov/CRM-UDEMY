import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactCompiler: true,
	turbopack: {
		rules: {
			'*.svg': {
				loaders: ['@svgr/webpack'],
				as: '*.js',
			},
		},
	},
	images: {
		domains: ['media.graphassets.com', 'genprofile.ai', 'api.dicebear.com'],
	},
}

export default nextConfig
