import { useState } from "react";

export default function MobileAbout() {
	const [isFrontend, setIsFrontend] = useState<boolean>(true);
 
  return (
			<>
				<div className="sm:hidden mb-4 flex justify-evenly">
					<button 
					className={`${isFrontend ? ' bg-blue-700 text-white' : ''} ease-in-out duration-100 w-full border-2 border-r-0 border-blue-700 rounded-l-md py-2`}
					onClick={() => setIsFrontend(true)}>Frontend</button>
					<button 
					className={`${isFrontend ? '' : ' bg-blue-700 text-white'} ease-in-out duration-100 w-full border-2 border-l-0 border-blue-700 rounded-r-md py-2`}
					onClick={() => setIsFrontend(false)}>Backend</button>
				</div>
				{isFrontend ? (
					<article className="sm:hidden">
					
					<div className="mb-4">
						<h3 className="text-blue-700 text-xl sm:text-center mb-2">
							Frontend Developer
						</h3>
						<p >I like to make complex interactions look and feel simple.</p>
					</div>
					<div className="mb-4">
						<h4 className="text-blue-700 text-lg mb-2">Languages</h4>
						<p className="whitespace-normal sm:text-center">HTML | CSS | JavaScript</p>
					</div>
					<div className="mb-4">

						<h4 className="text-blue-700 text-lg mb-2">Tools</h4>
						<ul className="grid grid-cols-2 gap-1">
							<li>ReactJS</li>
							<li>NextJS</li>
							<li>MirageJS</li>
							<li>AntD</li>
							<li>AG Grid</li>
							<li>Tailwind CSS</li>
							<li>Bootstrap</li>
							<li>Material UI</li>
							<li>Headless UI</li>
							<li>Canva</li>
							<li>Coolors</li>
							<li>Figma</li>
						</ul>
					</div>
				</article>
				) : (
					<article className="sm:hidden">
					<div className="mb-4">
						<h3 className="text-blue-700 text-xl sm:text-center mb-2">
							Backend Developer
						</h3>
						<p>I like to dream up database schemas and improve performance.</p>
					</div>
					<div className="mb-4">
						<h4 className="text-blue-700 mb-2 text-lg">Languages</h4>
						<p className="whitespace-normal sm:text-center">PHP | Python | MySQL | PostgreSQL | NoSQL</p>
					</div>
					<div className="mb-4">
						<h4 className="text-blue-700 mb-2 text-lg">Tools</h4>
						<ul className="grid grid-cols-2 gap-1">
							<li>Git</li>
							<li>AWS EC2</li>
							<li>GCP</li>
							<li>Cloud Functions</li>
							<li>Laravel</li>
							<li>Django</li>
							<li>NodeJS</li>
							<li>Docker</li>
							<li>Planet Scale</li>
							<li>Firebase</li>
							<li>Supabase</li>
							<li>Postman</li>
						</ul>
					</div>
				</article>
				)}				
			</>
  )
}
