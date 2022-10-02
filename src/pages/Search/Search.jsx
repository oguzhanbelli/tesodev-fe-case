import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import DropDown from "../../components/DropDown/DropDown";
import ResultCard from "../../components/ResultCard/ResultCard";
import Header from "../../components/Search/Header/Header";
import apiService from "../../db/userDb";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get("query"));
  const [results, setResults] = useState([]);

  const [selectedOption, setSelectedOption] = useState();
  const navigate = useNavigate();
  const [optionsList] = useState([
    { data: "name-asc", title: "Name ascending" },
    { data: "name-desc", title: "Name descending" },
  ]);

  useEffect(() => {
    setResults(
      apiService.getUsers({
        search: searchValue,
        page: 1,
        limit: 6,
        order: selectedOption?.data,
      })
    );
  }, [searchValue, selectedOption]);
  console.log(results);

  return (
    <>
      <div className="container">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <main className="mainContainer">
          <div className="d-flex w-full  flex-col justify-center items-center">
            <div className="w-full ">
              {searchValue.length >= 2 && (
                <div className="resultContainer">
                  <ul>
                    <div>
                      {results?.data?.map((item) => (
                        <ResultCard data={item} />
                      ))}
                    </div>
                  </ul>
                  <div id="select">
                    <DropDown
                      selectedOption={selectedOption}
                      setSelectedOption={setSelectedOption}
                      optionsList={optionsList}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Search;
