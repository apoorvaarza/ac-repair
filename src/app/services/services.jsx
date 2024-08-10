import Image from "next/image";
import styles from "./services.module.css";

const Services = () => {
  const services = [
    { image: "/repair.png", caption: "AC Repair" },
    { image: "/fan.png", caption: "Air Fan & Filter Replacement" },
    { image: "/maintainance.png", caption: "AC Maintainance" },
    { image: "/installation.png", caption: "AC Installation & Uninstallation" },
    { image: "/thermostat.png", caption: "Gas & Thermostat Replacement" },
    { image: "/fan.png", caption: "Copper Wires for AC" },
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
