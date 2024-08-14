import styles from "./book-appointment.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const BookAppointment = () => {
  return (
    <section className={styles.container} id="book-appointment">
      <h1>Book an Appointment Today</h1>

      <a className='block py-5' >
      {/* <a className='block py-5' href="tel:"> */}
        <FontAwesomeIcon
          style={{ fontSize: "24px", paddingRight: '16px' }}
          icon={faPhone}
        ></FontAwesomeIcon>
        TBC
      </a>
      {/* <a className='block py-5' href="mailto:"> */}
      <a className='block py-5' >
        <FontAwesomeIcon
          style={{ fontSize: "25px", paddingRight: '16px' }}
          icon={faEnvelope}
        ></FontAwesomeIcon>
        TBC
      </a>
      <p className="py-5">Address: TBC H.no</p>
    </section>
  );
};

export default BookAppointment;
