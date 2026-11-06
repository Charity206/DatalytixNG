import Header from './Components/Header';
import Hero from './Components/Hero';
import Partners from './Components/Partners';
import WhoWeAre from './Components/WhoWeAre';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import OurApproach from './Components/Approach';
import WhyChooseUs from './Components/WhyChooseUs';
import CompanyStats from './Components/CompanyStats';
import './App.css';
import Testimonials from './Components/Testimonials';
import Fingertips from './Components/Fingertips';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <div className="min-h-screen bg-slate-50/40 text-slate-900 flex flex-col antialiased selection:bg-[#3CB5D0]/30 selection:text-[#0A2540]">
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <Partners />
        <WhoWeAre />
        <OurApproach />
        <Services />

        <WhyChooseUs />
        {/* <CompanyStats /> */}
        <Testimonials />
        <Fingertips />
        <ContactUs />

      </main>
      <Footer />
    </div>
  );
}

export default App;
