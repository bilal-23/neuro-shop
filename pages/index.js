import HeroSection from "../components/homepage/hero-section";
import ZoneSection from "../components/homepage/zone-section";
import ShopSection from "../components/homepage/shop-section";

export default function Home() {
  return (
    <>
      <HeroSection heading="Health in your pocket" text="Functional gum and mints to energize, calm and focus you in the moment." btnText="shop" pos="top" />
      <ShopSection />
      <ZoneSection />
      <HeroSection heading="Refresh yourstate of mind." btnText="get neuro" pos="foot" />
    </>
  )
}
