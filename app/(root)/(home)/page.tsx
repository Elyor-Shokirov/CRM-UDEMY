import Categories from './_components/categories'
import Hero from './_components/hero'
import HowItWorks from './_components/how-it-works'
import Instructors from './_components/instructors'
import Newsletter from './_components/newsletter'
import PopularCourses from './_components/popular-courses'
import Sponsorship from './_components/sponsorship'
import Testimonials from './_components/testimonials'

function HomePage() {
	return (
		<div className='grid gap-4'>
			<Hero />
			<Categories />
			<PopularCourses />
			<HowItWorks />
			<Instructors />
			<Testimonials />
			<Newsletter />
			<Sponsorship />
		</div>
	)
}

export default HomePage
