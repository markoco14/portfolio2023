import { useState } from "react";

export default function MobileAbout() {
	const [isFrontend, setIsFrontend] = useState<boolean>(true);
 
  return (
			<>
				<div className="sm:hidden mb-4 flex justify-start gap-4">
					<button 
					className={`${isFrontend ? 'underline underline-offset-2 decoration-2 decoration-blue-700' : ''}`}
					onClick={() => setIsFrontend(true)}>Frontend</button>
					<button 
					className={`${isFrontend ? '' : 'underline underline-offset-2 decoration-2 decoration-blue-700'}`}
					onClick={() => setIsFrontend(false)}>Backend</button>
				</div>
				{isFrontend ? (
					<article className="sm:hidden">
						
					<h3 className="text-blue-700 text-xl sm:text-center mb-2">
						Frontend Developer
					</h3>
					<p className="mb-6">I like to make complex interactions look and feel simple.</p>
					<h4 className="text-blue-700 mb-2">Languages</h4>
					<p className="whitespace-normal sm:text-center mb-4">HTML | CSS | JavaScript</p>
					<h4 className="text-blue-700 mb-2">Tools</h4>
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
				</article>
				) : (
					<article className="sm:hidden">
					
					<h3 className="text-blue-700 text-xl sm:text-center mb-2">
						Backend Developer
					</h3>
					<p className="mb-6">I like to dream up database schemas and improve performance.</p>
					<h4 className="text-blue-700 mb-2">Languages</h4>
					<p className="whitespace-normal sm:text-center mb-4">PHP | Python | MySQL | PostgreSQL | NoSQL</p>
					<h4 className="text-blue-700 mb-2">Tools</h4>
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
				</article>
				)}				
			</>
  )
}
