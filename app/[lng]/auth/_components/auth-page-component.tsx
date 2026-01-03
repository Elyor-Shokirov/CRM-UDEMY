'use client'
import { avatars } from '@/config/constants'
import Image from 'next/image'
import React, { useState } from 'react'
import AuthNavbarComponent from './auth-navbar-component'
import Login from './login'
import Register from './register'
import SocialMedia from './social-media'
import Verification from './verification'

const AuthPageComponent = () => {
	const [state, setState] = useState<'login' | 'register' | 'verification'>(
		'login'
	)

	const onNavigateStateComponent = (
		component: 'login' | 'register' | 'verification'
	) => setState(component)

	const renderStateComponent = () => {
		switch (state) {
			case 'login':
				return <Login onNavigateStateComponent={onNavigateStateComponent} />
			case 'register':
				return <Register onNavigateStateComponent={onNavigateStateComponent} />
			case 'verification':
				return <Verification />
		}
	}

	return (
		<>
			<AuthNavbarComponent />
			<div className=' min-h-screen relative flex items-center justify-center overflow-hidden '>
				<div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-20 '>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-32 '>
						<div className='space-y-10 md:space-y-20'>
							<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
								Senior web designers
								<span className='bg-linear-to-r from-gray-400 to-blue-500 bg-clip-text text-transparent'>
									&
								</span>{' '}
								Stack developers
							</h1>

							<div className='flex items-center gap-4'>
								{/* Avatar Group */}
								<div className='flex -space-x-4'>
									{avatars.map((avatar, index) => (
										<div
											key={avatar.name}
											className='relative'
											style={{ zIndex: avatars.length - index }}
										>
											<div className='absolute inset-0 bg-linear-to-bl from-gray-400 to-blue-500 rounded-full scale-110' />
											<div className='relative w-11 h-11 md:w-16 md:h-16 rounded-full border-2 border-white dark:border-gray-900 overflow-hidden'>
												<Image
													src={avatar.url}
													alt={avatar.name}
													width={64}
													height={64}
													className='object-cover w-full h-full'
												/>
											</div>
										</div>
									))}
								</div>

								<span className='text-4xl md:text-6xl font-bold'>+</span>

								<div className='relative'>
									<div className='absolute inset-0 bg-gradient-to-bl from-gray-400 to-blue-500 rounded-full scale-110' />
									<div className='relative bg-gray-800 text-white rounded-full w-11 h-11 md:w-16 md:h-16 flex items-center justify-center text-sm md:text-lg font-medium'>
										You
									</div>
								</div>
							</div>
						</div>

						{/* Right Side - Auth Form */}
						<div className='bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 md:p-8 space-y-8 max-w-lg'>
							{renderStateComponent()}
							<SocialMedia />
						</div>
					</div>
				</div>

				<Blur className='absolute top-30 left-0 pointer-events-none' />
			</div>
		</>
	)
}

const Blur = (props: React.SVGProps<SVGSVGElement>) => {
	const getBreakpointValue = (values: {
		base: string | number
		md: string | number
		lg: string | number
	}) => {
		if (typeof window === 'undefined') return values.base

		const width = window.innerWidth
		if (width >= 1024) return values.lg
		if (width >= 768) return values.md
		return values.base
	}

	const [dimensions, setDimensions] = useState({
		width: '100%' as string | number,
		zIndex: -1,
	})

	React.useEffect(() => {
		const updateDimensions = () => {
			setDimensions({
				width: getBreakpointValue({ base: '100%', md: '50vw', lg: '30vw' }),
				zIndex: getBreakpointValue({ base: -1, md: -1, lg: 0 }) as number,
			})
		}
		updateDimensions()
		window.addEventListener('resize', updateDimensions)
		return () => window.removeEventListener('resize', updateDimensions)
	}, [])

	return (
		<svg
			width={dimensions.width}
			height='960px'
			viewBox='0 0 428 760'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{
				zIndex: dimensions.zIndex,
				filter: 'blur(70px)',
			}}
			{...props}
		>
			<circle cx='71' cy='61' r='111' fill='#F56565' />
			<circle cx='244' cy='106' r='139' fill='#ED64A6' />
			<circle cy='291' r='139' fill='#ED64A6' />
			<circle cx='80.5' cy='189.5' r='101.5' fill='#ED8936' />
			<circle cx='196.5' cy='317.5' r='101.5' fill='#ECC94B' />
			<circle cx='70.5' cy='458.5' r='101.5' fill='#48BB78' />
			<circle cx='426.5' cy='-0.5' r='101.5' fill='#4299E1' />
		</svg>
	)
}

export default AuthPageComponent
