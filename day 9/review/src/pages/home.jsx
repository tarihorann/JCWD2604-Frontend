/** @format */
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <a href="/login" className=" bg-red-400 p-5">
        login
      </a>
      <Link to="/login" className=" bg-blue-400 p-5">
        login lewat link
      </Link>
    </div>
  );
}
export default HomePage;
