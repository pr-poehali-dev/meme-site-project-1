import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedMemes from "@/components/FeaturedMemes";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedMemes />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
