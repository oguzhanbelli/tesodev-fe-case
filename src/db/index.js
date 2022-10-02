import data from "./mockData.json";

const initializeDb = () => {
  localStorage.setItem("data", JSON.stringify(data));
};
export default initializeDb;
