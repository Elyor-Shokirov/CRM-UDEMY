import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
	locales: ['uz', 'en', 'ru'], // ← ru qo'shildi
	defaultLocale: 'uz',
	localePrefix: 'always',
})

export const config = {
	matcher: ['/', '/(uz|en|ru)/:path*'],
}
