import Link from "next/link";

export default function Footer() {
 
  return (
		<footer className="px-2 flex flex-col gap-10 items-center bg-blue-800 text-white min-h-[300px] py-24">
			<span>
          <svg width="100" height="100" zoomAndPan="magnify" viewBox="0 0 375 374.999991"  preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g/><clipPath id="8e8979b025"><path d="M 2.402344 2.402344 L 371.402344 2.402344 L 371.402344 371.402344 L 2.402344 371.402344 Z M 2.402344 2.402344 " clipRule="nonzero"/></clipPath><clipPath id="96785fefd9"><path d="M 19.640625 2.402344 L 354.164062 2.402344 C 358.734375 2.402344 363.121094 4.21875 366.355469 7.453125 C 369.585938 10.683594 371.402344 15.070312 371.402344 19.640625 L 371.402344 354.164062 C 371.402344 358.734375 369.585938 363.121094 366.355469 366.355469 C 363.121094 369.585938 358.734375 371.402344 354.164062 371.402344 L 19.640625 371.402344 C 15.070312 371.402344 10.683594 369.585938 7.453125 366.355469 C 4.21875 363.121094 2.402344 358.734375 2.402344 354.164062 L 2.402344 19.640625 C 2.402344 15.070312 4.21875 10.683594 7.453125 7.453125 C 10.683594 4.21875 15.070312 2.402344 19.640625 2.402344 " clipRule="nonzero"/></clipPath></defs><g clipPath="url(#8e8979b025)"><g clipPath="url(#96785fefd9)"><path strokeLinecap="butt" transform="matrix(0.7495, 0, 0, 0.7495, 2.402643, 2.402638)" fill="none" strokeLinejoin="miter" d="M 22.999307 -0.000392811 L 469.328063 -0.000392811 C 475.425877 -0.000392811 481.278737 2.423098 485.594113 6.738474 C 489.904278 11.048639 492.327768 16.901498 492.327768 22.999313 L 492.327768 469.328069 C 492.327768 475.425883 489.904278 481.278743 485.594113 485.594119 C 481.278737 489.904284 475.425877 492.327774 469.328063 492.327774 L 22.999307 492.327774 C 16.901492 492.327774 11.048633 489.904284 6.738468 485.594119 C 2.423092 481.278743 -0.000398815 475.425883 -0.000398815 469.328069 L -0.000398815 22.999313 C -0.000398815 16.901498 2.423092 11.048639 6.738468 6.738474 C 11.048633 2.423098 16.901492 -0.000392811 22.999307 -0.000392811 " stroke="#ffffff" strokeWidth="44" strokeOpacity="1" strokeMiterlimit="4"/></g></g><g fill="#ffffff" fillOpacity="1"><g transform="translate(35.264961, 259.610253)"><g><path d="M 11.515625 -131.453125 L 42.6875 -131.453125 L 57.125 -55.015625 L 72.703125 -131.453125 L 102.734375 -131.453125 L 105 0 L 84.390625 0 L 81.953125 -87.484375 L 66.703125 0 L 48.359375 0 L 32.140625 -88.125 L 30.1875 0 L 9.25 0 Z M 11.515625 -131.453125 "/></g></g></g><g fill="#ffffff" fillOpacity="1"><g transform="translate(149.518565, 259.610253)"><g><path d="M 9.734375 -131.453125 L 43.015625 -131.453125 C 54.367188 -131.453125 63.238281 -130.046875 69.625 -127.234375 C 76.007812 -124.421875 80.523438 -120.007812 83.171875 -114 C 85.828125 -108 87.15625 -99.96875 87.15625 -89.90625 L 87.15625 -42.203125 C 87.15625 -32.023438 85.828125 -23.90625 83.171875 -17.84375 C 80.523438 -11.789062 76.035156 -7.300781 69.703125 -4.375 C 63.378906 -1.457031 54.585938 0 43.328125 0 L 9.734375 0 Z M 43.328125 -20.125 C 47.546875 -20.125 50.65625 -20.742188 52.65625 -21.984375 C 54.664062 -23.234375 55.941406 -25.019531 56.484375 -27.34375 C 57.023438 -29.675781 57.296875 -33.113281 57.296875 -37.65625 L 57.296875 -94.9375 C 57.296875 -99.15625 56.992188 -102.375 56.390625 -104.59375 C 55.796875 -106.8125 54.5 -108.460938 52.5 -109.546875 C 50.5 -110.628906 47.390625 -111.171875 43.171875 -111.171875 L 38.78125 -111.171875 L 38.78125 -20.125 Z M 43.328125 -20.125 "/></g></g></g><g fill="#ffffff" fillOpacity="1"><g transform="translate(244.621708, 259.610253)"><g><path d="M 47.390625 1.953125 C 33.210938 1.953125 23.09375 -1.695312 17.03125 -9 C 10.976562 -16.3125 7.953125 -27.109375 7.953125 -41.390625 L 7.953125 -90.234375 C 7.953125 -104.515625 10.976562 -115.253906 17.03125 -122.453125 C 23.09375 -129.648438 33.210938 -133.25 47.390625 -133.25 C 61.671875 -133.25 71.867188 -129.625 77.984375 -122.375 C 84.097656 -115.125 87.15625 -104.410156 87.15625 -90.234375 L 87.15625 -41.390625 C 87.15625 -27.109375 84.097656 -16.3125 77.984375 -9 C 71.867188 -1.695312 61.671875 1.953125 47.390625 1.953125 Z M 47.390625 -18.671875 C 51.503906 -18.671875 54.207031 -20.046875 55.5 -22.796875 C 56.800781 -25.554688 57.453125 -29.316406 57.453125 -34.078125 L 57.453125 -97.375 C 57.453125 -102.25 56.800781 -106.035156 55.5 -108.734375 C 54.207031 -111.441406 51.503906 -112.796875 47.390625 -112.796875 C 43.492188 -112.796875 40.894531 -111.414062 39.59375 -108.65625 C 38.300781 -105.894531 37.65625 -102.132812 37.65625 -97.375 L 37.65625 -34.078125 C 37.65625 -29.316406 38.25 -25.554688 39.4375 -22.796875 C 40.625 -20.046875 43.273438 -18.671875 47.390625 -18.671875 Z M 47.390625 -18.671875 "/></g></g></g></svg>          
			</span>
			<p className="italic text-center text-xl"><i className="fa-xl fa-solid fa-quote-left mr-2"></i>Write code cleaner, squash bugs faster
				<br></br>and build better everyday.<i className="fa-xl fa-solid fa-quote-right ml-2"></i>
			</p>
			<div className="flex gap-2">
				<Link href="https://www.linkedin.com/in/mark-o-connor-6a5382225/" target="_blank" rel="noreferrer noopener">
					<i className="flex items-center overflow-auto fa-2xl w-full aspect-square p-4 rounded-full fa-brands fa-linkedin-in hover:text-blue-800 hover:bg-white ease-in-out duration-200"></i>
				</Link>
				<Link href="https://github.com/markoco14" target="_blank" rel="noreferrer noopener">
					<i className="flex items-center overflow-auto fa-2xl w-full aspect-square p-4 rounded-full fa-brands fa-github hover:text-blue-800 hover:bg-white ease-in-out duration-200"></i>
				</Link>
				{/* <Link href="mailto:mark.oconnor14@gmail.com" target="_blank" rel="noreferrer noopener">
					<i className="flex items-center overflow-auto fa-2xl w-full aspect-square p-4 rounded-full fa-regular fa-envelope hover:text-blue-800 hover:bg-white ease-in-out duration-200"></i>
				</Link> */}
			</div>
			<p className="text-sm flex items-baseline gap-1">
				<i className="fa-regular fa-copyright"></i> Mark O&apos;Connor 2023
			</p>
			{/* <p>Made with NextJS</p> */}
		</footer>
  )
}
