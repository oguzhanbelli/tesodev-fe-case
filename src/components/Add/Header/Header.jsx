import { useNavigate } from "react-router-dom";
import { Logo, ReturnArrowIcon } from "../../../assets";
import styles from "./addheader.module.scss";
const Header = ({ searchValue }) => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div>
        <Logo onClick={() => navigate("/")} className={styles.logo} />
      </div>
      <div
        onClick={() => {
          if (searchValue) {
            navigate(
              `/search?query=${searchValue.query || ""}&orderBy=${
                searchValue.orderBy || ""
              }&page=${searchValue.page || 1}`
            );
          } else {
            navigate("/");
          }
        }}
        className={styles.return}
      >
        <ReturnArrowIcon />
        <p>Return to List Page</p>
      </div>
    </header>
  );
};

export default Header;
