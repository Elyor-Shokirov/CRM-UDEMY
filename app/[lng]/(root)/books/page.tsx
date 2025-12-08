'use client'
import { Button } from '@/components/ui/button'
import { booksCategory } from '@/config/constants'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import { AiFillShopping } from 'react-icons/ai'
import SectionTitle from '../_components/section-title/section-title'
function Bookpage() {
	const t = useTranslations('books')
	const [filter, setFilter] = useState<string>('all-categories')

	const filteredata = useCallback(() => {
		switch (filter) {
			case 'programming':
				return data.filter(c => c.category === 'programming')
			case 'design':
				return data.filter(c => c.category === 'design')
			case 'business':
				return data.filter(c => c.category === 'business')
			case 'history':
				return data.filter(c => c.category === 'history')
			case 'writing':
				return data.filter(c => c.category === 'writing')
			case 'lifestyle':
				return data.filter(c => c.category === 'lifestyle')
			default:
				return data
		}
	}, [filter])

	return (
		<>
			<div className='text-center mt-5'>
				<SectionTitle
					title='Interesting books'
					subtitle='You like reading, great! This pleace especially for you '
				/>
			</div>
			<div className='flex justify-center mt-5 md:flex-row flex-wrap'>
				{booksCategory.map((item, idx) => (
					<Button
						variant={filter === item.id ? 'default' : 'outline'}
						key={item.id}
						className={cn(
							'cursor-pointer rounded-none',
							idx === 0 ? 'rounded-l-md' : '',
							booksCategory.length - 1 === idx ? 'rounded-r-md' : ''
						)}
						onClick={() => setFilter(item.id)}
					>
						{t(item.label)}
					</Button>
				))}
			</div>
			<div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10'>
				{filteredata().map(item => (
					<motion.div
						key={item.name}
						layout
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						whileHover={{
							scale: 1.05,
							// boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
							transition: { duration: 0.2 },
						}}
						whileTap={{ scale: 0.95 }}
					>
						<div className='relative w-full h-64 mb-6'>
							<div className='relative w-full h-full rounded-lg overflow-hidden'>
								<Image
									src={item.image}
									alt={item.name}
									fill
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									className='object-cover'
								/>
							</div>
							<div className='absolute min-h-[90px] rounded-lg left-2 right-2 -bottom-[18px] p-4 dark:bg-gray-800 z-10 bg-gray-400 shadow-2xl flex justify-between items-center'>
								<div>
									<h3 className='text-white font-semibold text-xl'>
										{item.name}
									</h3>
									<p className='text-2xl font-roboto font-bold text-white'>
										{item.price.toLocaleString('en-US', {
											style: 'currency',
											currency: 'USD',
										})}
									</p>
								</div>
								<div>
									<Button variant={'default'}>
										BUY
										<AiFillShopping />
									</Button>
								</div>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</>
	)
}

export default Bookpage

const data = [
	{
		name: 'JavaScript - Design Pattern',
		image: 'https://ucarecdn.com/01292099-b782-4b74-a05e-f902be3feecd/',
		category: 'programming',
		price: 10,
	},
	{
		name: 'Proffessional ReactJS',
		image:
			'https://e1.pxfuel.com/desktop-wallpaper/595/427/desktop-wallpaper-js-posted-by-samantha-johnson-reactjs.jpg',
		category: 'programming',
		price: 40,
	},
	{
		name: 'HTML CSS - Web',
		image:
			'https://t3.ftcdn.net/jpg/04/86/60/44/360_F_486604480_EKKklldKqiwmvAunlEeF4QdI0dfjDojA.jpg',
		category: 'programming',
		price: 15,
	},
	{
		name: 'Backend Programming',
		image:
			'https://images.unsplash.com/photo-1627398242454-45a1465c2479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTYyNDV8MHwxfHNlYXJjaHwxfHxiYWNrZW5kfGVufDB8fHx8MTc2NDc4NzE1NHww&ixlib=rb-4.1.0&q=80&w=1080',
		category: 'programming',
		price: 30,
	},

	{
		name: 'Proffessional Photoshop',
		image: 'https://wallpaperaccess.com/full/1533478.jpg',
		category: 'design',
		price: 90,
	},
	{
		name: 'Illustrator',
		image:
			'https://images.unsplash.com/photo-1526485797145-514b2fe83749?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTYyNDV8MHwxfHNlYXJjaHw2fHxJbGx1c3RyYXRvcnxlbnwwfHx8fDE3NjQ3ODcxODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
		category: 'design',
		price: 20,
	},
	{
		name: 'Premier Pro',
		image: 'https://wallpaperaccess.com/full/3539123.jpg',
		category: 'design',
		price: 15,
	},

	{
		name: 'Startup',
		image:
			'https://img.freepik.com/free-vector/illustration-startup-business_53876-18154.jpg',
		category: 'business',
		price: 30,
	},
	{
		name: 'Business idea',
		image:
			'https://c0.wallpaperflare.com/preview/931/296/849/business-idea-planning-board-business-plan-thumbnail.jpg',
		category: 'business',
		price: 24,
	},
	{
		name: 'Growth your plan',
		image:
			'https://images.unsplash.com/photo-1640077596538-be70c80c183a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTYyNDV8MHwxfHNlYXJjaHw5fHxHcm93dGglMjB5b3VyJTIwcGxhbnxlbnwwfHx8fDE3NjQ3ODcyNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
		category: 'business',
		price: 15,
	},

	{
		name: 'The History Of Website',
		image:
			'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
		category: 'history',
		price: 30,
	},
	{
		name: 'Internet',
		image: 'https://wallpapercave.com/wp/G2c4FdC.jpg',
		category: 'history',
		price: 54,
	},
	{
		name: 'Difference Web And Web-app',
		image: 'https://wallpapercave.com/wp/wp4312426.jpg',
		category: 'history',
		price: 12,
	},

	{
		name: 'Writing An Essay',
		image:
			'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d3JpdGluZyUyMGhhbmR8ZW58MHx8MHx8&w=1000&q=80',
		category: 'writing',
		price: 54,
	},
	{
		name: 'Professional Essay',
		image: 'https://wallpapercave.com/wp/wp7110644.jpg',
		category: 'writing',
		price: 12,
	},
]
