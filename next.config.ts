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
			'ucarecdn.com',
			'e1.pxfuel.com',
			't3.ftcdn.net',
			'wbsimms.com',
			'wallpaperaccess.com',
			'images5.alphacoders.com',
			'wallpaperaccess.com',
			'img.freepik.com',
			'c0.wallpaperflare.com',
			'online.stanford.edu',
			'images.unsplash.com',
			'wallpapercave.com',
		],
	},
}

export default withNextIntl(nextConfig)
