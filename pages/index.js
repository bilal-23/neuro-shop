import HeroSection from "../components/homepage/hero-section";
import ZoneSection from "../components/homepage/zone-section";
import ShopSection from "../components/homepage/shop-section";
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import { useEffect } from "react";

export default function Home(props) {

  return (
    <>
      <Head>
        <title>Neuro</title>
      </Head>
      <HeroSection heading="Health in your pocket" text="Functional gum and mints to energize, calm and focus you in the moment." btnText="shop" pos="top" />
      <ShopSection />
      <ZoneSection />
      <HeroSection heading="Refresh yourstate of mind." btnText="get neuro" pos="foot" />
    </>
  )
}
export async function getStaticProps(context) {
  const session = getSession({ req: context.req });
  if (session) {
    return {
      props: {
        session: JSON.stringify(session),
      }
    }
  }

}