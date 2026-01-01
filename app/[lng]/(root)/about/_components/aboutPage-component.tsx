'use client'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import SectionTitle from '../../_components/section-title/section-title'

function AboutPageComponent() {
	const t = useTranslations('global')

	return (
		<>
			<div className='container mx-auto px-4 md:py-16'>
				<div className='text-center'>
					<SectionTitle
						title={t('about_title')}
						subtitle={t('about_descrption')}
					/>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
					<Image src={'/about.png'} alt='About Us' width={800} height={400} />

					<div className=' space-y-4'>
						<h1 className='text-lg md:text-5xl font-bold text-accent-foreground'>
							{t('about_heading')}
						</h1>
						<p className='md:text-xl'>{t('about_text_1')}</p>
						<p className='md:text-lg'>{t('about_text_2')}</p>
						<Button variant={'outline'} size={'lg'}>
							{t('about_btn')}
						</Button>
					</div>
				</div>
			</div>
		</>
	)
}

export default AboutPageComponent
