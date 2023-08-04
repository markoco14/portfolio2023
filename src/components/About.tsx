import LGAbout from "./LGAbout";
import MobileAbout from "./MobileAbout";

export default function About() {
 
  return (
		<section id="about" className="min-h-screen">
			<div className="bg-slate-900 text-white min-h-[75vh] grid place-items-center">
				<div className="max-w-[600px] mb-24 flex flex-col gap-8 px-4 sm:px-0">
					<p>Hi, I&apos;m Mark. Nice to meet you.</p>
					<p>I&apos;ve been programming for more than 2.5 years. 
						I&apos;m passionate about both process and result. 
						I find pain-points in my jobs and daily experiences and set out to build solutions.
						On the Frontend, I focus on functionality and creating a smooth, interactive user experience. 
						On the Backend, I find joy in designing database schemas and improving API performance.
					</p>
				</div>
			</div>
			<div className="relative bg-white h-[60vh] px-4">
				<div className="relative -top-[20vh] max-w-[800px] bg-white min-h-[80vh] border mx-auto sm:grid sm:grid-cols-2 p-4 rounded-xl shadow-lg">
					<MobileAbout />
					<LGAbout />
				</div>
			</div>
		</section>
  )
}
