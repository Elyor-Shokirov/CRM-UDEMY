'use client'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { ImQuotesRight } from 'react-icons/im'
import SectionTitle from '../../_components/section-title/section-title'

function Testimonials() {
	return (
		<div className='overflow-hidden'>
			<div className='text-center mt-5 '>
				<SectionTitle
					title='Testimonials'
					subtitle='10,000+ unique online course list designs'
				/>
			</div>
			<div className='flex justify-center'>
				<Carousel
					className='w-full mt-4'
					opts={{ loop: true }}
					plugins={[
						Autoplay({
							delay: 4000,
							stopOnInteraction: false,
						}),
					]}
				>
					<CarouselContent>
						{data.map((item, index) => (
							<CarouselItem key={index} className='h-auto basis-1/1'>
								<div className='text-center flex justify-center flex-col items-center'>
									<ImQuotesRight className='text-[50px] md:text-[100px]' />
									<p className='mt-5 text-center'>{item.description}</p>
									<p className='text-sm font-bold md:text-xl font-roboto mt-3'>
										{item.name}
									</p>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className='left bg-transparent text-white cursor-pointer' />
					<CarouselNext className='right bg-transparent text-white cursor-pointer' />
				</Carousel>
			</div>
		</div>
	)
}

export default Testimonials

const data = [
	{
		name: 'Elyor Shokirov',
		description:
			'It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.',
	},
	{
		name: 'Yusuf Khamdamov',
		description:
			'It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.',
	},
	{
		name: 'Abdulloh Oripov',
		description:
			'It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.',
	},
	{
		name: 'Shoxrux Yusupov',
		description:
			'It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.',
	},
]
