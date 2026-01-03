'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { contactFormSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import SectionTitle from '../../_components/section-title/section-title'

function ContactPageComponent() {
	const t = useTranslations('global')
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<z.infer<typeof contactFormSchema>>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			username: '',
			email: '',
			textarea: '',
			phone_number: '',
		},
	})

	function onSubmit(values: z.infer<typeof contactFormSchema>) {
		const telegramBotId = process.env.NEXT_PUBLIC_TELEGRAM_BOT_API
		const telegramChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID

		if (!telegramBotId || !telegramChatId) {
			toast.error('Telegram konfiguratsiyasi topilmadi')
			return
		}

		setIsLoading(true)

		const promise = fetch(
			`https://api.telegram.org/bot${telegramBotId}/sendMessage`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'cache-control': 'no-cache',
				},
				body: JSON.stringify({
					chat_id: telegramChatId,
					parse_mode: 'HTML',
					text: `
🔔<b>Mijozning aloqa ma'lumotlari:</b>🔔

<b>🙍‍♂️Ismi Familyasi:</b> <i>${values.username}</i>
<b>📱Telefon raqami:</b> <i>+${values.phone_number}</i>
<b>📧Email:</b> <i>${values.email}</i>
<b>✍️Xabar:</b> <i>${values.textarea}</i>
				`,
				}),
			}
		)
			.then(() => form.reset())
			.finally(() => setIsLoading(false))

		toast.promise(promise, {
			loading: 'Yuborilmoqda...',
			success: 'Muvaffaqiyatli yuborildi',
			error: 'Xatolik yuz berdi',
		})
	}

	return (
		<>
			<div className='h-[90vh] grid grid-cols-1 md:grid-cols-12 items-center gap-4'>
				<div className='md:col-span-4 col-span-full md:mb-0 px-4'>
					<SectionTitle
						title='Contact Us'
						subtitle='We`re on a mission to dilver engaging, curated courses at a reasonable price'
					/>
				</div>
				<div className='col-span-full md:col-span-8 flex justify-start items-center md:pb-0 px-4'>
					<Card className='md:w-[60%] w-full'>
						<CardContent>
							<CardTitle className='text-xl'>{t('contact_heading')} </CardTitle>
							<p className='mt-4 text-lg'>{t('contact_text')}</p>
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className='space-y-6   rounded-3xl '
								>
									<FormField
										control={form.control}
										name='username'
										render={({ field }) => (
											<FormItem>
												<FormLabel className='text-sm font-semibold text-gray-700 flex items-center gap-2'>
													<span>{t('contact_name')}</span>
													<span className='text-red-500'>*</span>
												</FormLabel>
												<FormControl>
													<Input
														className=' w-full px-5 py-6 rounded-md border-2 border-gray-200 focus:border-[#283b89] focus:outline-none font-bold text-base text-black focus:ring-2 focus:ring-[#283b89]/20 transition-all duration-300'
														placeholder={t('contact_name') as string}
														{...field}
														disabled={isLoading}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='phone_number'
										render={({ field }) => (
											<FormItem>
												<FormLabel className='text-sm font-semibold text-gray-700 flex items-center gap-2'>
													<span>{t('contact_phoneNumber')}</span>
													<span className='text-red-500'>*</span>
												</FormLabel>
												<FormControl>
													<Input
														className=' w-full px-5 py-6 rounded-md border-2 border-gray-200 focus:border-[#283b89] focus:outline-none font-bold text-base focus:ring-2 focus:ring-[#283b89]/20 transition-all duration-300 text-black '
														placeholder={t('contact_phoneNumber') as string}
														{...field}
														disabled={isLoading}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='email'
										render={({ field }) => (
											<FormItem>
												<FormLabel className='text-sm font-semibold text-gray-700 flex items-center gap-2'>
													<span>{t('contact_email')}</span>
													<span className='text-red-500'>*</span>
												</FormLabel>
												<FormControl>
													<Input
														disabled={isLoading}
														className='w-full px-5 py-6 rounded-md border-2 border-gray-200 focus:border-[#283b89] focus:outline-none font-bold text-base focus:ring-2 focus:ring-[#283b89]/20 transition-all duration-300 text-black '
														placeholder={t('contact_email') as string}
														{...field}
													/>
												</FormControl>

												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='textarea'
										render={({ field }) => (
											<FormItem>
												<FormLabel className='text-sm font-semibold text-gray-700 flex items-center gap-2'>
													<span>{t('contact_message')}</span>
													<span className='text-red-500'>*</span>
												</FormLabel>
												<FormControl>
													<Textarea
														disabled={isLoading}
														className='w-full min-h-37.5 rounded-md border-2 border-gray-200 focus:border-[#283b89] focus:outline-none font-bold text-base focus:ring-2 focus:ring-[#283b89]/20 transition-all duration-300 text-black '
														placeholder={t('contact_message') as string}
														{...field}
													/>
												</FormControl>

												<FormMessage />
											</FormItem>
										)}
									/>
									<Button
										variant={'default'}
										size={'lg'}
										type='submit'
										disabled={isLoading}
										className='w-full'
									>
										{isLoading ? 'Sending...' : t('contact_btn')}
									</Button>{' '}
								</form>
							</Form>
						</CardContent>
					</Card>
				</div>
			</div>
		</>
	)
}

export default ContactPageComponent
