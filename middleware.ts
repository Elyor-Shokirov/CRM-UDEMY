import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
	locales: ['uz', 'en', 'ru', 'tr'], // ← ru qo'shildi
	defaultLocale: 'uz',
	localePrefix: 'always',
})
export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		// Always run for API routes
		'/(api|trpc)(.*)',
	],
}
