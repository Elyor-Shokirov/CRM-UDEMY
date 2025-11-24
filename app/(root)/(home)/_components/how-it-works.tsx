import { OnlineTraningData } from '@/config/constants'
import SectionTitle from '../../_components/section-title/section-title'

function HowItWorks() {
	return (
		<div>
			<div className='justify-center flex text-center'>
				<SectionTitle
					title='How it works?'
					subtitle='10,000+ unique online course list designs'
				/>
			</div>
			<div className='grid grid-cols-5 items-center gap-4 mt-7'>
				{OnlineTraningData.map((item, idx) => {
					const odd = idx % 2
					return (
						<div key={idx}>
							{!odd ? (
								<div className='flex justify-center items-center flex-col gap-2'>
									<div className='bg-gray-600 w-[100px] h-[100px] items-center flex justify-center rounded-full'>
										{<item.icon />}
									</div>
									<div>{item.title}</div>
								</div>
							) : (
								<div className='justify-center'>
									{item.icon && <item.icon />}
								</div>
							)}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default HowItWorks
