// app/[lng]/(root)/articles/[slug]/page.tsx
import { Articles } from '@/service/article.service'
import ArticleDetailedComponent from '../_components/article-detailed-component/article-detailed-component'

const ArticleDetailePage = async ({
	params,
}: {
	params: Promise<{ lng: string; slug: string }> // Promise type
}) => {
	const { slug } = await params
	const article = await Articles.getDetailedArticle(slug)

	return (
		<div>
			<ArticleDetailedComponent article={article} />
		</div>
	)
}

export default ArticleDetailePage
