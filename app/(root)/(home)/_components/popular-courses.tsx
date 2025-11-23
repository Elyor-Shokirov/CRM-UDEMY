'use client'
import StarRating from '@/components/shared/starRating'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import { CourseType } from '@/types'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { CiViewList } from 'react-icons/ci'
import { SiGoogleanalytics } from 'react-icons/si'
import SectionTitle from '../../_components/section-title/section-title'

function PopularCourses() {
	return (
		<>
			<SectionTitle
				title='Explore Featured Courses'
				subtitle='10,000+ unique online course list designs'
			/>
			<Carousel
				className='w-full mt-4'
				opts={{ loop: true }}
				plugins={[
					Autoplay({
						delay: 2000,
						stopOnInteraction: false,
					}),
				]}
			>
				<CarouselContent>
					{data.map((item, index) => (
						<CarouselItem
							key={index}
							className='lg:basis-1/3 h-auto md:basis-1/2'
						>
							<div className='p-1'>
								<div className='flex flex-col gap-2'>
									<Image
										className='object-cover'
										src={item.image}
										width={500}
										height={210}
										alt='Image'
									/>
									<div className='flex gap-2'>
										<p className='text-base font-bold text-[#e59819]'>
											{item.reviewAvarage.toFixed(1)}
										</p>
										<StarRating value={item.reviewAvarage} />
										<p>{`(${item.reviewCount})`}</p>
									</div>
									<h1 className='text-xl font-roboto'>{item.title}</h1>
									<div className='flex items-center gap-3'>
										<div className='flex gap-1 items-center'>
											<CiViewList />
											<p>{item.lessonCount} Lessons</p>
										</div>
										<div className='flex gap-1 items-center'>
											<AiOutlineClockCircle />
											<p>{item.totalHour} Hours</p>
										</div>
										<div className='flex gap-1 items-center'>
											<SiGoogleanalytics />
											<p>{item.level}</p>
										</div>
									</div>
									<Separator className='mt-2' />
									<div className='flex justify-between items-center'>
										<Avatar>
											<AvatarImage
												src={item.author.avatar}
												alt={item.author.firstName}
											/>
											<AvatarFallback>
												{item.author.firstName.charAt(0)}
												{item.author.lastName.charAt(0)}
											</AvatarFallback>
										</Avatar>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className='left-4 bg-transparent text-white cursor-pointer' />
				<CarouselNext className='right-4 bg-transparent text-white cursor-pointer' />
			</Carousel>
		</>
	)
}

export default PopularCourses

const data: CourseType[] = [
	{
		image: 'https://media.graphassets.com/3gf746AKRbWNjB8OCoEB',
		title: 'JavaScript full course',
		lessonCount: 96,
		totalHour: 13.6,
		level: 'Beginner',
		price: 20,
		reviewAvarage: 4.5,
		reviewCount: 200,
		author: {
			firstName: 'Samar',
			lastName: 'Badriddinov',
			avatar:
				'https://genprofile.ai/_next/image?url=%2Fimg%2Fsample%2F1414a52e-21fe-4e92-9ea6-93ff49f81011.jpeg&w=828&q=100',
		},
	},
	{
		image: 'https://media.graphassets.com/54vR0DStGoFuZBVkFwWQ',
		title: 'VueJS full course',
		lessonCount: 30,
		totalHour: 10.6,
		level: 'Beginner',
		price: 20,
		reviewAvarage: 4.5,
		reviewCount: 250,
		author: {
			firstName: 'Samar',
			lastName: 'Badriddinov',
			avatar:
				'https://genprofile.ai/_next/image?url=https%3A%2F%2Fgenprofile.ai%2Fpictures%2Fuser_35tO9Q9Z1NYlFvYotXDlDFF8U8h%2Fdd8a636b-d603-4fed-a629-f4e805b5fa7e.jpeg&w=384&q=75asas',
		},
	},
	{
		image: 'https://media.graphassets.com/65rcPxsLT9ysJDisXF80',
		title: 'ReactJS full course',
		lessonCount: 70,
		totalHour: 19,
		level: 'Beginner',
		price: 20,
		reviewAvarage: 4.5,
		reviewCount: 150,
		author: {
			firstName: 'Samar',
			lastName: 'Badriddinov',
			avatar:
				'https://genprofile.ai/_next/image?url=https%3A%2F%2Fgenprofile.ai%2Fpictures%2Fuser_35tO9Q9Z1NYlFvYotXDlDFF8U8h%2Fdd8a636b-d603-4fed-a629-f4e805b5fa7e.jpeg&w=384&q=75',
		},
	},
	{
		image: 'https://media.graphassets.com/xactyo8TtyTIkAcMWvSm',
		title: 'VueX full course',
		lessonCount: 120,
		totalHour: 24.6,
		level: 'Beginner',
		price: 20,
		reviewAvarage: 5,
		reviewCount: 250,
		author: {
			firstName: 'Samar',
			lastName: 'Badriddinov',
			avatar:
				'https://genprofile.ai/_next/image?url=https%3A%2F%2Fgenprofile.ai%2Fpictures%2Fuser_35tO9Q9Z1NYlFvYotXDlDFF8U8h%2Fdd8a636b-d603-4fed-a629-f4e805b5fa7e.jpeg&w=384&q=75',
		},
	},
	{
		image: 'https://media.graphassets.com/Ql2hDpJhQsaBT3inNuZ4',
		title: 'Redux full course',
		lessonCount: 39,
		totalHour: 8.2,
		level: 'Beginner',
		price: 20,
		reviewAvarage: 4.9,
		reviewCount: 120,
		author: {
			firstName: 'Samar',
			lastName: 'Badriddinov',
			avatar:
				'https://genprofile.ai/_next/image?url=https%3A%2F%2Fgenprofile.ai%2Fpictures%2Fuser_35tO9Q9Z1NYlFvYotXDlDFF8U8h%2Fdd8a636b-d603-4fed-a629-f4e805b5fa7e.jpeg&w=384&q=75',
		},
	},
	{
		image: 'https://media.graphassets.com/mDcwhbguQpyM74jb18M5',
		title: 'NodeJS full course',
		lessonCount: 56,
		totalHour: 20.6,
		level: 'Beginner',
		price: 20,
		reviewAvarage: 5,
		reviewCount: 250,
		author: {
			firstName: 'Samar',
			lastName: 'Badriddinov',
			avatar:
				'https://genprofile.ai/_next/image?url=https%3A%2F%2Fgenprofile.ai%2Fpictures%2Fuser_35tO9Q9Z1NYlFvYotXDlDFF8U8h%2Fdd8a636b-d603-4fed-a629-f4e805b5fa7e.jpeg&w=384&q=75',
		},
	},
]
