import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>
          NetZer0Tracker - Your Companion in the Journey to Net Zero
        </title>
        <meta
          name="description"
          content="NetZer0Tracker is a web application built to support SMEs in their journey towards achieving Net Zero carbon emissions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="NetZer0Tracker Benefits"
        title="Why you should join us"
      >
        NetZer0Tracker is a comprehensive digital solution, utilizing Web 3.0
        technologies, for SMEs striving for sustainability. Its core features
        such as the Carbon Calculator, Green Tokens, Green Marketplace, and
        Emissions Timeline help businesses track and reduce their carbon
        footprint.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fulfill your sustainability goals"
      >
        Explore a comprehensive demo of our product in this section. Understand
        how to utilize all features of the NetZer0Tracker app to maximize your
        journey towards achieving Net Zero carbon emissions. Remember,
        businesses leveraging our app report improved sustainability practices.
      </SectionTitle>
      <Video />
      <SectionTitle pretitle="Testimonials" title="Here's what our users said">
        Hear from the diverse SMEs that have benefited from the NetZer0Tracker
        application. Their journey towards sustainability is inspiring and
        highlights the practical benefits of our web application.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Here we answer the common questions about our app and its various
        features. This section will provide you with additional information
        about the NetZer0Tracker and its use cases.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
