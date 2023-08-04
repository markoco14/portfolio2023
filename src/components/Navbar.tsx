import Link from "next/link";

export default function About() {
 
  return (
		<nav className="z-10 text-white px-2 bg-black/50 flex justify-end items-center gap-4 w-full fixed top-0 left-0 h-[48px]">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </nav>
  )
}
