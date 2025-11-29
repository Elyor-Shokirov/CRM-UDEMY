'use client'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from '@/components/ui/card'
import { useTranslations } from 'next-intl'
import { FaJava } from 'react-icons/fa'
import { VscDebugStart } from 'react-icons/vsc'

function Hero() {
	const t = useTranslations('home')

	return (
		<Card className='mt-10 min-h-[50vh] justify-center items-center'>
			<CardContent className='p-4'>
				<div className='grid gap-5  grid-cols-1 md:grid-cols-2 h-full'>
					<div className='grid justify-center items-center'>
						<CardTitle className='text-xl md:text-5xl'>
							{t('hero_title')}
						</CardTitle>
						<CardDescription>{t('hero_description')}</CardDescription>
						<div className='grid gap-5 grid-cols-1 md:grid-cols-2 mt-4'>
							<Button className='p-6' variant={'default'}>
								{t('hero_start_learning_btn')}
								<VscDebugStart />
							</Button>
							<Button className='p-6' variant={'outline'}>
								{t('hero_become_instructor_btn')}
							</Button>
						</div>
					</div>
					<div className='justify-center flex'>
						<FaJava className='w-[200px] md:w-[400px] h-[240] opacity-85' />
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export default Hero
