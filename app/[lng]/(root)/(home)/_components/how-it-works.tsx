'use client'
import { OnlineTraningData } from '@/config/constants'
import { useTranslations } from 'next-intl'
import SectionTitle from '../../_components/section-title/section-title'

function HowItWorks() {
	const t = useTranslations('home')
	return (
		<div>
			<div className='justify-center flex text-center'>
				<SectionTitle
					title={t('how_it_works_title')}
					subtitle={t('how_it_works_description')}
				/>
			</div>
			<div className='grid grid-cols-3 md:grid-cols-5 items-center gap-4 mt-7'>
				{OnlineTraningData.map((item, idx) => {
					const odd = idx % 2
					return (
						<div key={idx}>
							{!odd ? (
								<div className='flex justify-center items-center flex-col gap-2'>
									<div className='bg-gray-600 w-[100px] h-[100px] items-center flex justify-center rounded-full'>
										{<item.icon />}
									</div>
									<p>{t(item.title ?? '')}</p>
								</div>
							) : (
								<div className='flex justify-center text-base'>
									{item.icon && <item.icon />}
								</div>
							)}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default HowItWorks
