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
		<div className='flex'>
			{/* LEFT SIDEBAR — FIXED */}
			<Sidebar toggle={toggle} />

			<div className='flex flex-col min-h-screen flex-1 ml-0 md:pl-[299px]'>
				<Navbar onToggle={onToggle} />

				<main className='flex-1 mt-[11vh] px-4 sm:px-8'>{children}</main>

				<Footer />
			</div>
		</div>
	)
}

export default Layout
