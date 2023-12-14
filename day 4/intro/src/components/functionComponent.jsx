/** @format */
import "../css/style.css";

function FunctionComponent(props) {
  return (
    <div className="red" style={{ color: "green", fontSize: "24px" }}>
      {" "}
      {props.text}{" "}
    </div>
  );
}
export default FunctionComponent;
