'use client'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { loginFormSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { LoginProps } from './props/login.props'

function Login({ onNavigateStateComponent }: LoginProps) {
	const [showPassword, setShowPassword] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	function onSubmit(values: z.infer<typeof loginFormSchema>) {
		setIsLoading(true)
		console.log(values)
		setTimeout(() => {
			setIsLoading(false)
		}, 2000)
	}

	return (
		<div className='space-y-4'>
			<h1 className='text-gray-900 dark:text-gray-200 text-2xl sm:text-3xl md:text-4xl font-bold'>
				Login{' '}
				<span className='bg-gradient-to-r from-gray-400 to-blue-500 bg-clip-text text-transparent'>
					!
				</span>
			</h1>
			<p className='text-gray-500 text-sm sm:text-base'>
				We`re happy to see you again on our platform, for getting more
				experience please sign in on your account
			</p>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 mt-4'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-sm font-semibold dark:text-white text-gray-700 flex items-center gap-1'>
									<span>Email address</span>
									<span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Input
										disabled={isLoading}
										className='w-full px-5 py-6 rounded-md border-2 border-gray-200 focus:border-[#283b89] focus:outline-none font-medium text-base focus:ring-2 focus:ring-[#283b89]/20 transition-all duration-300 text-black dark:text-white dark:bg-gray-800 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed'
										placeholder='example@email.com'
										type='email'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-sm font-semibold dark:text-white text-gray-700 flex items-center gap-1'>
									<span>Password</span>
									<span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<div className='relative'>
										<Input
											disabled={isLoading}
											className='w-full px-5 py-6 pr-12 rounded-md border-2 border-gray-200 focus:border-[#283b89] focus:outline-none font-medium text-base focus:ring-2 focus:ring-[#283b89]/20 transition-all duration-300 text-black dark:text-white dark:bg-gray-800 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed'
											placeholder='********'
											{...field}
											type={showPassword ? 'text' : 'password'}
										/>
										<button
											type='button'
											onClick={() => setShowPassword(!showPassword)}
											disabled={isLoading}
											className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none'
											aria-label={
												showPassword ? 'Hide password' : 'Show password'
											}
										>
											{showPassword ? (
												<EyeOff className='w-5 h-5' />
											) : (
												<Eye className='w-5 h-5' />
											)}
										</button>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className='flex justify-between items-center'>
						<div className='flex justify-between gap-3'>
							<Checkbox id='terms-2' className='text-4xl' />
							<div className='grid gap-2'>
								<Label htmlFor='terms-2'>Remember me</Label>
							</div>
						</div>
						<button
							type='button'
							className='text-sm text-[#7788cb] hover:underline font-medium cursor-pointer'
						>
							Forgot password?
						</button>
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
							'Sign in'
						)}
					</Button>

					<p className='text-center text-sm text-gray-600 dark:text-gray-400 mr-3'>
						Don`t have an account?
						<button
							type='button'
							onClick={() => onNavigateStateComponent('register')}
							className='text-[#6176cd] hover:underline font-semibold ml-2 cursor-pointer'
						>
							Register
						</button>
					</p>
				</form>
			</Form>
		</div>
	)
}

export default Login
