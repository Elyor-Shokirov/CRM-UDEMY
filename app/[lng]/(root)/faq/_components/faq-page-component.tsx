import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'
import { faq } from '@/config/constants'
import { getTranslations } from 'next-intl/server'
import SectionTitle from '../../_components/section-title/section-title'

async function FaqPageComponent() {
	const t = await getTranslations('global')

	return (
		<>
			<div className='text-center mt-5'>
				<SectionTitle title={t('faq_title')} subtitle='' />
			</div>
			<div className='mt-5 min-h-[89vh] container mx-auto'>
				<Card>
					<CardContent>
						{faq.map((item, index) => (
							<Accordion
								key={index}
								type='single'
								collapsible
								className='w-full'
								defaultValue='item-0'
							>
								<AccordionItem
									value={`item-${index}`}
									className='border-0 border-t-2 even:bg-gray-50 pb-2'
								>
									<AccordionTrigger className='text-xl font-medium font-roboto'>
										{t(item.question)}
									</AccordionTrigger>
									<AccordionContent className='flex flex-col gap-4 text-balance border-l-4 border-l-teal-700 pl-3 mt-2 space-y-2 text-lg'>
										{t(item.answer)}
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						))}
					</CardContent>
				</Card>
			</div>
		</>
	)
}

export default FaqPageComponent
