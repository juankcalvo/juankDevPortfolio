import { Navigation } from "@/components/shared/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { SelectedWork } from "@/components/sections/selected-work";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <SelectedWork />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
