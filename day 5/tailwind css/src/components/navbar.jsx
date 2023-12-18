/** @format */

function NavbarComponent({ logo, nomor, menus }) {
  console.log(menus);
  return (
    <div className="bg-black w-full text-white flex justify-between p-6 text-2xl font-bold">
      <h1 className=" font-extrabold ">{logo}</h1>
      <div className="flex gap-4">
        {menus.map((menu, index) => (
          <div className=" cursor-pointer" key={index}>
            {menu}
          </div>
        ))}
        {/* <div>Home</div>
        <div>{nomor}</div>
        <div>Page 2</div>
        <div>Page 3</div>
        <div>Page 4</div> */}
      </div>
    </div>
  );
}
export default NavbarComponent;

const IniComponent = () => {
  return (
    <div>
      <h1>ini component</h1>
    </div>
  );
};

function FunctionComponent1() {
  return <div>here </div>;
}

function FunctionComponent2() {
  return <div>here </div>;
}

function FunctionComponent3() {
  return <div>here </div>;
}

export {
  FunctionComponent1,
  FunctionComponent2,
  FunctionComponent3,
  IniComponent,
};

//buat 10 component isinya div terus background color setiap divnya diubah
//padding dari divnya 16px
//10 component akan di panggil di app.jsx
