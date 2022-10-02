import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="d-flex flex-row w-full justify-end items-center pt-64 pl-63">
        <div className="headerButtonContainer ">
          <Button onClick={() => navigate("/add")} text={"Add new record"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
