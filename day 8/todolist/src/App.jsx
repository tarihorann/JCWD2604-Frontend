/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import TodoListPage from "./pages/todolist";
import NavbarComponent from "./components/navbar";
import { createContext, useState } from "react";
export const ThemeContext = createContext(null);

function App() {
  const [total, setTotal] = useState(10);
  return (
    <>
      <ThemeContext.Provider value={{ total, setTotal }}>
        <NavbarComponent />
        <Routes>
          <Route path="" element={<TodoListPage />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
