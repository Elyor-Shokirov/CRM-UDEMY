import { ArticleType } from '@/types/article.interface'
import { gql, request } from 'graphql-request'
const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string

export const Articles = {
	async getArticles(lng: string): Promise<ArticleType[]> {
		const query = gql`
			query Articles($language: Language!) {
				articles(where: { language: $language }) {
					createdAt
					id
					slug
					title
					exerpt
					image {
						url
					}
					language
					author {
						name
						avatar {
							url
						}
					}
					description {
						text
					}
				}
			}
		`
		const result = await request<{ articles: ArticleType[] }>(
			graphqlAPI,
			query,
			{ language: lng }
		)
		return result.articles
	},
}
