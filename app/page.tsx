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

export default function HomePage() {
  return (
    <>
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
