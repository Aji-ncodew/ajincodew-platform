import { notFound } from 'next/navigation'
import podcastsData from '@/data/podcastsData'

export default function PodcastDetails({ params }) {
  const { id } = params

  // Find the course with the matching id
  const podcast = podcastsData.find((podcast) => podcast.id === id)

  // If no course is found, show a 404 page
  if (!podcast) {
    notFound()
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold">{podcast.title}</h1>
      <img src={podcast.imgSrc} alt={podcast.title} className="my-6 w-full max-w-4xl rounded" />
      <p className="text-lg">{podcast.description}</p>
      <a href={podcast.href} className="mt-4 inline-block text-blue-500 hover:underline">
        Learn More
      </a>
    </div>
  )
}
