import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import DropDown from "../../components/DropDown/DropDown";
import Pagination from "../../components/Pagination/Pagination";
import ResultCard from "../../components/ResultCard/ResultCard";
import Header from "../../components/Search/Header/Header";
import apiService from "../../db/userDb";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchValue, setSearchValue] = useState(searchParams.get("query"));
  const [results, setResults] = useState([]);
  const [pageNumberLimit] = useState(3);
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  );
  const [maxPageLimit, setMaxPageLimit] = useState(6);
  const [minPageLimit, setMinPageLimit] = useState(0);
  const [selectedOption, setSelectedOption] = useState({
    title: searchParams.get("orderBy"),
    data: searchParams.get("orderBy"),
  });
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const navigate = useNavigate();
  const [optionsList] = useState([
    { data: "name-asc", title: "Name ascending" },

    { data: "name-desc", title: "Name descending" },
    { data: "year-asc", title: "Year ascending" },
    { data: "year-desc", title: "Year descending" },
  ]);
  const handleSelect = (option) => {
    setSearchParams(
      `query=${searchValue}${
        option.data !== undefined ? `&orderBy=${option.data}` : ""
      }&page=${currentPage}`
    );
    setSelectedOption(option);
    setIsOptionsOpen(false);
  };
  console.log(results);

  useEffect(() => {
    setResults(
      apiService.getUsers({
        search: searchValue,
        page: currentPage,
        limit: 6,
        order: selectedOption?.data,
      })
    );
  }, [searchParams, currentPage]);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSearchParams(
      `query=${searchValue || ""}&orderBy=${selectedOption?.data || ""}&page=${
        pageNumber || ""
      }`
    );
  };
  const onPrevClick = () => {
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageNumberLimit);
      setMinPageLimit(minPageLimit - pageNumberLimit);
    }
    setCurrentPage((prev) => prev - 1);
    setSearchParams(
      `query=${searchValue || ""}&orderBy=${selectedOption?.data || ""}&page=${
        currentPage - 1 || ""
      }`
    );
  };

  const onNextClick = () => {
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumberLimit);
      setMinPageLimit(minPageLimit + pageNumberLimit);
    }
    setCurrentPage((prev) => prev + 1);
    setSearchParams(
      `query=${searchValue || ""}&orderBy=${selectedOption?.data || ""}&page=${
        currentPage + 1 || ""
      }`
    );
  };
  const handleSearch = () => {
    setSearchValue(searchValue);
    setSearchParams(
      `query=${searchValue || ""}&orderBy=${
        selectedOption?.data || ""
      }&page=${1}`
    );
    setCurrentPage(1);
  };

  return (
    <>
      <div className="container">
        <Header
          searchParams={searchParams}
          handleSearch={handleSearch}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <main className="mainContainer">
          <div className="d-flex w-full  flex-col justify-center items-center">
            <div className="w-full ">
              <div className="resultContainer">
                {results.pages === 0 && <div>Not Found Record</div>}
                {results.pages > 0 && (
                  <ul>
                    <div>
                      {results?.data?.map((item, idx) => (
                        <ResultCard key={idx} data={item} />
                      ))}
                    </div>
                  </ul>
                )}

                <div id="select">
                  {results.pages > 0 && (
                    <DropDown
                      isOptionsOpen={isOptionsOpen}
                      setIsOptionsOpen={setIsOptionsOpen}
                      handleSelect={handleSelect}
                      setSearchParams={setSearchParams}
                      selectedOption={selectedOption}
                      setSelectedOption={setSelectedOption}
                      optionsList={optionsList}
                    />
                  )}
                </div>
              </div>
            </div>
            {results?.data?.length > 3 && results.pages > 0 && (
              <Pagination
                onPageChange={onPageChange}
                currentPage={currentPage}
                minPageLimit={minPageLimit}
                onPrevClick={onPrevClick}
                onNextClick={onNextClick}
                totalPages={results.pages}
                maxPageLimit={maxPageLimit}
              />
            )}
          </div>
        </main>
      </div>
    </>
  );
};
export default Search;
