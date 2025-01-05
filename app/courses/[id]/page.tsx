import coursesData from '@/data/coursesData'
import { notFound } from 'next/navigation'

export default function CourseDetails({ params }) {
  const { id } = params

  // Find the course with the matching id
  const course = coursesData.find((course) => course.id === id)

  // If no course is found, show a 404 page
  if (!course) {
    notFound()
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <img src={course.imgSrc} alt={course.title} className="my-6 w-full max-w-4xl rounded" />
      <p className="text-lg">{course.description}</p>
      <a href={course.href} className="mt-4 inline-block text-blue-500 hover:underline">
        Learn More
      </a>
    </div>
  )
}
