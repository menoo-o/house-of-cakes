
import CakeCustomization from "@/components/cakecustom/CakeCustomization";
import Baked from "@/components/freshlybaked/Baked";
import Hero from "@/components/hero/Hero";
import Marquee from "@/components/marquee/Marquee";
import Navbar from "@/components/navbar/Navbar";
import Offering from "@/components/offerings/Offering";
import Slider from "@/components/slider/SwiperSlides";



export default function Home() {
  return (
   <>
      <Marquee />
      <Navbar />
      <Hero />
      <Offering />
      <CakeCustomization /> 
      <Baked />
      <Slider /> 


   </>
  );
}
