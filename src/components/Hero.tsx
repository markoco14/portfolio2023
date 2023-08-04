export default function Hero() {
 
  return (
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
  )
}
