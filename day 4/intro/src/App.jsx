/** @format */

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClassComponent from "./components/classComponent";
import FunctionComponent from "./components/functionComponent";
import { ComponentLain2, ComponentLain } from "./components/componentLain";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import ProfilePage from "./pages/profilePage";

function App() {
  const [count, setCount] = useState(0);
  const text = "ini isi dari text";
  const arrNumber = [1, 2, 3, 4];

  return (
    <>
      {/* <FunctionComponent text={text} udin="ini si udin" />
      <ClassComponent />
      <ComponentLain />
      <ComponentLain2 text="passing dari app" /> */}
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <h1>hello</h1>
      {arrNumber.map((val, idx) => (
        <h1 key={idx}>{val}</h1>
      ))}
    </>
  );
}

export default App;
