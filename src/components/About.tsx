import { useInView } from "react-intersection-observer";
import LGAbout from "./LGAbout";
import MobileAbout from "./MobileAbout";

const options = {
  threshold: 0.25,
};

const overlapOptions = {
	threshold: 0.25,
}

export default function About() {
 const { ref: ref, inView: inView, entry: entry } = useInView(options);
 const { ref: overlapRef, inView: overlapInView, entry: overlapEntry } = useInView(overlapOptions);

  return (
    <section id="about" className="min-h-screen">
      <div
        ref={ref}
        className={`bg-slate-900 text-white min-h-[75vh] grid place-items-center pt-[72px] pb-24`}
      >
        <div
          className={`${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          } ease-in-out duration-500 max-w-[600px] mb-24 flex flex-col gap-8 px-4 sm:px-0`}
        >
          <p className="text-3xl">Hi, I&apos;m Mark. Nice to meet you.</p>
          <p className="text-lg">
            I was drawn to programming by dreams of the things I could create.
            I&apos;m passionate about turning ideas into reality. I love writing
            clean code but the real joy is creating beautiful products that
            people love using.
          </p>
          <p className="text-lg">
            On the Frontend, I focus on functionality and creating a smooth,
            interactive user experience. The user interface brings the senses to
            life.
          </p>
          <p className="text-lg">
            On the Backend, I find joy in designing database schemas and
            improving API performance. The server is the magic that holds
            everything together.
          </p>
        </div>
      </div>
      <div className="relative bg-white h-[60vh] px-4">
        <div
          ref={overlapRef}
          className={`${
            overlapInView ? "opacity-100" : "opacity-0 translate-y-16"
          } ease-in-out duration-700 relative -top-24 max-w-[800px] bg-white border mx-auto sm:grid sm:grid-cols-2 p-4 rounded-xl shadow-lg`}
        >
          <MobileAbout />
          <LGAbout />
        </div>
      </div>
    </section>
  );
}
