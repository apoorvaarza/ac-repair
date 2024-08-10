import styles from "./book-appointment.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const BookAppointment = () => {
  return (
    <section className={styles.container} id="book-appointment">
      <h1>Book an Appointment Today</h1>

      <a className='block py-5' href="tel: +91 8885658577">
        <FontAwesomeIcon
          style={{ fontSize: "24px", paddingRight: '16px' }}
          icon={faPhone}
        ></FontAwesomeIcon>
        8885658577
      </a>
      <a className='block py-5' href="mailto:apoorvaarza94@gmail.com">
        <FontAwesomeIcon
          style={{ fontSize: "25px", paddingRight: '16px' }}
          icon={faEnvelope}
        ></FontAwesomeIcon>
        apoorvaarza94
      </a>
      <p className="py-5">Address: TBC H.no</p>
    </section>
  );
};

export default BookAppointment;
