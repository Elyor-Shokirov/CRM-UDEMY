'use client'
import StarRating from '@/components/shared/starRating'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import { courses } from '@/config/constants'
import Autoplay from 'embla-carousel-autoplay'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { CiViewList } from 'react-icons/ci'
import { SiGoogleanalytics } from 'react-icons/si'
import SectionTitle from '../../_components/section-title/section-title'

function PopularCourses() {
	const t = useTranslations('home')

	return (
		<div className='overflow-hidden'>
			<SectionTitle
				title={t('popular_courses_title')}
				subtitle={t('popular_courses_description')}
			/>
			<Carousel
				className='min-w-full mt-4'
				opts={{ loop: true }}
				plugins={[
					Autoplay({
						delay: 2000,
						stopOnInteraction: false,
					}),
				]}
			>
				<CarouselContent>
					{courses.map((item, index) => (
						<CarouselItem
							key={index}
							className='lg:basis-1/3 h-auto md:basis-1/2'
						>
							<div className='p-1'>
								<div className='flex flex-col gap-2'>
									<Image
										className='object-cover'
										src={item.image}
										width={500}
										height={210}
										alt='Image'
									/>
									<div className='flex gap-2'>
										<p className='text-base font-bold text-[#e59819]'>
											{item.reviewAvarage.toFixed(1)}
										</p>
										<StarRating value={item.reviewAvarage} />
										<p>{`(${item.reviewCount})`}</p>
									</div>
									<h1 className='text-xl font-roboto'>{item.title}</h1>
									<div className='flex items-center gap-3'>
										<div className='flex gap-1 items-center'>
											<CiViewList />
											<p>{item.lessonCount} Lessons</p>
										</div>
										<div className='flex gap-1 items-center'>
											<AiOutlineClockCircle />
											<p>{item.totalHour} Hours</p>
										</div>
										<div className='flex gap-1 items-center'>
											<SiGoogleanalytics />
											<p>{item.level}</p>
										</div>
									</div>
									<Separator className='mt-2' />
									<div className='flex justify-between items-center'>
										<div className='flex gap-1.5 items-center'>
											<Avatar>
												<AvatarImage
													src={item.author.avatar}
													alt={item.author.firstName}
												/>
												<AvatarFallback>
													{item.author.firstName.charAt(0)}
													{item.author.lastName.charAt(0)}
												</AvatarFallback>
											</Avatar>
											<p>
												{item.author.firstName} {item.author.lastName[0]}
											</p>
										</div>
										<p>
											{item.price.toLocaleString('en-US', {
												style: 'currency',
												currency: 'USD',
											})}
										</p>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className='left-4 bg-transparent text-white cursor-pointer' />
				<CarouselNext className='right-4 bg-transparent text-white cursor-pointer' />
			</Carousel>
		</div>
	)
}

export default PopularCourses
