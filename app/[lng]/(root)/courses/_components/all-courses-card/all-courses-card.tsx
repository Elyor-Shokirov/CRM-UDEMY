import StarRating from '@/components/shared/starRating'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsMinecartLoaded } from 'react-icons/bs'
import { CiViewList } from 'react-icons/ci'
import { SiGoogleanalytics } from 'react-icons/si'
import { AllCoursesCardProps } from './all-courses-card.props'

function AllCoursesCard({ course }: AllCoursesCardProps) {
	return (
		<>
			<div className='p-4'>
				<div className='flex md:flex-row flex-col gap-4'>
					<Image
						className='rounded-xl object-cover w-full md:w-[250px] h-[200px] md:h-[250px]'
						src={course.image}
						alt={course.title}
						width={250}
						height={250}
					/>
					<div className='flex flex-col gap-3'>
						<div className='flex gap-2 '>
							<p className='text-base font-light text-[#e59819]'>
								{course.reviewAvarage.toFixed(1)}
							</p>
							<StarRating value={course.reviewAvarage} />
							<p>{`(${course.reviewCount})`}</p>
						</div>
						<h1 className='text-xl font-roboto'>{course.title}</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Distinctio molestias, officiis, qui fuga deleniti dolor voluptas
						</p>
						<div className='flex md:flex-row flex-col items-start md:items-center gap-3'>
							<div className='flex gap-1.5 items-center'>
								<Avatar>
									<AvatarImage
										src={course.author.avatar}
										alt={course.author.firstName}
									/>
									<AvatarFallback>
										{course.author.firstName.charAt(0)}
										{course.author.lastName.charAt(0)}
									</AvatarFallback>
								</Avatar>
								<p>
									{course.author.firstName} {course.author.lastName[0]}
								</p>
							</div>
							<div className='flex items-center gap-3'>
								<div className='flex gap-1 items-center'>
									<CiViewList />
									<p>{course.lessonCount} Lessons</p>
								</div>
								<div className='flex gap-1 items-center'>
									<AiOutlineClockCircle />
									<p>{course.totalHour} Hours</p>
								</div>
								<div className='flex gap-1 items-center'>
									<SiGoogleanalytics />
									<p>{course.level}</p>
								</div>
							</div>
						</div>
						<Separator />
						<div className='flex justify-between'>
							<p className='mr-10'>
								{course.price.toLocaleString('en-US', {
									style: 'currency',
									currency: 'USD',
								})}
							</p>
							<div className='flex gap-4'>
								<Button variant={'default'} className='bg-secondary-foreground'>
									<BsMinecartLoaded />
									Add to Cart
								</Button>
								<Button variant={'outline'}>Detail</Button>
							</div>
						</div>
					</div>
				</div>
				<Separator className='mt-5' />
			</div>
		</>
	)
}

export default AllCoursesCard
