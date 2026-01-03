import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

function SocialMedia() {
	return (
		<div className='space-y-4'>
			{/* Divider with OR text */}
			<div className='relative flex items-center justify-center'>
				<div className='absolute inset-0 flex items-center'>
					<div className='w-full border-t border-gray-300 dark:border-gray-600'></div>
				</div>
				<div className='relative bg-gray-50 dark:bg-gray-900 px-4 text-sm text-gray-500 dark:text-gray-400'>
					OR
				</div>
			</div>

			{/* Social Media Buttons */}
			<div className='grid grid-cols-2 gap-3'>
				<button className='flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'>
					<FcGoogle />
					<span className='text-sm font-medium'>Google</span>
				</button>

				<button className='flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'>
					<FaGithub />
					<span className='text-sm font-medium'>GitHub</span>
				</button>
			</div>
		</div>
	)
}

export default SocialMedia
