import React from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import HeroSection from "@components/sections/Hero";
import CountersSection from "@components/sections/Counters";
import ServicesSection from "@components/sections/Services";
import PartnersSection from "@components/sections/Partners";



export const metadata = {
  title: {
		default: "Home",
		template: "%s | " + AppData.settings.siteName,
	},
  description: AppData.settings.siteDescription,
}

async function Home1() {
  return (
    <>
      <HeroSection />
      <CountersSection />
      <ServicesSection />
      <PartnersSection />
    </>
  );
};
export default Home1;