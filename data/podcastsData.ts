interface Podcast {
  id: string
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const coursesData: Podcast[] = [
  {
    id: 'software-engineering-course',
    title: 'Software Engineering Fundamentals',
    description: `Learn the core principles of software engineering, including design patterns, 
      development methodologies, and industry best practices to build reliable and scalable software.`,
    imgSrc: '/static/images/youtube/NEXTJS.jpg',
    href: '/podcasts/software-engineering-course',
  },
  {
    id: 'graphics-web-designer-course',
    title: 'Graphics/Web Designer Course',
    description: `Master the art of visual communication and web design, covering essential tools, 
      techniques, and trends to create stunning user interfaces and experiences.`,
    imgSrc: '/static/images/youtube/CLOUD-COMPUTING.jpg',
    href: '/podcasts/graphics-web-designer-course',
  },
  {
    id: 'frontend-developer-course',
    title: 'Frontend Developer Course',
    description: `Dive into the world of frontend development by learning HTML, CSS, JavaScript, and 
      modern frameworks like React, empowering you to create dynamic and responsive web applications.`,
    imgSrc: '/static/images/youtube/devops.jpg',
    href: '/podcasts/frontend-developer-course',
  },
  {
    id: 'backend-developer-course',
    title: 'Backend Developer Course',
    description: `Explore backend development with technologies like Node.js, databases, APIs, and 
      server-side programming to build robust and efficient systems.`,
    imgSrc: '/static/images/youtube/MICROSERVICS.jpg',
    href: '/podcasts/backend-developer-course',
  },
  {
    id: 'devops-cloud-course',
    title: 'DevOps & Cloud Course',
    description: `Gain expertise in DevOps practices and cloud platforms, learning CI/CD pipelines, 
      containerization, and infrastructure management to streamline software delivery.`,
    imgSrc: '/static/images/youtube/SOFTWARE-ENGINIERING.jpg',
    href: '/podcasts/devops-cloud-course',
  },
  {
    id: 'cybersecurity-course',
    title: 'Cybersecurity',
    description: `Learn the foundations of cybersecurity, including threat detection, risk management, 
      and securing networks and applications against cyber threats.`,
    imgSrc: '/static/images/youtube/CYBERSECURITY-IN-MOROCCO-1.jpg',
    href: '/podcasts/cybersecurity-course',
  },
  {
    id: 'cybersecurity-course',
    title: 'Cybersecurity',
    description: `Learn the foundations of cybersecurity, including threat detection, risk management, 
        and securing networks and applications against cyber threats.`,
    imgSrc: '/static/images/youtube/CYBERSECURITY-IN-MOROCCO-2.jpg',
    href: '/podcasts/cybersecurity-course',
  },
  {
    id: 'cybersecurity-course',
    title: 'Cybersecurity',
    description: `Learn the foundations of cybersecurity, including threat detection, risk management, 
        and securing networks and applications against cyber threats.`,
    imgSrc: '/static/images/youtube/CYBERSECURITY-IN-USA.jpg',
    href: '/podcasts/cybersecurity-course',
  },
  {
    id: 'cybersecurity-course',
    title: 'Cybersecurity',
    description: `Learn the foundations of cybersecurity, including threat detection, risk management, 
        and securing networks and applications against cyber threats.`,
    imgSrc: '/static/images/youtube/HR-INTERVIES.jpg',
    href: '/podcasts/cybersecurity-course',
  },
  {
    id: 'cybersecurity-course',
    title: 'Cybersecurity',
    description: `Learn the foundations of cybersecurity, including threat detection, risk management, 
        and securing networks and applications against cyber threats.`,
    imgSrc: '/static/images/youtube/SAAS.jpg',
    href: '/podcasts/cybersecurity-course',
  },
]

export default coursesData
