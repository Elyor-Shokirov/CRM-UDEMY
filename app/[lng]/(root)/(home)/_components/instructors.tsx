'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { FaUserGraduate } from 'react-icons/fa'
import SectionTitle from '../../_components/section-title/section-title'

function Instructors() {
	const t = useTranslations('home')
	return (
		<div>
			<SectionTitle
				title={t('instructor_title')}
				subtitle={t('instructor_description')}
			/>
			<div className='grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-5'>
				{data.map((item, idx) => (
					<div key={idx} className='col-span-1'>
						<div className='relative w-full' style={{ height: 330 }}>
							<Image
								className='rounded-lg'
								src={item.avatar}
								alt={item.firstName}
								fill
								sizes='100vw'
								style={{ objectFit: 'cover' }}
							/>
						</div>
						<h1 className='text-xl mt-3 font-roboto'>
							{item.firstName} {item.lastName}
						</h1>
						<p className='text-gray-500'>{item.job}</p>
						<div className='flex gap-2 opacity-60'>
							<div className='flex justify-center items-center gap-1'>
								<FaUserGraduate />
								<p>{item.students} students</p>
							</div>
							<div className='flex justify-center items-center gap-1'>
								<AiOutlinePlayCircle />
								<p>{item.courses} courses</p>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='mt-4 text-center flex justify-center gap-2 font-roboto'>
				<p>{t('instructor_link_title')}</p>
				{''}
				<Link
					className='text-green-800 hover:underline font-roboto'
					href={'/become-instructor'}
				>
					{t('instructor_link_router')}
				</Link>
			</div>
		</div>
	)
}

export default Instructors

const data = [
	{
		firstName: 'Elyor',
		lastName: 'Shokirov',
		job: 'Software Engineer',
		students: 230,
		courses: 20,
		avatar:
			'https://images.unsplash.com/photo-1552337557-45792b252a2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZha2UlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D',
	},
	{
		firstName: 'Elyor',
		lastName: 'Shokirov',
		job: 'Software Engineer',
		students: 230,
		courses: 20,
		avatar:
			'https://images.unsplash.com/photo-1552337557-45792b252a2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZha2UlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D',
	},
	{
		firstName: 'Elyor',
		lastName: 'Shokirov',
		job: 'Software Engineer',
		students: 230,
		courses: 20,
		avatar:
			'https://images.unsplash.com/photo-1552337557-45792b252a2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZha2UlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D',
	},
	{
		firstName: 'Elyor',
		lastName: 'Shokirov',
		job: 'Software Engineer',
		students: 230,
		courses: 20,
		avatar:
			'https://images.unsplash.com/photo-1552337557-45792b252a2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZha2UlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D',
	},
]
