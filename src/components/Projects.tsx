import Image from "next/image";
import Link from "next/link";

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
		buttonText: string;
  }
  codeLink: {
    fullstack?: string;
    backend?: string;
    frontend?: string;
  };
  siteLink: string;
};

export default function Projects() {
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
        src: "/images/csc/csc4.png",
        alt: "Cram school cloud section image",
      },
      logo: {
        src: '/images/csc/csc3.png',
        alt: 'The logo for Cram School Cloud'
      },
       styles: {
        gradient: true,
        direction: 'bg-gradient-to-r',
        from: 'from-[#035dce]',
        to: 'to-[#046df0]',
        overlayOpacity: 'opacity-60',
        descriptionBg: 'bg-[#03469c]',
				buttonText: 'text-[#03469c]'
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
        src: "/images/hhs/hhs2.png",
        alt: "Hao Hao Sound hero section image",
      },
      logo: {
        src: '/images/hhs/hhs1.png',
        alt: 'The logo for Hao Hao Sound'
      },
       styles: {
        gradient: true,
        direction: 'bg-gradient-to-r',
        from: 'from-[#ad1962]',
        to: 'to-[#bf1b6c]',
        overlayOpacity: 'opacity-60',
        descriptionBg: 'bg-[#bf1b6c]',
				buttonText: 'text-[#bf1b6c]'
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
        src: '/images/expensave/exp1.png',
        alt: 'The logo for Expensave'
      },
      styles: {
        gradient: true,
        direction: 'bg-gradient-to-r',
        from: 'from-[#1C7436]',
        to: 'to-[#F4BC33]',
        overlayOpacity: 'opacity-70',
        descriptionBg: 'bg-[#1C7436]',
				buttonText: 'text-[#1C7436]'
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
        overlayOpacity: 'opacity-60',
        descriptionBg: 'bg-[#1ba939]',
				buttonText: 'text-[#1ba939]'
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
        alt: 'The logo for Taiwan Tax and Info Super Simple.'
      },
       styles: {
        gradient: false,
        direction: 'bg-gradient-to-r',
        from: 'from-[#172121]',
        to: 'to-[#283a3a]',
        bg: 'bg-[#002045]',
        overlayOpacity: 'opacity-100',
        descriptionBg: 'bg-[#002045]',
				buttonText: 'text-[#002045]'
      },
      codeLink: {
        fullstack: "https://github.com/markoco14/tiss",
      },
      siteLink: "https://markoco14.github.io/tiss/",
    },
  ];
 
  return (
		<section id="projects" className="px-2 sm:px-4 py-24 min-h-screen max-w-[1000px] mx-auto">
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
										className='rounded underline underline-offset-4 decoration-2 decoration-white hover:scale-110 text-white ease-in-out duration-200'
									>
										Frontend
									</Link>
								)} 
								{project?.codeLink.backend && (
									<Link 
										href={project?.codeLink.backend}
										rel="noopener noreferrer"
										target="_blank"
										className='rounded underline underline-offset-4 decoration-2 decoration-white hover:scale-110 text-white ease-in-out duration-200'
									>
										Backend
									</Link>
								)}
								{project?.codeLink.fullstack && (
									<Link 
										href={project?.codeLink.fullstack}
										rel="noopener noreferrer"
										target="_blank"
										className='rounded underline underline-offset-4 decoration-2 decoration-white hover:scale-110 text-white ease-in-out duration-200'
									>
										Code
									</Link>
								)}
								{project?.siteLink && (
									<Link 
										href={project?.siteLink}
										rel="noopener noreferrer"
										target="_blank"
										className={`rounded bg-white ${project.styles.buttonText} px-1 hover:scale-110 ease-in-out duration-200`}
									>
										See Website
									</Link>
								)}
								</div>
              </div>
          </article>
        ))}
      </div>
    </section>
  );
}