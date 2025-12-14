import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Objectives from "@/components/Objectives";
// Import the two new separated components
import Hiking from "@/components/Hiking";
import CommunityOutreach from "@/components/CommunityOutreach";
import Marketplace from "@/components/Marketplace";
import Rules from "@/components/Rules";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-gray selection:bg-brand-red selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Objectives />
      
      {/* Separated Sections */}
      <Hiking />
      <CommunityOutreach />
      
      <Marketplace />
      <Rules />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}