'use client'
import { Button } from '@/components/ui/button'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from '@/components/ui/input-otp'
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
function Verification() {
	const [isLoading, setIsLoading] = useState(false)

	const t = useTranslations('global')

	return (
		<>
			<div className='space-y-4'>
				<h1 className='text-gray-900 dark:text-gray-200 text-2xl sm:text-3xl md:text-4xl font-bold'>
					<span className='bg-gradient-to-r from-gray-400 to-blue-500 bg-clip-text text-transparent'>
						{t('verification_title')}
					</span>
				</h1>
				<p className='text-gray-500 text-sm sm:text-base'>
					{t('verification_description')}
				</p>
				<div className='flex justify-center'>
					<InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
						<InputOTPGroup className='flex gap-2 sm:gap-3'>
							{[0, 1, 2, 3, 4, 5].map(index => (
								<InputOTPSlot
									key={index}
									index={index}
									className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center text-xl sm:text-2xl md:text-3xl  border-2! border-gray-300! dark:border-gray-600! rounded-xl! bg-white! dark:bg-gray-800! focus:border-[#748ae4]! focus:ring-2! focus:ring-[#748ae4]/20! transition-all! aspect-square!'
								/>
							))}
						</InputOTPGroup>
					</InputOTP>
				</div>

				<Button
					type='submit'
					size='lg'
					disabled={isLoading}
					className='w-full py-6 bg-gradient-to-r from-[#748ae4] to-blue-600 hover:from-[#1e2d6b] hover:to-blue-700 text-white font-semibold rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95 transform'
				>
					{isLoading ? (
						<span className='flex items-center justify-center gap-2'>
							<svg className='animate-spin h-5 w-5' viewBox='0 0 24 24'>
								<circle
									className='opacity-25'
									cx='12'
									cy='12'
									r='10'
									stroke='currentColor'
									strokeWidth='4'
									fill='none'
								/>
								<path
									className='opacity-75'
									fill='currentColor'
									d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
								/>
							</svg>
							Signing in...
						</span>
					) : (
						t('verification_btn')
					)}
				</Button>
			</div>
		</>
	)
}

export default Verification
