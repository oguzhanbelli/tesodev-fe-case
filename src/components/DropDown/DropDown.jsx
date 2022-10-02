import { useState } from "react";
import styles from "./dropdown.module.scss";

const DropDown = ({ optionsList, selectedOption, setSelectedOption }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOptionsOpen(false);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button className={styles.button} type="button" onClick={toggleOptions}>
          {selectedOption?.title || "Order By"}
        </button>
        <div
          className={`${isOptionsOpen ? styles.open : styles.closed}`}
          tabIndex={-1}
        >
          <ul>
            {optionsList?.map((option, index) => (
              <li onClick={() => handleSelect(option)} tabIndex={0}>
                {option?.title}
                {console.log(option.title)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DropDown;
