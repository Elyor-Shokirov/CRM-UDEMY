'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'

function ModeToggle() {
	const [mount, setMount] = useState(false)
	const { setTheme, resolvedTheme } = useTheme()

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setMount(true)
	}, [])

	return mount && resolvedTheme === 'dark' ? (
		<Button
			variant={'outline'}
			size={'icon'}
			onClick={() => setTheme('light')}
			className='cursor-pointer'
		>
			<Sun />
		</Button>
	) : (
		<Button
			variant={'outline'}
			size={'icon'}
			onClick={() => setTheme('dark')}
			className='cursor-pointer'
		>
			<Moon />
		</Button>
	)
}

export default ModeToggle
