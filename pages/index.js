import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lily Smith - Web Development Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Lily Smith, a passionate web developer based in the USA."
        />
      </Head>
      <Navbar />
      <Hero />
      {/* <Clients /> */}
      <Skills />
      <Projects />
      <Resume />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  );
}
