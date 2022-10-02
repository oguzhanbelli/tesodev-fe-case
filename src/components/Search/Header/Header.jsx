import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Logo, SearchIcon } from "../../../assets";
import Button from "../../Button/Button";
import styles from "./searchheader.module.scss";
const Header = ({
  searchValue,
  handleSearch,
  searchParams,
  setSearchValue,
}) => {
  const navigate = useNavigate();

  console.log();
  return (
    <header>
      <div>
        <Logo onClick={() => navigate("/")} className={styles.logo} />
      </div>

      <div className={styles.headerContainer}>
        <div className={styles["search-form"]}>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className={styles["search-input"]}
          />
          <div className={styles["search-button"]}>
            <SearchIcon />
          </div>
        </div>
        <div className="landingSearchButtonContainer">
          <Button
            onClick={() => {
              handleSearch();
            }}
            text={"Search"}
          />
        </div>
      </div>
      <div>
        <div className="headerButtonContainer ">
          <Button
            onClick={() =>
              navigate("/add/", {
                state: Object.fromEntries([...searchParams]),
              })
            }
            text={"Add new record"}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
