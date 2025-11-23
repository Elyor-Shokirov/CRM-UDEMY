import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from '@/components/ui/card'
import { FaJava } from 'react-icons/fa'
import { VscDebugStart } from 'react-icons/vsc'

function Hero() {
	return (
		<Card className='mt-10 min-h-[50vh] justify-center items-center'>
			<CardContent className='p-4'>
				<div className='grid gap-5  grid-cols-1 md:grid-cols-2 h-full'>
					<div className='grid justify-center items-center'>
						<CardTitle className='text-xl md:text-5xl'>
							Find A Perfect Online Course
						</CardTitle>
						<CardDescription>
							You can access 7900+ different courses from 600 professional
							trainers for free
						</CardDescription>
						<div className='grid gap-5 grid-cols-1 md:grid-cols-2 mt-4'>
							<Button className='p-6' variant={'default'}>
								Start Learning
								<VscDebugStart />
							</Button>
							<Button className='p-6' variant={'outline'}>
								Becom Instructor
							</Button>
						</div>
					</div>
					<div className='justify-center'>
						<FaJava className=' w-[400px] h-[240] opacity-85' />
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export default Hero
