import { Separator } from '@/components/ui/separator'
import { getTranslations } from 'next-intl/server'
import PricingComponent from './pricing-component/pricing-component'

const options = [
	{ id: 1, desc: '1 lorem ipsum' },
	{ id: 2, desc: 'Lorem, ipsum dolor.' },
	{ id: 3, desc: 'Monthly Updates' },
]

export default async function PricingPageComponent() {
	const t = await getTranslations('global')

	return (
		<div className='space-y-4 flex flex-col py-3.5'>
			<div className='p-5 items-center justify-start md:justify-around flex flex-col md:flex-row w-full'>
				<div className='w-full md:w-[40%] text-center flex flex-col items-center'>
					<h1 className='text-2xl md:text-4xl font-bold'>
						{t('pricing_title')}
					</h1>
					<h1 className='text-2xl md:text-4xl font-bold text-green-500'>
						{t('pricing_title_green')}
					</h1>
				</div>
				<div className='w-full md:w-[60%]'>
					<p className='text-center md:text-center text-xl'>
						{t('pricing_description')}
					</p>
				</div>
			</div>
			<Separator />
			<PricingComponent
				title={'Standart'}
				price={20}
				options={options}
				checked={false}
				buttonText={t('pricing_btn')}
			/>
			<Separator />
			<PricingComponent
				title={'Premium'}
				price={32}
				options={options}
				checked={true}
				buttonText={t('pricing_btn')}
			/>
			<Separator />
			<PricingComponent
				title={'Business'}
				price={45}
				options={options}
				checked={false}
				buttonText={t('pricing_btn')}
			/>
			<Separator />
		</div>
	)
}
