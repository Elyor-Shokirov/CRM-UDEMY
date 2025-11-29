'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useTranslations } from 'next-intl'
import SectionTitle from '../../_components/section-title/section-title'

function Newsletter() {
	const t = useTranslations('home')
	return (
		<Card className='mt-5'>
			<CardContent className='min-h-[50vh] flex justify-center items-center'>
				<div className='space-y-3 text-center'>
					<SectionTitle
						title={t('newsletter_title')}
						subtitle={t('newsletter_description')}
					/>
					<div className='relative'>
						<Input
							className='h-14 w-full dark:bg-white text-gray-800 text-xl'
							placeholder={t('newsletter_placeholder')}
						/>
						<Button
							className='right-2 absolute top-2 cursor-pointer bg-gray-700 text-white hover:bg-gray-600'
							variant={'secondary'}
						>
							{t('newsletter_submit')}
						</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export default Newsletter
