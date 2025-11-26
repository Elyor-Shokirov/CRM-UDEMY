'use client'
import { ChildrenProps } from '@/types'
import { useState } from 'react'
import Footer from './_components/footer'
import Navbar from './_components/navbar'
import Sidebar from './_components/sidebar'

function Layout({ children }: ChildrenProps) {
	const [toggle, setToggle] = useState<boolean>(false)

	const onToggle = () => setToggle(prev => !prev)

	return (
		<div>
			<Navbar onToggle={onToggle} />
			<Sidebar toggle={toggle} />
			<main className='mt-[11vh] pl-0 md:pl-80 '>
				<div className='w-full px-4 sm:px-8 mx-auto'>{children}</div>
			</main>
			<Footer />
		</div>
	)
}

export default Layout
