import Image from "next/image"

export default function Hero() {
 
  return (
		<section
        id="home"
        className="relative min-h-screen sm:min-h-[80vh] text-gray-100 bg-gradient-to-r from-blue-600 sm:from-blue-800 to-blue-800 sm:via-blue-600 sm:to-blue-800 grid place-items-center pt-[48px]"
      >
        <article className="grid sm:grid-cols-2 items-center py-12 max-w-[800px] mx-auto min-h-screen px-2 sm:px-0">
          <div className="mb-8">
            <p className="text-3xl text-left mb-4">Mark O&apos;Connor</p>
            <p className="text-5xl font-bold mb-4">Full Stack Developer</p>
            <h1 className="text-2xl">
              I find problems and build solutions that help others live better.
            </h1>
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
