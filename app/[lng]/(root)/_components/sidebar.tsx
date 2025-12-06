'use client'
import { Button } from '@/components/ui/button'
import { navigation } from '@/config/constants'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SidebarProps } from './props'

function Sidebar({ toggle }: SidebarProps) {
	const pathname = usePathname()
	const t = useTranslations('layout')
	console.log('pathname', pathname)

	const cleanPathname = pathname.replace(/^\/[a-z]{2}/, '') || '/' // /faq

	return (
		<div
			className={`
		${toggle ? 'w-full' : 'w-[300px]'} h-[90vh] 
		dark:bg-gray-900 bg-gray-50 
		dark:border-b-gray-700 border-b-gray-200 
		border fixed top-0 left-0 mt-[10vh] 
		overflow-y-auto scrollbar-thin 
		transition-all duration-500 ease-in-out z-30
		${toggle ? 'translate-x-0' : '-translate-x-full'}  /* mobile/tablet toggle */
		lg:translate-x-0  /* desktopda sidebar doim ochiq */
	`}
		>
			<div className='p-4'>
				{navigation.map(item => (
					<div key={item.title}>
						<p>{t(item.title)}</p>
						{item.links.map(nav => {
							const pathWithoutLocale = pathname.replace(
								/^\/[a-z]{2}(\/|$)/,
								'/'
							)
							const normalizedRoute = nav.route.startsWith('/')
								? nav.route
								: `/${nav.route}`

							const active = pathWithoutLocale === normalizedRoute
							return (
								<Link key={nav.label} href={`${nav.route}`}>
									<Button
										className='w-full justify-start h-3.5 mt-2 cursor-pointer gap-2 p-7'
										variant={active ? 'default' : 'ghost'}
									>
										<nav.icon size={40} className='mr-2' />
										{t(nav.label)}
									</Button>
								</Link>
							)
						})}
					</div>
				))}
			</div>
		</div>
	)
}

export default Sidebar
