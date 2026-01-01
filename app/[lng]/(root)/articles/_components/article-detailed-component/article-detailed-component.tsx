'use client'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { calculateEstimatedReadingTime } from '@/src/helper/time.helper'
import { ArticleType } from '@/types/article.interface'
import { RichText } from '@graphcms/rich-text-react-renderer'
import dayjs from 'dayjs'
import Image from 'next/image'

// Rasm URL tekshirish funksiyasi
const isImageUrl = (url: string) =>
	/\.(jpg|jpeg|png|gif|webp|svg|bmp)(\?.*)?$/i.test(url)

// RichText renderers
const richTextRenderers = {
	Asset: {
		image: (props: any) => (
			<Image
				src={props.url}
				alt={props.alt || 'Article image'}
				width={props.width || 1200}
				height={props.height || 600}
				className='rounded-lg my-6 w-full h-auto'
			/>
		),
	},
	img: (props: any) => (
		<Image
			src={props.src}
			alt={props.alt || 'Image'}
			width={props.width || 1200}
			height={props.height || 600}
			className='rounded-lg my-6 w-full h-auto'
		/>
	),
	a: (props: any) => {
		if (props.href && isImageUrl(props.href)) {
			return (
				<Image
					src={props.href}
					alt='Article image'
					width={1200}
					height={600}
					className='rounded-lg my-6 w-full h-auto'
				/>
			)
		}
		return (
			<a
				href={props.href}
				className='text-blue-600 hover:underline'
				target='_blank'
				rel='noopener noreferrer'
			>
				{props.children}
			</a>
		)
	},
}

function ArticleDetailedComponent({ article }: ArticleDetailedComponentProps) {
	return (
		<div className='max-w-auto mx-auto px-4 py-8'>
			<h1 className='text-4xl font-bold mb-4'>{article.title}</h1>

			{/* Muallif */}
			<div className='flex items-center gap-2 sm:gap-3 mb-6'>
				<Avatar className='w-10 h-10 sm:w-12 sm:h-12'>
					<AvatarImage
						src={article.author.avatar.url}
						alt={article.author.name}
					/>
				</Avatar>
				<div className='flex flex-col text-xs sm:text-sm'>
					<p className='font-roboto text-sm sm:text-base font-bold'>
						{article.author.name}
					</p>
					<p className='text-gray-500'>
						{dayjs(article.createdAt).format('D MMM, YYYY')} |{' '}
						{calculateEstimatedReadingTime(article.description.text)} min read
					</p>
				</div>
			</div>

			{/* Exerpt */}
			{article.exerpt && (
				<p className='text-lg text-gray-600 mb-6 italic'>{article.exerpt}</p>
			)}

			{/* Cover rasm */}
			{article.image?.url && (
				<div className='relative w-full h-[400px] mb-8 rounded-lg overflow-hidden'>
					<Image
						src={article.image.url}
						alt={article.title}
						fill
						className='object-cover'
					/>
				</div>
			)}

			{/* Content */}
			<div className='prose prose-lg max-w-none'>
				<RichText
					content={article.description.raw}
					renderers={richTextRenderers}
				/>
			</div>
		</div>
	)
}

export default ArticleDetailedComponent

interface ArticleDetailedComponentProps {
	article: ArticleType
}
