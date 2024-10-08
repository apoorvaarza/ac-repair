import styles from "./hero-banner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const HeroBanner = () => {
  return (
    <>
      <div className={styles.parallax}></div>
      <div className={styles.title}>
        <div>Expert AC Repair & Maintainance Services in Hyderabad</div>
        <FontAwesomeIcon
          className={styles.chevron}
          icon={faChevronDown}
        ></FontAwesomeIcon>
      </div>

      <a className="text-xs" href="https://www.freepik.com/" target="_blank">Image courtesy Freepik</a>
    </>
  );
};

export default HeroBanner;
