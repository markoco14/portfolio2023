export default function LGAbout() {

	return (
		<>
			<article className="hidden sm:flex flex-col sm:items-center mb-4 sm:mb-0">
				<h3 className="text-blue-700 text-xl sm:text-center mb-2">
					Frontend Developer
				</h3>
				<p className="mb-4 sm:text-center">I like to make complex interactions look and feel simple.</p>
				<h4 className="text-blue-700 mb-2">Languages I speak:</h4>
				<p className="whitespace-normal sm:text-center mb-4">HTML | CSS | JavaScript</p>
				<h4 className="text-blue-700 mb-2">Tools of the Trade:</h4>
				<ul className="flex flex-col gap-1">
					<li>ReactJS</li>
					<li>NextJS</li>
					<li>MirageJS</li>
					<li>AntD</li>
					<li>AG Grid</li>
					<li>Tailwind CSS</li>
					<li>Bootstrap</li>
					<li>Material UI</li>
					<li>Headless UI</li>
				</ul>
			</article>
			<article className="hidden sm:flex flex-col sm:items-center mb-4 sm:mb-0">
				<h3 className="text-blue-700 text-xl sm:text-center mb-2">
					Backend Developer
				</h3>
				<p className="mb-4 sm:text-center">I like to dream up database schemas and improve performance.</p>
				<h4 className="text-blue-700 mb-2">Languages I speak:</h4>
				<p className="whitespace-normal sm:text-center mb-4">PHP | Python | MySQL | PostgreSQL | NoSQL</p>
				<h4 className="text-blue-700 mb-2">Tools of the Trade:</h4>
				<ul className="flex flex-col gap-1">
					<li>Git</li>
					<li>AWS</li>
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
		</>
	);
}