import React from "react";
import { BrowserRouter } from "react-router-dom";
import initializeDb from "./db";
import { Router } from "./routes/router";

initializeDb();

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
