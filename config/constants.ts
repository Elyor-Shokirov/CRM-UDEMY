// import AnnouncementIcons from '@/icons/announcement.svg'
// import CodingIcons from '@/icons/coding.svg'
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
			{ label: 'sidebar_title_1_courses', route: '/courses', icon: CiViewList },
			{ label: 'sidebar_title_1_books', route: '/books', icon: FaBookReader },
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
