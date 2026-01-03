import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { FaCheckCircle } from 'react-icons/fa'
import { PricingProps } from './pricing.props'

function PricingComponent({
	title,
	price,
	options,
	checked,
	buttonText,
}: PricingProps) {
	return (
		<>
			<div className='flex flex-col md:flex-row p-3 py-3 justify-start md:justify-around md:items-center items-start w-full gap-4'>
				<h1 className='text-xl font-bold font-roboto'>{title}</h1>
				<ul className='list-inside mt-4 md:mt-0'>
					{options.map(item => (
						<li key={item.id} className='flex items-center mb-2'>
							<FaCheckCircle className='text-green-500 mr-2' />
							{item.desc}
						</li>
					))}
				</ul>
				<h1 className='text-xl font-bold font-roboto'>
					{price.toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
					})}
				</h1>
				<div className='w-full md:w-auto'>
					<Button
						className={cn(
							'cursor-pointer w-full md:w-auto',
							checked
								? 'bg-blue-300 text-white hover:bg-blue-600'
								: 'bg-blue-500 text-white hover:bg-gray-100 hover:text-black'
						)}
						variant={'default'}
						size={'lg'}
					>
						{buttonText}
					</Button>
				</div>
			</div>
		</>
	)
}

export default PricingComponent
