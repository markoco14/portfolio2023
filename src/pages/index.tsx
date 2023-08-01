import EmailForm from '@/components/EmailForm';
import Image from 'next/image'
import Link from 'next/link';

type Project = {
  color: string;
  hoverTextColor: string;
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

const Projects = ({ projects }: { projects: Project[] }) => {

  return (
    <section id="projects" className='py-24 min-h-screen max-w-[800px] mx-auto'>
      <h2 className="text-5xl text-bold mb-16">Projects</h2>
      <div className='grid px-2 sm:grid-cols-2  md:grid-cols-3 gap-4'>
      {projects.map((project: Project, index: number) => (
        <article 
          key={index} 
          className='relative w-full aspect-square grid bg-black-50 rounded-xl hover:cursor-pointer'
          onClick={() => {
            console.log('learning more about:', project)
          }}
        >
            <h3 className={`text-3xl text-bold z-10 w-full text-white ${project.hoverTextColor} bg-black/70 hover:bg-black/10 rounded-xl py-2 px-2`}>{project.heading}</h3>
            <div className={`absolute w-full aspect-square`}>
              <Image 
                src={project.image.src}
                alt={project.image.alt}
                fill={true}
                objectFit='cover'
                className='rounded-xl'
              />
            </div>
        </article>
        ))}
     </div>
    </section>
  );
}

export default function Home() {
  const projects: Project[] = [
    {
      color: "",
      hoverTextColor: "hover:text-black",
      heading: "Cram School Cloud",
      description: "A school management application that lets Taiwan's local English language schools manage their student data",
      techStack: "",
      image: {
        src: "/images/csc1.png",
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
      hoverTextColor: "text-white",
      heading: "Hao Hao Sound",
      description: " A sound library application that lets users listen to short sounds perfect for any situation.",
      techStack: "",
      image: {
        src: "/images/hhs1.png",
        alt: "Hao Hao Sound hero section image",
      },
      codeLink: {
        fullstack: 'https://github.com/markoco14/haohaosound',
      },
      siteLink: 'https://www.haohaosound.com/'
    },
    {
      color: "bg-green-500",
      hoverTextColor: "hover:text-black",
      heading: "Expensave",
      description: "An expense tracket application that lets users track their income, budgets, and daily spending.",
      techStack: "",
      image: {
        src: "/images/exp1.png",
        alt: "Expensave hero section image",
      },
      codeLink: {
        fullstack: 'https://github.com/markoco14/expense-tracker',
      },
      siteLink: 'https://mymoneybags.herokuapp.com/'
    },
    {
      color: "",
      hoverTextColor: "hover:text-black",
      heading: "Scriptt",
      description: "A dialogue writer application that lets English teachers create dialgoues for their English classes.",
      techStack: "",
      image: {
        src: "/images/sdw1.png",
        alt: "Scriptt hero section image",
      },
      
      codeLink: {
        fullstack: 'https://github.com/markoco14/dialogue-writer-app'
      },
      siteLink: 'https://markoco14.github.io/dialogue-writer-app/'
    },
    {
      color: "bg-slate-700",
      hoverTextColor: "hover:text-black",
      heading: "Taiwan Income Tax Calculator",
      description: "A tax calculator that lets foreigners check their taxes and income when they move to Taiwan.",
      techStack: "",
      image: {
        src: "/images/tax1.png",
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
        className='h-screen text-gray-100 bg-gradient-to-r from-blue-500 to-blue-600 sm:via-blue-600 sm:to-blue-500 grid place-items-center pt-[48px]'
      >
        <article className='max-w-[800px] mx-auto min-h-screen py-32 flex flex-col gap-16 px-2 sm:px-0'>
          <h1 className='text-4xl'>Find problems. <br></br>Build solutions. <br></br>Live better.</h1>
          <p>I&apos;m Mark O&apos;Connor. I&apos;m a Software Engineer located in Taipei, Taiwan. 
            I use Python and JavaScript to build things people need.
          </p>
        </article>
      </section>
      <Projects projects={projects}/>
      <section 
        id="contact" 
        className='mix-h-screen text-blue-100 bg-gradient-to-r from-blue-500 to-blue-600 sm:via-blue-600 sm:to-blue-500'
      >
        <article className='min-h-1/2 max-w-[500px] mx-auto min-h-screen py-24 flex flex-col gap-16 px-2 sm:px-0'>
          <h2 className='text-5xl font-bold'>Contact Me</h2>
          <EmailForm />
        </article>
      </section>

      <footer className='bg-blue-800 text-white min-h-[300px]'>
        <p>this is the footer</p>
      </footer>
    </main>
  )
}
