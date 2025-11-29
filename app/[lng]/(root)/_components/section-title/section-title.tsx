import { SectionTitleProps } from '../props'

function SectionTitle({ title, subtitle, ...props }: SectionTitleProps) {
	return (
		<div {...props}>
			<h1 className='text-3xl'>{title}</h1>
			<p className='mt-1 opacity-80'>{subtitle}</p>
		</div>
	)
}

export default SectionTitle
