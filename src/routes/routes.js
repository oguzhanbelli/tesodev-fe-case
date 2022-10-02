import Add from "../pages/Add/Add";
import Landing from "../pages/Landing/Landing";
import Search from "../pages/Search/Search";

const routes = [
  {
    name: "Landing",
    path: "/",
    element: Landing,
  },
  {
    name: "Search",
    path: "/search",
    element: Search,
  },
  {
    name: "Add",
    path: "/add",
    element: Add,
  },
];

export default routes;
