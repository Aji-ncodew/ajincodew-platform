import podcastsData from '@/data/podcastsData'
import PodcastCard from '@/components/PodcastCard'

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Podcasts
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Showcase all AJI NDWIW podcast episodes
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {podcastsData.map((d) => (
              <PodcastCard
                key={d.title}
                title={d.title}
                description={
                  d.description.length > 50 ? `${d.description.slice(0, 50)}...` : d.description
                }
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
