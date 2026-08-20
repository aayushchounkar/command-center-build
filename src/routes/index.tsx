import { createFileRoute } from "@tanstack/react-router";
import { BootSequence } from "@/components/portfolio/BootSequence";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Leadership } from "@/components/portfolio/Leadership";
import { Impact } from "@/components/portfolio/Impact";
import { Contact } from "@/components/portfolio/Contact";

const TITLE = "Aayush Chounkar — Product, Project Management & Technology";
const DESC =
  "Portfolio of Aayush Chounkar, a Computer Science Engineering student and Product Owner working across software testing, AI automation, product management and team leadership.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Aayush Chounkar",
          email: "mailto:aayushchounkar@gmail.com",
          telephone: "+91 7678071710",
          jobTitle: "Project Manager Intern & Product Owner",
          address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
          alumniOf: { "@type": "CollegeOrUniversity", name: "ITM Skills University" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <BootSequence />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Impact />
        <Contact />
      </main>
    </>
  );
}
