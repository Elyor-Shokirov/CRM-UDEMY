export interface ArticleType {
	createdAt: string
	exerpt: string
	id: string
	image: {
		url: string
	}
	slug: string
	title: string
	language: string
	author: AuthorType // Optional
	description: {
		text: string
		raw: {
			children: []
		}
	}
}

export interface AuthorType {
	name: string
	avatar: {
		url: string
	}
}
