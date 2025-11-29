'use client'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { language } from '@/config/constants'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

function TranslateButton() {
	const router = useRouter()
	const pathname = usePathname()
	const currentLocale = useLocale()

	const changeLanguage = (newLocale: string) => {
		const segments = pathname.split('/')
		segments[1] = newLocale
		router.push(segments.join('/'), { scroll: false }) // 🔑 scrollni saqlaydi
	}

	const currentLanguage = language.find(lang => lang.lng === currentLocale)

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					size={'icon'}
					variant={'secondary'}
					aria-label='translate'
					className='cursor-pointer'
				>
					{currentLanguage ? (
						<Image
							src={currentLanguage.icon}
							width={24}
							height={24}
							alt={currentLanguage.nativeLng}
							className='rounded-sm'
						/>
					) : (
						<span>🌐</span>
					)}
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align='end' className='min-w-40'>
				{language.map(item => (
					<DropdownMenuItem
						key={item.lng}
						onClick={() => changeLanguage(item.lng)}
						className={`cursor-pointer ${
							currentLocale === item.lng ? 'bg-accent' : ''
						}`}
					>
						<Image
							src={item.icon}
							width={24}
							height={24}
							alt={item.nativeLng}
							className='mr-2 rounded-sm'
						/>
						<span>{item.nativeLng}</span>
						{currentLocale === item.lng && (
							<span className='ml-auto text-primary'>✓</span>
						)}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default TranslateButton
