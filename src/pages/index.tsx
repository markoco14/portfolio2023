import EmailForm from '@/components/EmailForm';
import Image from 'next/image'
import Link from 'next/link';

type Project = {
  color: string;
  heading: string;
  description: string;
  techStack: string;
  image: {
    src: string;
    alt: string;
  },
  codeLink: {
    fullstack?: string;
    backend?: string;
    frontend?: string;
  };
  siteLink: string;
}

const Project = ({ project, index }: { project: Project, index: number }) => {

  return (
    <section className={`relative h-full sm:h-1/2 ${project.color}`}>
      <article className='grid sm:grid-cols-2 max-w-[800px] mx-auto py-32 gap-16 px-2 sm:px-0'>
        <div className={`flex flex-col gap-8 bg-white shadow-xl rounded-xl p-8 ${index % 2 === 0  ? '' : 'sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2'}`}>
          <h2 className='text-2xl'>{project.heading}</h2>
          <p>
            {project.description}
          </p>
          <div>
            {project.codeLink.frontend && (
              <Link 
                href={project.codeLink.frontend}
                rel="noopener noreferrer"
                target="_blank"
                className='p-2 rounded'
              >
                Frontend
              </Link>
            )} 
            {project.codeLink.backend && (
              <Link 
                href={project.codeLink.backend}
                rel="noopener noreferrer"
                target="_blank"
                className='p-2 rounded'
              >
                Backend
              </Link>
            )}
             {project.codeLink.fullstack && (
              <Link 
                href={project.codeLink.fullstack}
                rel="noopener noreferrer"
                target="_blank"
                className='p-2 rounded'
              >
                Code
              </Link>
            )}
            <Link 
              href={project.siteLink}
              rel="noopener noreferrer"
              target="_blank"
              className='p-2 rounded underline underline-offset-2 decoration-2'
            >
              Website
            </Link>
          </div>
        </div>
        <div className={`relative w-full aspect-square grid place-items-center rounded-xl shadow-xl`}>
            <Image 
              src={project.image.src}
              alt={project.image.alt}
              fill={true}
              objectFit='cover'
              className='rounded-xl'
            />
          </div>
      </article>
    </section>
  );
}

export default function Home() {
  const projects: Project[] = [
    {
      color: "",
      heading: "Cram School Cloud",
      description: "A school management application that lets Taiwan's local English language schools manage their student data",
      techStack: "",
      image: {
        src: "/images/cramschoolcloud/cramschool1.png",
        alt: "Cram school cloud section image",
      },
      codeLink: {
        frontend: 'https://github.com/markoco14/frontend-school-mgmt',
        backend: 'https://github.com/markoco14/student-mgmt',
      },
      siteLink: 'https://www.cramschoolcloud.com/'
    },
    {
      color: "bg-gray-500",
      heading: "Hao Hao Sound",
      description: " A sound library application that lets users listen to short sounds perfect for any situation.",
      techStack: "",
      image: {
        src: "/images/haohaosound/haohao1.png",
        alt: "Hao Hao Sound hero section image",
      },
      codeLink: {
        fullstack: 'https://github.com/markoco14/haohaosound',
      },
      siteLink: 'https://www.haohaosound.com/'
    },
    {
      color: "bg-green-500",
      heading: "Expensave",
      description: "An expense tracket application that lets users track their income, budgets, and daily spending.",
      techStack: "",
      image: {
        src: "/images/expensave/expensave1.png",
        alt: "Expensave hero section image",
      },
      codeLink: {
        fullstack: 'https://github.com/markoco14/expense-tracker',
      },
      siteLink: 'https://mymoneybags.herokuapp.com/'
    },
    {
      color: "",
      heading: "Scriptt",
      description: "A dialogue writer application that lets English teachers create dialgoues for their English classes.",
      techStack: "",
      image: {
        src: "/images/scriptt/scriptt2.png",
        alt: "Scriptt hero section image",
      },
      
      codeLink: {
        fullstack: 'https://github.com/markoco14/dialogue-writer-app'
      },
      siteLink: 'https://markoco14.github.io/dialogue-writer-app/'
    },
    {
      color: "bg-slate-700",
      heading: "Taiwan Income Tax Calculator",
      description: "A tax calculator that lets foreigners check their taxes and income when they move to Taiwan.",
      techStack: "",
      image: {
        src: "/images/tiss/tiss3.png",
        alt: "Tiss hero section image",
      },
      codeLink: {
        fullstack: 'https://github.com/markoco14/tiss'
      },
      siteLink: 'https://markoco14.github.io/tiss/'
    }
  ];
  

  return (
    <main>
      <nav className="z-10 text-white px-2 bg-black/50 flex justify-end items-center gap-4 w-full fixed top-0 left-0 h-[48px]">
        <Link href="#home">Home</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </nav>
      <section 
        id="home"
        className='h-screen bg-blue-600 text-gray-100 grid place-items-center pt-[48px]'
      >
        <article className='max-w-[800px] mx-auto min-h-screen py-32 flex flex-col gap-16 px-2 sm:px-0'>
          <h1 className='text-4xl'>Find problems. <br></br>Build solutions. <br></br>Live better.</h1>
          <p>I&apos;m Mark O&apos;Connor. I&apos;m a Software Engineer located in Taipei, Taiwan. 
            I use Python and JavaScript to build things people need.
          </p>
        </article>
      </section>
      <section id="projects">
        {projects.map((project: Project, index: number) => (
          <Project key={index} index={index} project={project}/>
        ))}
      </section>

      <section id="contact" className='bg-blue-900 text-blue-200'>
        <article className='min-h-1/2 max-w-[500px] mx-auto min-h-1/2 py-32 flex flex-col gap-16 px-2 sm:px-0'>
          <h2 className='text-2xl'>Contact Me</h2>
          <EmailForm />
        </article>
      </section>

      <footer>
        <p>this is the footer</p>
      </footer>
    </main>
  )
}
