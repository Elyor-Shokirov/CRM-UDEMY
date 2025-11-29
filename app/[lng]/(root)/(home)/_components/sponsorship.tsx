'use client'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import { trustedCompanies } from '@/config/constants'
import Autoplay from 'embla-carousel-autoplay'
import { useTranslations } from 'next-intl'
import SectionTitle from '../../_components/section-title/section-title'

function Sponsorship() {
	const t = useTranslations('home')
	return (
		<>
			<div className='text-center mb-5'>
				<SectionTitle title='' subtitle={t('sponsor_title')} />
			</div>
			<Carousel
				className='min-w-full mt-4'
				opts={{ loop: true }}
				plugins={[
					Autoplay({
						delay: 1000,
						stopOnInteraction: false,
					}),
				]}
			>
				<CarouselContent>
					{trustedCompanies.map((Icon, index) => (
						<CarouselItem key={index} className='lg:basis-1/5 h-auto basis-1/3'>
							<div className='p-1'>
								<Icon className='w-20 h-20 fill-[#0c0c10] dark:fill-gray-200' />
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</>
	)
}

export default Sponsorship
