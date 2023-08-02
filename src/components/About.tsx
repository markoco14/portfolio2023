export default function About() {
 
  return (
		<section id="about" className="min-h-screen">
			<div className="bg-slate-900 text-white min-h-[75vh] grid place-items-center">
				<div className="max-w-[600px] mb-24 flex flex-col gap-8">
					<p>Hi, I&apos;m Mark. Nice to meet you.</p>
					<p>Since beginning my journey as a freelance designer over 11 years ago, I&apos;ve done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I&apos;m quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
				</div>
			</div>
			<div className="relative bg-white h-[60vh] px-4 items-baseline">
				<div className="relative -top-[20vh] max-w-[800px] bg-white min-h-[80vh] border mx-auto grid sm:grid-cols-2 p-4 rounded-t-xl">
					<article>
						<h3>
							Frontend Developer
						</h3>
					</article>
					<article>
						<h3>
							Backend Developer
						</h3>
					</article>
				</div>
			</div>
		</section>
  )
}
