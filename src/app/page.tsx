import HeroSection from "./components/ui/HeroSection";
import FeaturedCourses from "./components/ui/FeaturedCourses";
import WhyChooseUs from "./components/ui/WhyChooseUs";
import TestimonialCardsdata from "./components/TestimonialCards";
import UpcomingEvents from "./components/UpcomingEvents";
import Developers from "./components/Developers";
import Footer from "./components/Footer";

export default function Home() {
  return (
 <main  className="min-h-screen   bg-blue-950/[0.96]  antialiased bg-grid-white/[0.02]  "  >

<HeroSection/>
<FeaturedCourses/>
<WhyChooseUs/>
<TestimonialCardsdata/>
<UpcomingEvents/>
<Developers/>
<Footer/>
 </main>
  );
}
