import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

const intlMiddleware = createMiddleware({
	locales: ['uz', 'en', 'ru', 'tr'],
	defaultLocale: 'uz',
	localePrefix: 'always',
})

export default function middleware(request: NextRequest) {
	const response = intlMiddleware(request)
	response.headers.set('x-pathname', request.nextUrl.pathname)

	return response
}

export const config = {
	matcher: [
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		'/(api|trpc)(.*)',
	],
}
