import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import SectionTitle from '../../_components/section-title/section-title'

function Newsletter() {
	return (
		<Card className='mt-5'>
			<CardContent className='min-h-[50vh] flex justify-center items-center'>
				<div className='space-y-3 text-center'>
					<SectionTitle
						title='Subscribe our Newsletter &'
						subtitle='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente rem maiores placeat! Tempora consequuntur pariatur blanditiis? Natus voluptate soluta qui sunt iste temporibus libero placeat! Debitis ducimus blanditiis eaque voluptate?'
					/>
					<div className='relative'>
						<Input
							className='h-14 w-full dark:bg-white text-gray-800 text-xl'
							placeholder='Your email'
						/>
						<Button
							className='right-2 absolute top-2 cursor-pointer bg-gray-700 text-white hover:bg-gray-600'
							variant={'secondary'}
						>
							Submit
						</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export default Newsletter
