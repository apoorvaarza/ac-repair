import Image from "next/image";

const AboutUs = () => {
  return (
    <section id="about-us">
      <h1>About Us</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <p className="flex items-center">
          Our business, a novel venture, specializes in servicing and repairing
          air conditioning units for both residential and commercial spaces
          across Hyderabad & Secunderabad. Our team comprises skilled and
          well-informed technicians, dedicated to maintaining the optimal
          performance of your air conditioning systems. We prioritize delivering
          top-notch services at economical prices, with a particular emphasis on
          preparing AC systems for the summer season. Our primary objective is
          to achieve total customer satisfaction with every service we provide
        </p>
        <Image
          src="/hero-banner.jpg"
          width={600}
          height={600}
          alt="About us Image"
        />
      </div>
    </section>
  );
};

export default AboutUs;
