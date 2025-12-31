import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

// Dynamically import below-the-fold components for better performance
const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="min-h-[25rem]" />,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <div className="min-h-[25rem]" />,
});
const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <div className="min-h-[25rem]" />,
});
const Guestbook = dynamic(() => import("@/components/Guestbook"), {
  loading: () => <div className="min-h-[25rem]" />,
});
const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => <div className="min-h-[25rem]" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="min-h-[6.25rem]" />,
});

export default function Home() {
  return (
    <main className="min-h-screen mb-20 lg:mb-9 md:pb-0 overflow-hidden">
      <Navbar />
      <HomeSection />
      <About />
      <Projects />
      <Skills />
      {/* <Reviews /> */}
      <Guestbook />
      <ContactSection />
      <Footer />
    </main>
  );
}
