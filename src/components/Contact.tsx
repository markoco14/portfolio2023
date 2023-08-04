import EmailForm from "./EmailForm";

export default function Hero() {
 
  return (
		<section
        id="contact"
        className="mix-h-screen text-blue-100 bg-gradient-to-r from-blue-500 to-blue-600 sm:via-blue-600 sm:to-blue-500"
      >
        <article className="min-h-1/2 max-w-[500px] mx-auto py-24 flex flex-col gap-16 px-2 sm:px-0">
          <h2 className="text-5xl font-bold">Contact Me</h2>
          <EmailForm />
        </article>
      </section>
  )
}
