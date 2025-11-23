'use client'
import { ChildrenProps } from '@/types'
import { useState } from 'react'
import Navbar from './_components/navbar'
import Sidebar from './_components/sidebar'

function Layout({ children }: ChildrenProps) {
	const [toggle, setToggle] = useState<boolean>(false)

	const onToggle = () => setToggle(prev => !prev)

	return (
		<div>
			<Navbar onToggle={onToggle} />
			<Sidebar toggle={toggle} />
			<main className='mt-[11vh] pl-0 lg:pl-80 '>
				<div className='container  px-3.5'>{children}</div>
			</main>
		</div>
	)
}

export default Layout
