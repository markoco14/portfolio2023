import About from "@/components/About";
import EmailForm from "@/components/EmailForm";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Project = {
  color: string;
  hoverTextColor: string;
  heading: string;
  description: string;
  techStack: string;
  bgImage: {
    image: boolean;
    src: string;
    alt: string;
  };
  logo: {
    src: string;
    alt: string;
  };
  styles: {
    gradient: boolean;
    direction?: string;
    from?: string;
    to?: string;
    bg?: string;
    overlayOpacity?: string;
    descriptionBg?: string;
  }
  codeLink: {
    fullstack?: string;
    backend?: string;
    frontend?: string;
  };
  siteLink: string;
};

const Projects = ({
  projects,
  setIsShow,
  setCurrentProject,
}: {
  projects: Project[];
  setIsShow: Function;
  setCurrentProject: Function;
}) => {
  return (
    <section id="projects" className="px-2 sm:px-0 py-24 min-h-screen max-w-[1000px] mx-auto">
      <h2 className="text-5xl text-bold mb-16">Projects</h2>
      <div className="relative grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project: Project, index: number) => (
          <article
            key={index}
            className="relative aspect-square group ease-in-out duration-300"
          > 
            <div className="absolute top-0 left-0 w-full aspect-square group-hover:opacity-0 ease-in-out duration-300">
              <div className="z-1 absolute top-0 left-0 w-full aspect-square flex flex-col gap-2 justify-center items-center">
                {/* LOGO */}
                <div className="relative z-10 opacity-100 flex flex-col gap-2 justify-center items-center scale-90 group-hover:scale-100 ease-in-out duration-300 ">
                  <Image
                    src={project.logo.src}
                    alt={project.logo.alt}
                    width={300}
                    height={150}
                    className="w-full rounded-xl"
                  />
                </div>
                {/* BACKGROUND IMAGE */}
                {project.bgImage.image && (
                  <div className={`opacity-20`}>
                    <Image
                      src={project.bgImage.src}
                      alt={project.bgImage.alt}
                      fill={true}
                      objectFit="cover"
                      className="rounded-xl"
                    />
                  </div>
                )}
                {/* OVERLAY */}
                <div className={`z-2 absolute top-0 left-0 w-full aspect-square ${project.styles.overlayOpacity} ${project.styles.gradient ? `${project.styles.direction} ${project.styles.from} ${project.styles.to}` : `${project.styles.bg}`} rounded`}>
                </div>
              </div>
            </div>
            <div className={`rounded z-1 p-4 ${project.styles.descriptionBg} flex flex-col justify-evenly text-white absolute top-0 left-0 w-full aspect-square opacity-0 group-hover:opacity-100 ease-in-out duration-300`}>
              <p>{project.description}</p>
              <p>{project.techStack}</p>
              <div className="flex justify-center gap-8">
                {project?.codeLink.frontend && (
                <Link 
                  href={project?.codeLink.frontend}
                  rel="noopener noreferrer"
                  target="_blank"
                  className='p-2 rounded underline underline-offset-4 decoration-2 decoration-green-500 hover:bg-green-500 hover:decoration-white hover:text-white'
                >
                  Frontend
                </Link>
              )} 
              {project?.codeLink.backend && (
                <Link 
                  href={project?.codeLink.backend}
                  rel="noopener noreferrer"
                  target="_blank"
                  className='p-2 rounded underline underline-offset-4 decoration-2 decoration-orange-500 hover:bg-orange-500 hover:decoration-white hover:text-white'
                >
                  Backend
                </Link>
              )}
              {project?.codeLink.fullstack && (
                <Link 
                  href={project?.codeLink.fullstack}
                  rel="noopener noreferrer"
                  target="_blank"
                  className='p-2 rounded underline underline-offset-4 decoration-2 decoration-green-500 hover:bg-green-500 hover:decoration-white hover:text-white'
                >
                  Code
                </Link>
              )}
              {project?.siteLink && (
                <Link 
                  href={project?.siteLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  className='p-2 rounded bg-blue-500 hover:bg-blue-700 text-white'
                >
                  Website
                </Link>
              )}
                {/* <Link 
                  className="bg-blue-500 px-4 py-2"
                  href={`${project.siteLink}`}
                >
                  Visit Site
                </Link> */}
              </div>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const Project = ({currentProject, setIsShow, setCurrentProject}: {currentProject: Project | undefined, setIsShow: Function, setCurrentProject: Function}) => {
  return (
    <Dialog
          onClose={() => {
            setIsShow(false);
          }}
          className="z-10 fixed inset-0 flex items-center justify-center max-w-[600px] mx-auto p-2 py-8"
        >
          <div className="z-10 fixed inset-0 bg-black/50" />
          <Dialog.Panel className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 z-10 flex flex-col justify-evenly gap-4 h-[80vh] sm:max-h-[80vh]">
            <Dialog.Title className={'text-3xl sm:text-4xl'}>{currentProject?.heading}</Dialog.Title>
            <div className="flex flex-col gap-2">
              <p className="text-md uppercase text-gray-500">About</p>
              <p>{currentProject?.description}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-md uppercase text-gray-500">Tech Stack</p>
              <p>{currentProject?.techStack}</p>
            </div>
            <div className="flex gap-4">
              {currentProject?.codeLink.frontend && (
                <Link 
                  href={currentProject?.codeLink.frontend}
                  rel="noopener noreferrer"
                  target="_blank"
                  className='p-2 rounded underline underline-offset-4 decoration-2 decoration-green-500 hover:bg-green-500 hover:decoration-white hover:text-white'
                >
                  Frontend
                </Link>
              )} 
              {currentProject?.codeLink.backend && (
                <Link 
                  href={currentProject?.codeLink.backend}
                  rel="noopener noreferrer"
                  target="_blank"
                  className='p-2 rounded underline underline-offset-4 decoration-2 decoration-orange-500 hover:bg-orange-500 hover:decoration-white hover:text-white'
                >
                  Backend
                </Link>
              )}
              {currentProject?.codeLink.fullstack && (
                <Link 
                  href={currentProject?.codeLink.fullstack}
                  rel="noopener noreferrer"
                  target="_blank"
                  className='p-2 rounded underline underline-offset-4 decoration-2 decoration-green-500 hover:bg-green-500 hover:decoration-white hover:text-white'
                >
                  Code
                </Link>
              )}
              {currentProject?.siteLink && (
                <Link 
                  href={currentProject?.siteLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  className='p-2 rounded bg-blue-500 hover:bg-blue-700 text-white'
                >
                  Website
                </Link>
              )}
            </div>
            <div className='sm:flex sm:justify-end'>
              <button
                type="button"
                onClick={() => {
                  setIsShow(false);
                }}
                className="bg-gray-300 text-gray-900 hover:bg-gray-500 hover:text-white px-4 py-1 rounded w-full sm:w-fit"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </Dialog>
  )
}

export default function Home() {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<Project | undefined>(
    undefined
  );

  const projects: Project[] = [
    {
      color: "",
      hoverTextColor: "hover:text-black",
      heading: "Cram School Cloud",
      description:
        "A school management application that lets Taiwan's local English language schools manage their student data",
      techStack: "AWS EC2, Python (Django), NextJS, MySQL (Planet Scale), Tailwind CSS",
      bgImage: {
        image: true,
        src: "/images/expensave/Expensave2.png",
        alt: "Cram school cloud section image",
      },
      logo: {
        src: '/images/expensave/Expensave3.png',
        alt: 'The logo for Expensave'
      },
       styles: {
        gradient: true,
        direction: 'bg-gradient-to-r',
        from: 'from-[#172121]',
        to: 'to-[#283a3a]',
        overlayOpacity: 'opacity-50',
        descriptionBg: 'bg-[#002045]'
      },
      codeLink: {
        frontend: "https://github.com/markoco14/frontend-school-mgmt",
        backend: "https://github.com/markoco14/student-mgmt",
      },
      siteLink: "https://www.cramschoolcloud.com/",
    },
    {
      color: "bg-gray-500",
      hoverTextColor: "text-white",
      heading: "Hao Hao Sound",
      description:
        " A sound library application that lets users listen to short sounds perfect for any situation.",
      techStack: "NextJS, PostgreSQL (Supabase), Tailwind CSS, LocalStorage",
      bgImage: {
        image: true,
        src: "/images/expensave/Expensave2.png",
        alt: "Hao Hao Sound hero section image",
      },
      logo: {
        src: '/images/expensave/Expensave3.png',
        alt: 'The logo for Expensave'
      },
       styles: {
        gradient: true,
        direction: 'bg-gradient-to-r',
        from: 'from-[#172121]',
        to: 'to-[#283a3a]',
        overlayOpacity: 'opacity-50',
        descriptionBg: 'bg-[#002045]'
      },
      codeLink: {
        fullstack: "https://github.com/markoco14/haohaosound",
      },
      siteLink: "https://www.haohaosound.com/",
    },
    {
      color: "bg-green-500",
      hoverTextColor: "hover:text-black",
      heading: "Expensave",
      description:
        "An expense tracket application that lets users track their income, budgets, and daily spending.",
      techStack: "Heroku, PHP (Laravel), ReactJS, CSS",
      bgImage: {
        image: true,
        src: "/images/expensave/Expensave2.png",
        alt: "Expensave hero section image",
      },
      logo: {
        src: '/images/expensave/Expensave3.png',
        alt: 'The logo for Expensave'
      },
      styles: {
        gradient: true,
        direction: 'bg-gradient-to-r',
        from: 'from-[#172121]',
        to: 'to-[#283a3a]',
        overlayOpacity: 'opacity-50',
        descriptionBg: 'bg-[#172121]'
      },
      codeLink: {
        fullstack: "https://github.com/markoco14/expense-tracker",
      },
      siteLink: "https://mymoneybags.herokuapp.com/",
    },
    {
      color: "",
      hoverTextColor: "hover:text-black",
      heading: "Scriptt",
      description:
        "A dialogue writer application that lets English teachers create dialgoues for their English classes.",
      techStack: "ReactJS, CSS, LocalStorage",
      bgImage: {
        image: true,
        src: "/images/scriptt/scr3.png",
        alt: "Scriptt hero section image",
      },
      logo: {
        src: '/images/scriptt/scr1.png',
        alt: 'The logo for Scriptt'
      },
       styles: {
        gradient: true,
        direction: 'bg-gradient-to-r',
        from: 'from-[#0e551d]',
        to: 'to-[#147d2a]',
        overlayOpacity: 'opacity-75',
        descriptionBg: 'bg-[#147d2a]'
      },
      codeLink: {
        fullstack: "https://github.com/markoco14/dialogue-writer-app",
      },
      siteLink: "https://markoco14.github.io/dialogue-writer-app/",
    },
    {
      color: "bg-slate-700",
      hoverTextColor: "hover:text-black",
      heading: "Taiwan Income Tax Calculator",
      description:
        "A tax calculator that lets foreigners check their taxes and income when they move to Taiwan.",
      techStack: "HTML, CSS, JavaScript",
      bgImage: {
        image: false,
        src: "/images/expensave/Expensave2.png",
        alt: "Tiss hero section image",
      },
      logo: {
        src: '/images/tiss/tiss2.png',
        alt: 'The logo for TISS Taiwan'
      },
       styles: {
        gradient: false,
        direction: 'bg-gradient-to-r',
        from: 'from-[#172121]',
        to: 'to-[#283a3a]',
        bg: 'bg-[#002045]',
        overlayOpacity: 'opacity-100',
        descriptionBg: 'bg-[#002045]'
      },
      codeLink: {
        fullstack: "https://github.com/markoco14/tiss",
      },
      siteLink: "https://markoco14.github.io/tiss/",
    },
  ];

  return (
    <main>
      <nav className="z-10 text-white px-2 bg-black/50 flex justify-end items-center gap-4 w-full fixed top-0 left-0 h-[48px]">
        <Link href="#home">Home</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#about">About</Link>
        <Link href="#contact">Contact</Link>
      </nav>
      <section
        id="home"
        className="h-screen text-gray-100 bg-gradient-to-r from-blue-500 to-blue-600 sm:via-blue-600 sm:to-blue-500 grid place-items-center pt-[48px]"
      >
        <article className="max-w-[800px] mx-auto min-h-screen py-24 flex flex-col gap-16 px-2 sm:px-0">
          <h1 className="text-4xl">
            Find problems. <br></br>Build solutions. <br></br>Live better.
          </h1>
          <p>
            I&apos;m Mark O&apos;Connor. I&apos;m a Software Engineer located in
            Taipei, Taiwan. I use Python and JavaScript to build things people
            need.
          </p>
        </article>
      </section>
      <Projects
        projects={projects}
        setIsShow={setIsShow}
        setCurrentProject={setCurrentProject}
      />
      <About />
      <section
        id="contact"
        className="mix-h-screen text-blue-100 bg-gradient-to-r from-blue-500 to-blue-600 sm:via-blue-600 sm:to-blue-500"
      >
        <article className="min-h-1/2 max-w-[500px] mx-auto min-h-screen py-24 flex flex-col gap-16 px-2 sm:px-0">
          <h2 className="text-5xl font-bold">Contact Me</h2>
          <EmailForm />
        </article>
      </section>

      <footer className="bg-blue-800 text-white min-h-[300px]">
        <p>this is the footer</p>
      </footer>
      <Transition
        show={isShow}
        enter="transition ease-in duration-100"
        enterFrom="opacity-0 scale-90"
        enterTo="opacity-100 scale-100"
        leave="transition ease-out duration-150"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-90"
      >
        <Project currentProject={currentProject} setIsShow={setIsShow} setCurrentProject={setCurrentProject}/>
      </Transition>
    </main>
  );
}
