import Image from "next/image";
import Link from "next/link";
import { InView, useInView } from "react-intersection-observer";

const options = {
  threshold: 0.25,
};

export default function Hero() {
  const { ref, inView, entry } = useInView(options);
  return (
    <section
      ref={ref}
      id="home"
      className={`relative min-h-screen sm:min-h-[80vh] text-gray-900 bg-blue-100 sm:via-blue-600 sm:to-blue-800 grid place-items-center pt-[48px]`}
    >
      <article
        className={`${
          inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        } duration-500 ease-in-out flex flex-col text-center gap-4 justify-center py-12 max-w-[800px] mx-auto min-h-screen px-2 sm:px-0`}
      >
        <div className="flex flex-col gap-2 mb-8">
          <p className="text-5xl font-bold">Full Stack Developer</p>
          <p className="text-3xl text-blue-900">Mark O&apos;Connor</p>
          <div className="mb-6 w-full flex gap-2 relative mx-auto justify-center align-center  place-items-center items-center">
            <Link
              href="https://www.linkedin.com/in/mark-o-connor-6a5382225/"
              target="_blank"
              rel="noreferrer noopener"
              className="grid place-content-center h-16 group aspect-square hover:bg-white ease-in-out duration-200 rounded-full"
            >
              <i className="grid place-content-center overflow-auto fa-2xl  p-4 rounded-full fa-brands fa-linkedin-in group-hover:text-blue-800 ease-in-out duration-300"></i>
            </Link>
            <Link
              href="https://github.com/markoco14"
              target="_blank"
              rel="noreferrer noopener"
              className="grid place-content-center h-16 group aspect-square hover:bg-white ease-in-out duration-200 rounded-full"
            >
              <i className="grid place-content-center  overflow-auto fa-2xl p-4 rounded-full fa-brands fa-github hover:text-blue-800 ease-in-out duration-300"></i>
            </Link>
            <Link
              href="mailto:mark.oconnor14@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
              className="grid place-content-center h-16 group aspect-square hover:bg-white ease-in-out duration-200 rounded-full"
            >
              <i className="grid place-content-center  overflow-auto fa-2xl p-4 rounded-full fa-regular fa-envelope hover:text-blue-800 ease-in-out duration-300"></i>
            </Link>
          </div>
          <h1 className="text-2xl">
            I build solutions to complex problems and I&apos;m inspired by
            helping people live better.
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
  );
}
