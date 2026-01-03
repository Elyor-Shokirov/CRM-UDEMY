import { getRequestConfig } from 'next-intl/server'
import { headers } from 'next/headers'

type Locale = 'en' | 'uz' | 'ru' | 'tr'

interface Messages {
	[key: string]: string | Messages
}

const locales: readonly Locale[] = ['en', 'uz', 'ru', 'tr'] as const

async function loadMessages(locale: Locale) {
	const modules = {
		home: () => import(`../locale/${locale}/home.json`),
		layout: () => import(`../locale/${locale}/layout.json`),
		courses: () => import(`../locale/${locale}/courses.json`),
		books: () => import(`../locale/${locale}/books.json`),
		articles: () => import(`../locale/${locale}/articles.json`),
		global: () => import(`../locale/${locale}/global.json`),
	}

	const messages: Record<string, Messages> = {}

	for (const key of Object.keys(modules)) {
		try {
			const loadedModule = await modules[key as keyof typeof modules]()
			messages[key] = loadedModule.default
		} catch (error) {
			console.error(`Failed to load ${key} for locale ${locale}:`, error)
			messages[key] = {}
		}
	}

	return messages
}

export default getRequestConfig(async ({ locale }) => {
	let finalLocale = locale as Locale | undefined

	if (!finalLocale) {
		try {
			const headersList = await headers()
			const pathname = headersList.get('x-pathname') || ''
			const pathParts = pathname.split('/')
			const localeFromPath = pathParts[1]

			if (localeFromPath && locales.includes(localeFromPath as Locale)) {
				finalLocale = localeFromPath as Locale
			}
		} catch (error) {
			console.log('Could not extract locale from headers:', error)
		}
	}

	// Default locale
	if (!finalLocale || !locales.includes(finalLocale)) {
		finalLocale = 'uz'
	}

	console.log('i18n/request.ts - using locale:', finalLocale)

	return {
		locale: finalLocale,
		messages: await loadMessages(finalLocale),
	}
})
