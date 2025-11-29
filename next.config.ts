import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/index.ts')

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
		domains: [
			'media.graphassets.com',
			'genprofile.ai',
			'api.dicebear.com',
			'images.unsplash.com',
		],
	},
}

export default withNextIntl(nextConfig)
