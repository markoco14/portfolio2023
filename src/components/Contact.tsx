import { useInView } from "react-intersection-observer";
import EmailForm from "./EmailForm";

const options = {
  threshold: 0.25,
};

export default function Hero() {
  const { ref: headerRef, inView: headerInView, entry: headerEntry } = useInView(options);
  const { ref: emailFormRef, inView: emailFormInView, entry: emailFormEntry } = useInView(options);
  
 
  return (
    <section
      id="contact"
      className="mix-h-screen text-blue-100 bg-gradient-to-r from-blue-500 to-blue-600 sm:via-blue-600 sm:to-blue-500"
    >
      <article className="min-h-1/2 max-w-[500px] mx-auto py-24 flex flex-col gap-16 px-2 sm:px-0">
        <h2 ref={headerRef} className={`${headerInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"} ease-in-out duration-300 text-5xl font-bold`}>
          Contact Me
        </h2>
        <div ref={emailFormRef} className={`${emailFormInView ? "opacity-100 scale-100" : "opacity-0 scale-50"} ease-in-out duration-500`}>
          <EmailForm />
        </div>
      </article>
    </section>
  );
}
