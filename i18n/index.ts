import { getRequestConfig } from 'next-intl/server'

type Locale = 'en' | 'uz' | 'ru' | 'tr'

interface Messages {
	[key: string]: string | Messages
}

// const messagesLoaders: Record<Locale, () => Promise<{ default: Messages }>> = {
// 	en: () => import('../locale/en.json'),
// 	uz: () => import('../locale/uz.json'),
// 	ru: () => import('../locale/ru.json'),
// 	tr: () => import('../locale/tr.json'),
// }

async function loadMessages(locale: Locale) {
	const modules = {
		home: () => import(`../locale/${locale}/home.json`),
		layout: () => import(`../locale/${locale}/layout.json`),
		courses: () => import(`../locale/${locale}/courses.json`),
		books: () => import(`../locale/${locale}/books.json`),
		articles: () => import(`../locale/${locale}/articles`),
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const messages: Record<string, any> = {}

	for (const key of Object.keys(modules)) {
		messages[key] = (await modules[key as keyof typeof modules]()).default
	}

	return messages
}

export default getRequestConfig(async ({ locale }) => {
	const lang = (locale ?? 'uz') as Locale

	return {
		locale: lang,
		messages: await loadMessages(lang),
	}
})
