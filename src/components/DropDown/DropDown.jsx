import { useState } from "react";
import { SortIcon } from "../../assets";
import styles from "./dropdown.module.scss";

const DropDown = ({
  optionsList,
  selectedOption,
  handleSelect,
  isOptionsOpen,
  setIsOptionsOpen,
}) => {
  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button className={styles.button} type="button" onClick={toggleOptions}>
          <SortIcon fill="black" width="26px" height="24px" />
          {selectedOption?.title || "Order By"}
        </button>
        <div
          className={`${isOptionsOpen ? styles.open : styles.closed}`}
          tabIndex={-1}
        >
          <ul>
            {optionsList?.map((option, index) => (
              <li key={index} onClick={() => handleSelect(option)} tabIndex={0}>
                {option?.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DropDown;
