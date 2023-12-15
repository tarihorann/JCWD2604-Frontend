/** @format */

import "./App.css";
import {
  Exercise1,
  Exercise10,
  Exercise11,
  Exercise12,
  Exercise2,
  Exercise3,
  Exercise4,
  Exercise5,
  Exercise6,
  Exercise7,
  Exercise8,
  Exercise9,
  LoopExercise,
} from "./components/exercise";
import NavbarComponent, { IniComponent } from "./components/navbar";

export default function App() {
  const arrColor = ["red", "green", "blue", "pink", "black", "yellow"];
  const arrColor2 = [
    "red-800",
    "green-800",
    "blue-200",
    "pink-800",
    "black",
    "yellow-800",
  ];

  return (
    <>
      <NavbarComponent />
      <h1 className="text-3xl font-[900] underline">Hello world!</h1>
      <IniComponent />

      <Exercise1 />
      <Exercise2 />
      <Exercise3 />
      <Exercise4 />
      <Exercise5 />
      <Exercise6 />
      <Exercise7 />
      <Exercise8 />
      <Exercise9 />
      <Exercise10 />
      <h1>LOOP component</h1>
      {arrColor.map((color, idx) => (
        <Exercise11 bgColor={color} key={idx} />
      ))}

      <h1>ini tailwind</h1>
      {arrColor2.map((color, idx) => (
        <Exercise12 bgColor={color} key={idx} />
      ))}

      <h1>ini pakai loop component</h1>
      <LoopExercise arr={arrColor} />
    </>
  );
}
