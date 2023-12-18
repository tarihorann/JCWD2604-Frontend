/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { routes, routes2 } from "./routes/routes";
import NavbarComponent from "./components/navbar";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        {routes.map((route, key) => (
          <Route {...route} key={key} />
        ))}
      </Routes>
    </>
  );
}

export default App;
