import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Head from "next/head";

export default function Home() {

  return (
    <main>
      <Head>
        <title>Mark O&apos;Connor | Full-Stack Developer</title>
        <script async src="https://kit.fontawesome.com/d0c81e3c08.js" crossOrigin="anonymous"></script>
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
