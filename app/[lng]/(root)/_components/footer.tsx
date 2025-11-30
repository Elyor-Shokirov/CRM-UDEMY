'use client'
import { Button } from '@/components/ui/button'
import dayjs from 'dayjs'
import { useTranslations } from 'next-intl'
import { FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa'
function Footer() {
	const t = useTranslations('layout')

	return (
		<div className='pl-2 md:pl-5 w-full h-[10vh] px-10 flex items-center border dark:border-t-gray-700 border-t-gray-200  top-0 left-0 right-0 dark:bg-[#171923] bg-gray-50 z-60 mt-10'>
			<div className='flex justify-between items-center w-full'>
				<div>
					<p>
						© {dayjs().format('YYYY')} Elyor | {t('footer')}
					</p>
				</div>
				<div className='flex gap-3'>
					<Button
						className='cursor-pointer'
						variant={'outline'}
						size={'icon-lg'}
					>
						<FaTelegram className='text-5xl' />
					</Button>
					<Button
						className='cursor-pointer'
						variant={'outline'}
						size={'icon-lg'}
					>
						<FaYoutube className='text-5xl' />
					</Button>
					<Button
						className='cursor-pointer'
						variant={'outline'}
						size={'icon-lg'}
					>
						<FaInstagram className='text-5xl' />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Footer
