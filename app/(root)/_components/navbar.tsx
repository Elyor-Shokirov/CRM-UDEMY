import ModeToggle from '@/components/shared/mode-toggle'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { BiMenuAltLeft, BiUserCircle } from 'react-icons/bi'
import { MdOutlineContactSupport } from 'react-icons/md'
import { HeaderProp } from './props'
import TranslateButton from './translate-button'

function Navbar({ onToggle }: HeaderProp) {
	return (
		<div className='w-full h-[10vh] px-10 flex items-center border dark:border-b-gray-700 border-b-gray-200 fixed  top-0 left-0 right-0 dark:bg-[#171923] bg-gray-50 z-60'>
			<div className='flex justify-between w-full'>
				<div className='flex items-center gap-2'>
					<BiMenuAltLeft
						className='text-xl md:text-2xl lg:text-2xl cursor-pointer'
						onClick={onToggle}
					/>
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
				</div>

				<div className='flex  gap-2 items-center'>
					<Button
						size={'icon'}
						variant={'ghost'}
						aria-label='support'
						className='hidden lg:flex cursor-pointer'
					>
						<MdOutlineContactSupport />
					</Button>
					<TranslateButton />
					<ModeToggle />
					<Button variant={'secondary'} className='cursor-pointer'>
						<BiUserCircle />
						Login
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Navbar
