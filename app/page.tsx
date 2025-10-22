import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ScrollProgress from "@/components/ScrollProgress"
import WaveDivider from "@/components/WaveDivider"
import HeroSection from "@/components/home/HeroSection"
import DashboardsSection from "@/components/home/DashboardsSection"
import FlowSection from "@/components/home/FlowSection"
import IntegrationsSection from "@/components/home/IntegrationsSection"
import LynActiveSection from "@/components/home/LynActiveSection"
// Removed UndetectableSection
import FAQSection from "@/components/home/FAQSection"
import ProductShowcase from "@/components/home/ProductShowcase"
// Removed RealtimeHelpSection
// Removed CTASection

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <div className="border-b border-gray-200 my-8"></div>
        <DashboardsSection />
        <div className="border-b border-gray-200 my-8"></div>
        <LynActiveSection />
        <div className="border-b border-gray-200 my-8"></div>
        <FlowSection />
        <div className="border-b border-gray-200 my-8"></div>
        <ProductShowcase />
        <div className="border-b border-gray-200 my-8"></div>
        <IntegrationsSection />
        <div className="border-b border-gray-200 my-8"></div>
        <FAQSection />
        <div className="border-b border-gray-200"></div>
      </main>
      <Footer />
    </>
  )
}
