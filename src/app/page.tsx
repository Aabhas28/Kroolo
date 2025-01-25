import {Navbar} from "@/components/navbar";
import  Nav  from "@/components/nav";
import Comp1 from "@/components/comp1";
import Comp2 from "@/components/comp2";

import Footer from "@/components/footer";
import GetKroolo from "@/components/getKroolo";
import FAQSection from "@/components/FaqComponent";
import EmployeeSlider from "@/components/HoriBar";
import CompL from "@/components/compL";
import ComptL1 from "@/components/compL1";
import ComptL3 from "@/components/CompL3";
import Comp3 from "@/components/comp3";
import Comp4 from "@/components/comp4";
import Comp5 from "@/components/comp5";
import Comp6 from "@/components/comp6";
import Comp7 from "@/components/comp7";
import Integrate from "@/components/Integrate";
import Hero from "@/components/hero";
import Hero2 from "@/components/hero2";
import ScrollSection from "@/components/ScrollSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      
     <Navbar />
      <Hero />
      <ScrollSection />
      <Hero2 />
      <Nav />
      
      <Comp1 />
      <Comp2 />
      <Comp3 />
      <Comp4 />
      <Comp5 />
      <Comp6 />
      <Comp7 />
      <ComptL3 />
      <ComptL1 />
      <CompL />
      <Integrate />
      <EmployeeSlider />
      
      <FAQSection />
      <GetKroolo />
      <Footer />
    </div>
  );
}
