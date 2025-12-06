'use client'
import StarRating from '@/components/shared/starRating'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { courses, coursesFilter } from '@/config/constants'
import { FilterItemProps } from '@/types'
import { useTranslations } from 'next-intl'
import SectionTitle from '../_components/section-title/section-title'
import AllCoursesCard from './_components/all-courses-card/all-courses-card'

function Coursepage() {
	const t = useTranslations('courses')

	return (
		<>
			<SectionTitle title={t('title')} subtitle={t('description')} />
			<div className='relative mt-5'>
				<Input
					className='h-14 w-full text-gray-800 text-xl'
					placeholder={t('search_input_placeholder')}
				/>
				<Button
					className='right-2 absolute top-2 cursor-pointer bg-gray-700 text-white hover:bg-gray-600'
					variant={'secondary'}
				>
					{t('search_input_btn')}
				</Button>
			</div>
			<div className='flex flex-col lg:flex-row gap-5 mt-5'>
				<div className='w-full lg:w-[30%] flex flex-col gap-5'>
					<Card>
						<CardContent>
							{coursesFilter.map((item, idx) => (
								<FilterItem item={item} idx={idx} key={item.id} />
							))}
						</CardContent>
					</Card>
				</div>
				<div className='w-full lg:w-[70%]'>
					{courses.map(item => (
						<AllCoursesCard key={item.title} course={item} />
					))}
				</div>
			</div>
		</>
	)
}

export default Coursepage

const FilterItem = ({ item, idx }: { item: FilterItemProps; idx: number }) => {
	const t = useTranslations('courses')

	const renderFilterItem = () => (
		<>
			{item.categoryList.map(c => (
				<div key={c.id} className='flex items-center gap-3'>
					<RadioGroupItem value={c.id} id={c.id} />
					{item.id === 'rating' && <StarRating value={Number(c.id)} />}
					<Label htmlFor={c.id}>{t(c.name)}</Label>
				</div>
			))}
		</>
	)

	return (
		<Accordion
			type='single'
			collapsible
			className='w-full'
			defaultValue='item-0'
		>
			<AccordionItem key={item.id} value={`item-${idx}`}>
				<AccordionTrigger className='text-xl'>{t(item.title)}</AccordionTrigger>
				<AccordionContent>
					<RadioGroup defaultValue=''>{renderFilterItem()}</RadioGroup>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
