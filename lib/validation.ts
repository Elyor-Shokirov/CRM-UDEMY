import z from 'zod'

export const contactFormSchema = z.object({
	username: z.string().min(2).max(50),
	email: z.string().email(),
	textarea: z.string().min(10),
	phone_number: z.string().min(5).max(20),
})

export const loginFormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6).max(100),
})

export const registerFormSchema = z
	.object({
		email: z.string().email({ message: 'Invalid email address' }),
		password: z
			.string()
			.min(6, { message: 'Password must be at least 6 characters' })
			.max(100),
		confirmPassword: z.string(),
	})
	.refine(values => values.password === values.confirmPassword, {
		message: "Passwords don't match",
		path: ['confirmPassword'],
	})
