/** @format */

function NavbarComponent() {
  return (
    <>
      <nav>
        <span className="flex">
          <a href="#">home</a>
          <a href="#band">band</a>
          <a href="">tour</a>
          <a href="">contact</a>
          <a href="">more</a>
        </span>

        <span className="flex">
          <a id="search" onclick="play()">
            play
          </a>
        </span>
      </nav>
    </>
  );
}
export default NavbarComponent;
