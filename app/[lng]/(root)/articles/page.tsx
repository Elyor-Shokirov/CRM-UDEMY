import { Articles } from '@/service/article.service'
import { cookies } from 'next/headers'
import ArticlePageComponent from './_components/article-page-component'

export default async function Articlepage() {
	const cookieStore = await cookies()
	const lng = cookieStore.get('NEXT_LOCALE')?.value ?? 'en'
	const articles = await Articles.getArticles(lng)
	return (
		<>
			<ArticlePageComponent articles={articles} />
		</>
	)
}
