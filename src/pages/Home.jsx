import SEO from "../components/SEO";
import Hero from "../sections/Hero";
import CapabilityStrip from "../sections/CapabilityStrip";
import CapabilitiesGrid from "../sections/CapabilitiesGrid";
import SelectedWorkPreview from "../sections/SelectedWorkPreview";
import SeoDifferentiator from "../sections/SeoDifferentiator";
import CtaBanner from "../sections/CtaBanner";

export default function Home() {
  return (
    <>
      <SEO
        title="Web Developer"
        description="Zeeshan builds business websites, WordPress sites, React interfaces and Laravel applications for businesses ready to move forward."
      />
      <Hero />
      <CapabilityStrip />
      <CapabilitiesGrid />
      <SelectedWorkPreview />
      <SeoDifferentiator />
      <CtaBanner />
    </>
  );
}
