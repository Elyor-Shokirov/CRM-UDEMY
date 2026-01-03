'use client'
import ModeToggle from '@/components/shared/mode-toggle'
import { navigation } from '@/config/constants'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

function AuthNavbarComponent() {
	const t = useTranslations('layout')
	return (
		<>
			<div className='w-full md:h-[10vh]  dark:border-b-gray-700 border-b-gray-200  fixed top-0 left-0 right-0 dark:bg-[#171923]/10 bg-gray-50/10 z-50 backdrop-blur-2xl'>
				<div className='container mx-auto px-4'>
					<div className='flex items-center md:h-[10vh] justify-between py-7'>
						<Link href='/'>
							<Image
								src='/icons/dark-logo.svg'
								width={140}
								height={80}
								alt='Logo'
								className='block dark:hidden w-20 sm:w-28 md:w-32 lg:w-36'
							/>
							<Image
								src='/icons/light-logo.svg'
								width={140}
								height={80}
								alt='Logo'
								className='hidden dark:block w-20 sm:w-28 md:w-32 lg:w-36'
							/>
						</Link>
						<div className='justify-between flex items-center gap-2 '>
							{navigation[1].links.map(nav => (
								<Link
									key={nav.route}
									href={nav.route}
									className='hover:underline text-gray-600 dark:text-gray-400  dark:hover:text-white transition-colors'
								>
									{t(nav.label)}
								</Link>
							))}
							<ModeToggle />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AuthNavbarComponent
