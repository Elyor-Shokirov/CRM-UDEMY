// import AnnouncementIcons from '@/icons/announcement.svg'
// import CodingIcons from '@/icons/coding.svg'
import {
	AiFillAmazonCircle,
	AiOutlineDashboard,
	AiOutlineDollar,
} from 'react-icons/ai'
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
		title: 'General',
		links: [
			{ label: 'Explore', route: '/', icon: AiOutlineDashboard },
			{ label: 'Courses', route: '/courses', icon: CiViewList },
			{ label: 'Books', route: '/books', icon: FaBookReader },
			{ label: 'Articles', route: '/articles', icon: MdImportContacts },
		],
	},
	{
		title: 'Pages',
		links: [
			{ label: 'About', route: '/about', icon: FaDraftingCompass },
			{ label: 'Contact', route: '/contact', icon: MdOutlineContactMail },
			{ label: 'Pricing', route: '/pricing', icon: AiOutlineDollar },
			{ label: 'FAQ', route: '/faq', icon: FaQuestionCircle },
		],
	},
] as const

// Course categories
export const categories = [
	{ id: 1, name: 'Creative Design', icon: DesignIcon },
	{ id: 2, name: 'Sales & Marketing', icon: AnnouncementIcons },
	{ id: 3, name: 'Development & IT', icon: CodingIcons },
	{ id: 4, name: 'Engineering & Architecture', icon: PrintIcon },
	{ id: 5, name: 'Personal Development', icon: PersonIcon },
	{ id: 5, name: 'Personal Development', icon: PersonIcon },
	{ id: 6, name: 'Finance & Accounting', icon: LaptopIcon },
] as const
// Trusted companies / partners logos (as React components)
export const trustedCompanies = [
	AiFillAmazonCircle,
	SiAmd,
	SiCisco,
	FaApplePay,
	SiLogitech,
	SiSpotify,
] as const

export const OnlineTraningData = [
	{ title: 'Signup Platform', icon: OnlineCourseIcon },
	{ icon: RightLineIcon },
	{ title: 'Find Courses', icon: OnlineLearningIcon },
	{ icon: FinishRightIcon },
	{ title: 'Learn Relaxing', icon: OnlineStudentIcon },
]
