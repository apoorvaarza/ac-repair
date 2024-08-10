import HeroBanner from "../hero-banner/hero-banner";
import Header from "../header/header";
import Services from "../services/services";
import BookAppointment from "../book-appointment/book-appointment";
import AboutUs from '../about-us/about-us'
import Testimonials from "../testimonials/testimonials";

const Landing = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <Services />
      <BookAppointment />
      <AboutUs />
      <Testimonials />
    </>
  );
};

export default Landing;
