/** @format */
import BannerImage from "../assets/banner.jpg";
function BannerComponent() {
  return (
    <>
      <div id="banner">
        <img src={BannerImage} alt="" />
        <div id="header">
          <h2>Wembley Stadium</h2>
          <p>Amid an atmosphere charged with pessimism</p>
        </div>
      </div>
    </>
  );
}
export default BannerComponent;
