import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MidSection from "../components/MidSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative flex flex-col gap-16 ">
      <header className="z-20 sticky top-0">
        <Navbar />
      </header>
      <Hero />
      <MidSection />
      <Footer />
    </div>
  );
};

export default Home;
