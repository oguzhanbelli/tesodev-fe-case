import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Header from "../../components/Add/Header/Header";
import ResultCard from "../../components/ResultCard/ResultCard";

const Add = () => {
  const [searchParams] = useSearchParams();

  const { state } = useLocation();
  const [results, setResults] = useState([]);

  const navigate = useNavigate();
  console.log(state);
  return (
    <>
      <div className="container">
        <Header searchValue={state} />
        <main className="mainContainer">
          <div className="d-flex w-full  flex-col justify-center items-center">
            <div className="w-full ">
              <div className="resultContainer">
                <ul>
                  <div>
                    {results?.data?.map((item, idx) => (
                      <ResultCard key={idx} data={item} />
                    ))}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Add;
