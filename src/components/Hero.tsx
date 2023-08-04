export default function Hero() {
 
  return (
		<section
        id="home"
        className="h-screen sm:min-h-[80vh] text-gray-100 bg-gradient-to-r from-blue-500 to-blue-600 sm:via-blue-600 sm:to-blue-500 grid place-items-center pt-[48px]"
      >
        <article className="max-w-[800px] mx-auto min-h-[screen] py-24 px-2 sm:px-0">
          <p className="text-5xl font-bold mb-8">Full-stack Developer</p>
          <h1 className="text-2xl mb-16">
            I take problems and build solutions that help others live better.
          </h1>
        </article>
      </section>
  )
}
