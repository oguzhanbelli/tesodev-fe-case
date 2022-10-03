import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets";
import Button from "../../components/Button/Button";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Landing/Footer/Footer";
import Header from "../../components/Landing/Header/Header";
import SearchInput from "../../components/SearchInput/SearchInput";
import apiService from "../../db/userDb";

const Landing = () => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    setResults(apiService.getUsers({ search: searchValue, limit: 3, page: 1 }));
  }, [searchValue]);

  const handleShowMore = () => {
    navigate({
      pathname: "/search",
      search: `?query=${searchValue}`,
    });
  };

  return (
    <>
      <div className="container">
        <Header />
        <main className="mainContainer">
          <div className="findInContainer">
            <div>
              <Logo />
              <div className=" logoDescription">Search App</div>
            </div>

            <div className="w-full mt-5 justify-center items-center d-flex flex-col">
              <div className="searchContainer ">
                <p className="heading">Find in records</p>

                <div className="w-full d-flex flex-row justify-center items-center ">
                  <SearchInput
                    results={results}
                    value={searchValue}
                    setValue={setSearchValue}
                    onClick={handleShowMore}
                  />
                  <div className="landingSearchButtonContainer">
                    <Button onClick={() => handleShowMore()} text={"Search"} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carouselSection">
            <div className="d-flex  justify-center items-center flex-col">
              <div className="text-start w-full ">
                <p className="heading">Top News</p>
              </div>

              <div className="d-flex flex-col">
                <Carousel />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
export default Landing;
