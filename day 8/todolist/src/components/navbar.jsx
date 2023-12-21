/** @format */
import { useContext } from "react";
import { ThemeContext } from "../App";
import { useSelector } from "react-redux";
function NavbarComponent() {
  const { total } = useContext(ThemeContext);
  const counter = useSelector((state) => state.counter);

  return (
    <div className="p-3 bg-purple-500 text-white sticky top-0 flex justify-between px-8">
      <b>home</b>
      <b>{counter.value}</b>
      <b>{total}</b>
    </div>
  );
}
export default NavbarComponent;
