import Head from 'next/head';
import Header from '../components/Header';
import TitleComponent from '../components/TitleComponent';
import Footer from '../components/Footer';
import ManageFeatures from '../components/ManageFeatures';
import GrowthJourneySection from '../components/GrowthJourneySection';
import GetStartedSection from '../components/GetStartedSection';
import ToolsSection from '../components/ToolsSections';
import CustomersSection from '../components/CustomersSection';

export default function Home() {
  return (
    <div className="bg-[#f8f4ee] min-h-screen flex flex-col">
      <Head>
        <title>Mantle | Home</title>
        <meta name="description" content="Welcome to Mantle - The Future of Collaboration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-1">
        <TitleComponent />
        <ManageFeatures />
        <GrowthJourneySection />
        <CustomersSection />
        <ToolsSection />
        <GetStartedSection />
      </main>
      <Footer />
    </div>
  );
}