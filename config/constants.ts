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

export const navigation = [
	{
		title: 'General',
		links: [
			{
				label: 'Explore',
				route: '/',
				icon: AiOutlineDashboard,
			},
			{
				label: 'Courses',
				route: '/courses',
				icon: CiViewList,
			},
			{
				label: 'Books',
				route: '/books',
				icon: FaBookReader,
			},
			{
				label: 'Articles',
				route: '/articles',
				icon: MdImportContacts,
			},
		],
	},
	{
		title: 'Pages',
		links: [
			{
				label: 'About',
				route: '/about',
				icon: FaDraftingCompass,
			},
			{
				label: 'Contact',
				route: '/contact',
				icon: MdOutlineContactMail,
			},
			{
				label: 'Pricing',
				route: '/pricing',
				icon: AiOutlineDollar,
			},
			{
				label: 'FAQ',
				route: '/faq',
				icon: FaQuestionCircle,
			},
		],
	},
]

export const categories = [
	{ name: 'Creative Design', id: 1, icon: '/icons/design.svg' },
	{ name: 'Sales Marketing', id: 2, icon: '/icons/announcement.svg' },
	{ name: 'Development IT', id: 3, icon: '/icons/coding.svg' },
	{ name: 'Engineering Architecture', id: 4, icon: '/icons/print.svg' },
	{ name: 'Personal Development', id: 5, icon: '/icons/person.svg' },
	{ name: 'Finance Accounting', id: 6, icon: '/icons/laptop.svg' },
]

export const trustedCompeny = [
	AiFillAmazonCircle,
	SiAmd,
	SiCisco,
	FaApplePay,
	SiLogitech,
	SiSpotify,
]
