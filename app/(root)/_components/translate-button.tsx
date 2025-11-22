import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Image from 'next/image'
import { BsTranslate } from 'react-icons/bs'

function TranslateButton() {
	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						size={'icon'}
						variant={'secondary'}
						aria-label='translate'
						className='cursor-pointer'
					>
						<BsTranslate />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className='cursor-pointer'>
					<DropdownMenuItem>
						<Image
							src='/icons/uzb.svg'
							width={30}
							height={30}
							alt='Flag-icon'
						/>
						UZB
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Image
							src='/icons/rus.svg'
							width={30}
							height={30}
							alt='Flag-icon'
						/>
						RUS
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Image
							src='/icons/eng.svg'
							width={30}
							height={30}
							alt='Flag-icon'
						/>
						ENG
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

export default TranslateButton
