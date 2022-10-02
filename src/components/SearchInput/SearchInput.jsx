import { MapIcon, SearchIcon } from "../../assets";

import styles from "./searchinput.module.scss";

const SearchInput = ({ value, setValue, results, onClick }) => {
  return (
    <>
      <div className={styles["search-form"]}>
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onClick();
            }
          }}
          placeholder={"Some..."}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={styles["search-input"]}
        />
        <div className={styles["search-button"]}>
          <SearchIcon />
        </div>
        <div>
          {value.length > 1 && (
            <div className={styles["input-result-container"]}>
              <div className={styles["input-result"]}>
                {results?.data?.map((item, idx) => (
                  <div key={idx}>
                    <div className={styles["input-result-item"]} key={idx}>
                      <div>
                        <MapIcon />
                      </div>
                      <div className={styles["input-result-item-detail"]}>
                        <h1>{item.NameSurname}</h1>

                        <div className="d-flex flex-row ">
                          <p>{item.Country}</p>,<p>{item.City}</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-center items-center">
                      <hr className={styles.solid} />
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={onClick}>Show more</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchInput;
