'use client'

import { StarRating as StarRatingType } from '@/types'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'

export default function StarRating({
	value,
	count = 5,
	size = 20,
	activeColor = '#e59819',
	inactiveColor = '#ccc',
}: StarRatingType) {
	return (
		<div style={{ display: 'flex', gap: '3px' }}>
			{Array(count)
				.fill(0)
				.map((_, i) => {
					const starValue = i + 1

					if (value >= starValue) {
						// full star
						return <FaStar key={i} size={size} color={activeColor} />
					} else if (value + 0.5 >= starValue) {
						// half star
						return <FaStarHalfAlt key={i} size={size} color={activeColor} />
					} else {
						// empty star
						return <FaRegStar key={i} size={size} color={inactiveColor} />
					}
				})}
		</div>
	)
}
