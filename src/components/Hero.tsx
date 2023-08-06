import Image from "next/image"
import Link from "next/link"

export default function Hero() {
 
  return (
		<section
        id="home"
        className="relative min-h-screen sm:min-h-[80vh] text-gray-100 bg-gradient-to-r from-blue-600 sm:from-blue-800 to-blue-800 sm:via-blue-600 sm:to-blue-800 grid place-items-center pt-[48px]"
      >
        <article className="grid sm:grid-cols-2 items-center py-12 max-w-[800px] mx-auto min-h-screen px-2 sm:px-0">
          <div className="mb-8">
            <p className="text-3xl text-left mb-2">Mark O&apos;Connor</p>
            <p className="text-5xl font-bold mb-8">Full Stack Developer</p>
            <h1 className="text-2xl mb-8">
              I build solutions to complex problems and I&apos;m inspired by helping people live better.
            </h1>
            <div className="flex gap-2 relative -left-4">
            <Link href="https://www.linkedin.com/in/mark-o-connor-6a5382225/" target="_blank" rel="noreferrer noopener">
              <i className="flex items-center overflow-auto fa-2xl w-full aspect-square p-4 rounded-full fa-brands fa-linkedin-in hover:text-blue-800 hover:bg-white ease-in-out duration-200"></i>
            </Link>
            <Link href="https://github.com/markoco14" target="_blank" rel="noreferrer noopener">
              <i className="flex items-center overflow-auto fa-2xl w-full aspect-square p-4 rounded-full fa-brands fa-github hover:text-blue-800 hover:bg-white ease-in-out duration-200"></i>
            </Link>
            <Link href="mailto:mark.oconnor14@gmail.com" target="_blank" rel="noreferrer noopener">
              <i className="flex items-center overflow-auto fa-2xl w-full aspect-square p-4 rounded-full fa-regular fa-envelope hover:text-blue-800 hover:bg-white ease-in-out duration-200"></i>
            </Link>
          </div>
          </div>
          <div className="mx-auto">
            <Image 
              src="/images/profiles/me_cropped.jpg"
              alt="A profile photo of Mark. The developer of the site."
              width={250}
              height={250}
              className="rounded-full"
            />
          </div>
        </article>
      </section>
  )
}
