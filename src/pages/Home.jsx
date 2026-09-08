import SEO from "../components/SEO";
import Hero from "../sections/Hero";
import CapabilityStrip from "../sections/CapabilityStrip";
import CapabilitiesGrid from "../sections/CapabilitiesGrid";
import SelectedWorkPreview from "../sections/SelectedWorkPreview";
import SeoDifferentiator from "../sections/SeoDifferentiator";
import CtaBanner from "../sections/CtaBanner";
import { getSeoConfig } from "../data/config";

export default function Home() {
  const seoConfig = getSeoConfig("home");
  return (
    <>
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
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
