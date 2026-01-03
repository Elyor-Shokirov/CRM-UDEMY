// import AnnouncementIcons from '@/icons/announcement.svg'
// import CodingIcons from '@/icons/coding.svg'
import { CourseType } from '@/types'
import {
	AiFillAmazonCircle,
	AiOutlineDashboard,
	AiOutlineDollar,
} from 'react-icons/ai'
import { BsGoogle } from 'react-icons/bs'
import { CiViewList } from 'react-icons/ci'
import {
	FaApplePay,
	FaBookReader,
	FaDraftingCompass,
	FaQuestionCircle,
} from 'react-icons/fa'
import { MdImportContacts, MdOutlineContactMail } from 'react-icons/md'
import { SiAmd, SiCisco, SiLogitech, SiSpotify } from 'react-icons/si'
import AnnouncementIcons from '../src/icons/announcement.svg'
import CodingIcons from '../src/icons/coding.svg'
import DesignIcon from '../src/icons/design.svg'
import FinishRightIcon from '../src/icons/finish-right-line.svg'
import LaptopIcon from '../src/icons/laptop.svg'
import OnlineCourseIcon from '../src/icons/online-course.svg'
import OnlineLearningIcon from '../src/icons/online-learning.svg'
import OnlineStudentIcon from '../src/icons/online-studen.svg'
import PersonIcon from '../src/icons/person.svg'
import PrintIcon from '../src/icons/print.svg'
import RightLineIcon from '../src/icons/right-line.svg'

// Navigation menu structure
export const navigation = [
	{
		title: 'sidebar_title_1',
		links: [
			{
				label: 'sidebar_title_1_explore',
				route: '/',
				icon: AiOutlineDashboard,
			},
			{ label: 'sidebar_title_1_courses', route: 'courses', icon: CiViewList },
			{ label: 'sidebar_title_1_books', route: 'books', icon: FaBookReader },
			{
				label: 'sidebar_title_1_articles',
				route: '/articles',
				icon: MdImportContacts,
			},
		],
	},
	{
		title: 'sidebar_title_2',
		links: [
			{
				label: 'sidebar_title_2_about',
				route: '/about',
				icon: FaDraftingCompass,
			},
			{
				label: 'sidebar_title_2_contact',
				route: '/contact',
				icon: MdOutlineContactMail,
			},
			{
				label: 'sidebar_title_2_pricing',
				route: '/pricing',
				icon: AiOutlineDollar,
			},
			{ label: 'sidebar_title_2_faq', route: '/faq', icon: FaQuestionCircle },
		],
	},
] as const

// Course categories
export const categories = [
	{ id: 1, name: 'design_category', icon: DesignIcon },
	{ id: 2, name: 'sales_marketing_category', icon: AnnouncementIcons },
	{ id: 3, name: 'development_it_category', icon: CodingIcons },
	{ id: 4, name: 'engineering_architecture_category', icon: PrintIcon },
	{ id: 5, name: 'personl_development_category', icon: PersonIcon },
	{ id: 5, name: 'personl_development_category', icon: PersonIcon },
	{ id: 6, name: 'finance_accounting_category', icon: LaptopIcon },
] as const
// Trusted companies / partners logos (as React components)
export const trustedCompanies = [
	AiFillAmazonCircle,
	SiAmd,
	SiCisco,
	FaApplePay,
	SiLogitech,
	SiSpotify,
	BsGoogle,
]

export const OnlineTraningData = [
	{ title: 'how_it_works_first_step', icon: OnlineCourseIcon },
	{ icon: RightLineIcon },
	{ title: 'how_it_works_second_step', icon: OnlineLearningIcon },
	{ icon: FinishRightIcon },
	{ title: 'how_it_works_third_step', icon: OnlineStudentIcon },
]
export const language = [
	{ nativeLng: 'English', lng: 'en', icon: '/icons/eng.svg' },
	{ nativeLng: "O'zbek", lng: 'uz', icon: '/icons/uzb.svg' },
	{ nativeLng: 'Türkçe', lng: 'tr', icon: '/icons/turk.svg' },
	{ nativeLng: 'Русский', lng: 'ru', icon: '/icons/rus.svg' },
]
export const coursesFilter = [
	{
		title: 'filter_category_title',
		id: 'category',
		categoryList: [
			{ name: 'fitler_category_item_1', id: 'web-developments' },
			{ name: 'fitler_category_item_2', id: 'mobile-application' },
			{ name: 'fitler_category_item_3', id: 'graphic-design' },
			{ name: 'fitler_category_item_4', id: 'artificial-intelligence' },
		],
	},
	{
		title: 'fitler_rating_title',
		id: 'rating',
		categoryList: [
			{ name: 'fitler_rating_item_1', id: '4.5' },
			{ name: 'fitler_rating_item_2', id: '4' },
			{ name: 'fitler_rating_item_3', id: '3.5' },
			{ name: 'fitler_rating_item_4', id: '3' },
		],
	},
	{
		title: 'filter_language_title',
		id: 'language',
		categoryList: [
			{ name: 'filter_language_item_1', id: 'en' },
			{ name: 'filter_language_item_2', id: 'ru' },
			{ name: 'filter_language_item_3', id: 'uz' },
			{ name: 'filter_language_item_4', id: 'tr' },
		],
	},
	{
		title: 'filter_level_title',
		id: 'level',
		categoryList: [
			{ name: 'filter_level_item_1', id: 'beginner' },
			{ name: 'filter_level_item_2', id: 'medium' },
			{ name: 'filter_level_item_3', id: 'proffessional' },
		],
	},
]
export const courses: CourseType[] = [
	{
		image: 'https://media.graphassets.com/3gf746AKRbWNjB8OCoEB',
		title: 'JavaScript full course',
		lessonCount: 96,
		totalHour: 13.6,
		level: 'Beginner',
		price: 20,
		reviewAvarage: 4.5,
		reviewCount: 200,
		author: {
			firstName: 'Elyo',
			lastName: 'Shokirov',
			avatar:
				'https://genprofile.ai/_next/image?url=%2Fimg%2Fsample%2F1414a52e-21fe-4e92-9ea6-93ff49f81011.jpeg&w=828&q=100',
		},
	},
	{
		image: 'https://media.graphassets.com/54vR0DStGoFuZBVkFwWQ',
		title: 'VueJS full course',
		lessonCount: 30,
		totalHour: 10.6,
		level: 'Beginner',
		price: 20,
		reviewAvarage: 4.5,
		reviewCount: 250,
		author: {
			firstName: 'Elyo',
			lastName: 'Shokirov',
			avatar:
				'https://genprofile.ai/_next/image?url=https%3A%2F%2Fgenprofile.ai%2Fpictures%2Fuser_35tO9Q9Z1NYlFvYotXDlDFF8U8h%2Fdd8a636b-d603-4fed-a629-f4e805b5fa7e.jpeg&w=384&q=75asas',
		},
	},
	{
		image: 'https://media.graphassets.com/65rcPxsLT9ysJDisXF80',
		title: 'ReactJS full course',
		lessonCount: 70,
		totalHour: 19,
		level: 'Beginner',
		price: 20,
		reviewAvarage: 4.5,
		reviewCount: 150,
		author: {
			firstName: 'Elyo',
			lastName: 'Shokirov',
			avatar:
				'https://genprofile.ai/_next/image?url=https%3A%2F%2Fgenprofile.ai%2Fpictures%2Fuser_35tO9Q9Z1NYlFvYotXDlDFF8U8h%2Fdd8a636b-d603-4fed-a629-f4e805b5fa7e.jpeg&w=384&q=75',
		},
	},
	{
		image: 'https://media.graphassets.com/xactyo8TtyTIkAcMWvSm',
		title: 'VueX full course',
		lessonCount: 120,
		totalHour: 24.6,
		level: 'Beginner',
		price: 20,
		reviewAvarage: 5,
		reviewCount: 250,
		author: {
			firstName: 'e',
			lastName: 'Shokirov',
			avatar:
				'https://genprofile.ai/_next/image?url=https%3A%2F%2Fgenprofile.ai%2Fpictures%2Fuser_35tO9Q9Z1NYlFvYotXDlDFF8U8h%2Fdd8a636b-d603-4fed-a629-f4e805b5fa7e.jpeg&w=384&q=75',
		},
	},
	{
		image: 'https://media.graphassets.com/Ql2hDpJhQsaBT3inNuZ4',
		title: 'Redux full course',
		lessonCount: 39,
		totalHour: 8.2,
		level: 'Beginner',
		price: 20,
		reviewAvarage: 4.9,
		reviewCount: 120,
		author: {
			firstName: 'Elyo',
			lastName: 'Shokirov',
			avatar:
				'https://genprofile.ai/_next/image?url=https%3A%2F%2Fgenprofile.ai%2Fpictures%2Fuser_35tO9Q9Z1NYlFvYotXDlDFF8U8h%2Fdd8a636b-d603-4fed-a629-f4e805b5fa7e.jpeg&w=384&q=75',
		},
	},
	{
		image: 'https://media.graphassets.com/mDcwhbguQpyM74jb18M5',
		title: 'NodeJS full course',
		lessonCount: 56,
		totalHour: 20.6,
		level: 'Beginner',
		price: 20,
		reviewAvarage: 5,
		reviewCount: 250,
		author: {
			firstName: 'Elyo',
			lastName: 'Shokirov',
			avatar:
				'https://genprofile.ai/_next/image?url=https%3A%2F%2Fgenprofile.ai%2Fpictures%2Fuser_35tO9Q9Z1NYlFvYotXDlDFF8U8h%2Fdd8a636b-d603-4fed-a629-f4e805b5fa7e.jpeg&w=384&q=75',
		},
	},
]

export const booksCategory = [
	{
		label: 'filter_all_category',
		id: 'all-categories',
	},

	{
		label: 'filter_design',
		id: 'design',
	},
	{
		label: 'filter_programmin',
		id: 'programming',
	},
	{
		label: 'filter_business',
		id: 'business',
	},
	{
		label: 'filter_history',
		id: 'history',
	},
	{
		label: 'filter_writing',
		id: 'writing',
	},
	{
		label: 'filter_lifestyle',
		id: 'lifestyle',
	},
]

export const faq = [
	{
		question: 'faq_question_1',
		answer: 'faq_answer_1',
	},
	{
		question: 'faq_question_2',
		answer: 'faq_answer_2',
	},
	{
		question: 'faq_question_3',
		answer: 'faq_answer_3',
	},
	{
		question: 'faq_question_4',
		answer: 'faq_answer_4',
	},
	{
		question: 'faq_question_5',
		answer: 'faq_answer_5',
	},
	{
		question: 'faq_question_6',
		answer: 'faq_answer_6',
	},
	{
		question: 'faq_question_7',
		answer: 'faq_answer_7',
	},
]

export const avatars = [
	{
		name: 'Ryan Florence',
		url: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTYyNDV8MHwxfHNlYXJjaHw3fHxBdmF0YXJ8ZW58MHx8fHwxNzY3NDcwMDA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
	},
	{
		name: 'Segun Adebayo',
		url: 'https://images.unsplash.com/photo-1728577740843-5f29c7586afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTYyNDV8MHwxfHNlYXJjaHw0fHxBdmF0YXJ8ZW58MHx8fHwxNzY3NDcwMDA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
	},
	{
		name: 'Kent Dodds',
		url: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTYyNDV8MHwxfHNlYXJjaHwxN3x8QXZhdGFyfGVufDB8fHx8MTc2NzQ3MDA2NXww&ixlib=rb-4.1.0&q=80&w=1080',
	},
	{
		name: 'Prosper Otemuyiwa',
		url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTYyNDV8MHwxfHNlYXJjaHwxfHxBdmF0YXJ8ZW58MHx8fHwxNzY3NDcwMDA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
	},
	{
		name: 'Christian Nwamba',
		url: 'https://images.unsplash.com/photo-1654110455429-cf322b40a906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTYyNDV8MHwxfHNlYXJjaHw2fHxBdmF0YXJ8ZW58MHx8fHwxNzY3NDcwMDA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
	},
]
