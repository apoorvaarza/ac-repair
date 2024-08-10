import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import styles from "./testimonials.module.css";

const Testimonials = () => {
  const comments = [
    { comment: "Very Professional", stars: 5 },
    { comment: "Top class service", stars: 4 },
    { comment: "Found my go-to place for AC maintainance", stars: 5 },
    { comment: "Very reasonable and sincere service", stars: 5 },
  ];

  return (
    <section className={styles.container} id="testimonials">
      <h1>Testimonials</h1>
      <div className="grid grid-cols-2 gap-4 text-center">
        {comments.map((item, i) => {
          return (
            <div key={i} className={styles.testimonial}>
              <p>{item.comment}</p>
              {Array.from({ length: item.stars }).map((_, index) => {
                return (
                  <FontAwesomeIcon
                    className="px-2"
                    icon={faSnowflake}
                    key={index}
                  ></FontAwesomeIcon>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
