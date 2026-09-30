import { HomeHero } from "../components/sections/HomeHero";
import { HomeTrustMain } from "../components/sections/HomeTrustMain";
import { HomeTrust } from "../components/sections/HomeTrust";
import { HomeIntro } from "../components/sections/HomeIntro";
import { HomeServices } from "../components/sections/HomeServices";
import { HomeWhy } from "../components/sections/HomeWhy";
import { HomeProcess } from "../components/sections/HomeProcess";
import { HomeAbout } from "../components/sections/HomeAbout";
import { HomeGuide } from "../components/sections/HomeGuide";
import { HomeCta } from "../components/sections/HomeCta";
import { HomeRecoveryAssets } from "../components/sections/HomeRecoveryAssets";
import { site } from "../data/site";

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/images/nri-sarthi-logo.png`,
      telephone: site.phonePrimary,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office No. 5, Sector 16A, Part-1",
        addressLocality: "Faridabad",
        postalCode: "121002",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: {
        "@id": `${site.url}/#organization`,
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <HomeHero />
      <HomeTrustMain />
      {/* <HomeTrust /> */}
      <HomeIntro />
      <HomeServices />
      <HomeWhy />
      <HomeProcess />
      <HomeAbout />
      <HomeGuide />
      <HomeCta />
      <HomeRecoveryAssets />
    </>
  );
}