import Image from "next/image";
import styles from "./services.module.css";

const Services = () => {
  const services = [
    { image: "/repair.jpg", caption: "AC Repair" },
    { image: "/filter.jpg", caption: "Air Fan & Filter Replacement" },
    { image: "/maintainance.jpg", caption: "AC Maintainance" },
    { image: "/installation.jpg", caption: "AC Installation & Uninstallation" },
    { image: "/thermostat.jpg", caption: "Gas & Thermostat Replacement" },
    { image: "/copper.jpg", caption: "Copper Wires for AC" },
  ];
  return (
    <section id="services">
      <h1 className={styles.title}>Our Services</h1>
      <div className={styles.container}>
        {services.map((service, i) => {
          return (
            <div className={styles.service} key={i}>
              <Image
                src={service.image}
                width={300}
                height={300}
                alt={service.caption}
              />
              <div>{service.caption}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
