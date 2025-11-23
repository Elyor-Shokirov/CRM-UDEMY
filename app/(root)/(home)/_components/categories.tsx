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
		<div>
			<SectionTitle
				title='Top categories'
				subtitle='Learn our courses with high rating'
			/>
			<Carousel
				className='w-full mt-4'
				opts={{ loop: true }}
				plugins={[
					Autoplay({
						delay: 2000,
						stopOnInteraction: false,
					}),
				]}
			>
				<CarouselContent>
					{categories.map((item, index) => {
						const Icon = item.icon
						return (
							<CarouselItem
								key={index}
								className='lg:basis-1/5 h-auto md:basis-1/2'
							>
								<div className='p-1'>
									<Card className=''>
										<CardContent className='flex items-center justify-center '>
											<div className='flex flex-col justify-center items-center gap-2'>
												{/* <Image
													src={item.icon}
													width={70}
													height={70}
													alt='icons'
													className='dark:[]'
												/> */}
												<Icon className='w-20 h-20 fill-[#020288] dark:fill-gray-500' />
												<p>{item.name}</p>
											</div>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						)
					})}
				</CarouselContent>
				{/* <CarouselPrevious />
				<CarouselNext /> */}
			</Carousel>
		</div>
	)
}

export default Categories
