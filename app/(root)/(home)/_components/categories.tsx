'use client'
import { Card, CardContent } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import { categories } from '@/config/constants'
import Autoplay from 'embla-carousel-autoplay'
import SectionTitle from '../../_components/section-title/section-title'

function Categories() {
	return (
		<div className='w-full overflow-hidden'>
			<SectionTitle
				title='Top categories'
				subtitle='Learn our courses with high rating'
			/>
			<div className='mt-4 px-4 md:px-0'>
				<Carousel
					className='w-full'
					opts={{
						loop: true,
						align: 'start',
					}}
					plugins={[
						Autoplay({
							delay: 2000,
							stopOnInteraction: false,
						}),
					]}
				>
					<CarouselContent className='-ml-2 md:-ml-4'>
						{categories.map((item, index) => {
							const Icon = item.icon
							return (
								<CarouselItem
									key={index}
									className='pl-2 md:pl-4 basis-1/1 sm:basis-1/3 md:basis-1/2 lg:basis-1/5'
								>
									<Card className='h-full border shadow-sm'>
										<CardContent className='flex items-center justify-center p-4 sm:p-6'>
											<div className='flex flex-col justify-center items-center gap-2'>
												<Icon className='w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 fill-[#020288] dark:fill-gray-500 ' />
												<p className='text-xs sm:text-sm md:text-base text-center line-clamp-2'>
													{item.name}
												</p>
											</div>
										</CardContent>
									</Card>
								</CarouselItem>
							)
						})}
					</CarouselContent>
				</Carousel>
			</div>
		</div>
	)
}

export default Categories
