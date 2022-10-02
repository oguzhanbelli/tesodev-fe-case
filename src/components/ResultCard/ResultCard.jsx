import { MapIcon } from "../../assets";
import styles from "./resultcard.module.scss";

const ResultCard = ({ data }) => {
  console.log(data);
  return (
    <>
      <li className={styles["input-result-container"]}>
        <div className={styles["input-result"]}>
          <div>
            <div className={styles["input-result-item"]}>
              <div>
                <MapIcon />
              </div>
              <div className={styles["input-result-item-detail"]}>
                <div className="d-flex flex-col ">
                  <h1>{data.NameSurname}</h1>
                  <div className="d-flex flex-row">
                    <p>{data.Country}</p>,<p>{data.City}</p>
                  </div>{" "}
                </div>

                <div className="d-flex flex-col  gap-5  items-end ">
                  <p>{data.NameSurname}</p>
                  <p>{data.Date}</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-center items-center">
              <hr className={styles.solid} />
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
export default ResultCard;
