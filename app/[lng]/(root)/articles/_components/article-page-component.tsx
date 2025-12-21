'use client'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import { calculateEstimatedReadingTime } from '@/src/helper/time.helper'
import dayjs from 'dayjs'
import Autoplay from 'embla-carousel-autoplay'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArticlePageComponentProps } from './type_article-page-component/type_article-page-component'

function ArticlePageComponent({ articles }: ArticlePageComponentProps) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const t = useTranslations('articles')

	if (!articles || articles.length === 0) {
		return (
			<Card className='mt-5'>
				<CardContent className='py-10 text-center'>
					<div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
						<Image
							src={'/icons/empty-box.png'}
							alt='Empty-box'
							width={100}
							height={100}
						/>
						<p className='text-gray-500 text-xl sm:text-2xl mt-5'>
							{t('empty_title')}
						</p>
					</div>
				</CardContent>
			</Card>
		)
	}

	return (
		<>
			<Card>
				<CardContent className='p-0 md:px-6'>
					<Carousel
						className='w-full sm:mt-4'
						opts={{
							loop: true,
							align: 'center',
						}}
						plugins={
							mounted
								? [
										Autoplay({
											delay: 4000,
											stopOnInteraction: false,
										}),
								  ]
								: []
						}
					>
						<CarouselContent className='ml-0'>
							{articles.map(item => (
								<CarouselItem
									key={item.id}
									className='pl-0 min-w-0 md:basis-full'
								>
									<Link href={`/articles/${item.slug}`}>
										<div className='h-[50vh] sm:h-[60vh] md:h-screen relative w-full overflow-hidden'>
											<Image
												src={item.image.url}
												alt={item.title}
												fill
												priority
												sizes='100vw'
												className='object-cover'
												onError={e => {
													console.log('Image load error:', item.image.url)
													e.currentTarget.src = '/icons/empty-box.png'
												}}
											/>
											<div className='absolute inset-0 bg-black/70' />
											<div className='relative h-full flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24'>
												<div className='space-y-2 sm:space-y-3 md:space-y-4 max-w-4xl text-white'>
													<h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>
														{item.title}
													</h2>
													<p className='text-sm sm:text-base md:text-lg line-clamp-2 sm:line-clamp-3'>
														{item.exerpt}
													</p>
													<div className='flex items-center gap-2 sm:gap-3 pt-2'>
														<Avatar className='w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20'>
															<AvatarImage
																src={item.author.avatar.url}
																alt={item.author.name}
															/>
														</Avatar>
														<p className='font-roboto text-base sm:text-xl md:text-2xl font-bold'>
															{item.author.name}
														</p>
													</div>
												</div>
											</div>
										</div>
									</Link>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className='hidden sm:flex left-4 bg-white/10 hover:bg-white/20 text-white border-white/20' />
						<CarouselNext className='hidden sm:flex right-4 bg-white/10 hover:bg-white/20 text-white border-white/20' />
					</Carousel>
				</CardContent>
			</Card>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-5 px-4 sm:px-0'>
				{articles.map(item => (
					<div
						key={item.id}
						className='w-full shadow-lg hover:shadow-2xl transition-shadow rounded-md overflow-hidden'
					>
						<Link href={`/articles/${item.slug}`}>
							<div className='relative w-full h-[200px] sm:h-[250px] md:h-[300px]'>
								<Image
									src={item.image.url}
									alt={item.title}
									fill
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
									className='object-cover'
								/>
							</div>
							<div className='p-4 sm:p-6 space-y-2 sm:space-y-3'>
								<h1 className='text-lg sm:text-xl font-bold line-clamp-2'>
									{item.title}
								</h1>
								<p className='text-sm sm:text-base text-gray-500 line-clamp-2'>
									{item.exerpt}
								</p>

								<Separator className='my-2 sm:my-3' />

								<div className='flex items-center gap-2 sm:gap-3'>
									<Avatar className='w-10 h-10 sm:w-12 sm:h-12'>
										<AvatarImage
											src={item.author.avatar.url}
											alt={item.author.name}
										/>
									</Avatar>
									<div className='flex flex-col text-xs sm:text-sm'>
										<p className='font-roboto text-sm sm:text-base font-bold'>
											{item.author.name}
										</p>
										<p className='text-gray-500'>
											{dayjs(item.createdAt).format('D MMM, YYYY')} |{' '}
											{calculateEstimatedReadingTime(item.description.text)} min
											read
										</p>
									</div>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</>
	)
}

export default ArticlePageComponent
