import { ReactNode } from 'react'

export interface ChildrenProps {
	children: ReactNode
}

export interface CourseType {
	image: string
	title: string
	lessonCount: number
	totalHour: number
	level: string
	price: number
	reviewAvarage: number
	reviewCount: number
	author: AuthorType
}

export interface AuthorType {
	firstName: string
	lastName: string
	avatar: string
}

export interface StarRating {
	value: number
	count?: number
	size?: number
	activeColor?: string
	inactiveColor?: string
}
