/** @format */

export function Exercise1() {
  return <div style={{ backgroundColor: "red", padding: "16px" }}> </div>;
}

export function Exercise2() {
  return <div style={{ backgroundColor: "green", padding: "16px" }}> </div>;
}

export function Exercise3() {
  return <div style={{ backgroundColor: "blue", padding: "16px" }}> </div>;
}

export function Exercise4() {
  return <div style={{ backgroundColor: "black", padding: "16px" }}> </div>;
}

export function Exercise5() {
  return <div style={{ backgroundColor: "yellow", padding: "16px" }}> </div>;
}

export function Exercise6() {
  return <div style={{ backgroundColor: "cyan", padding: "16px" }}> </div>;
}

export function Exercise7() {
  return <div style={{ backgroundColor: "purple", padding: "16px" }}> </div>;
}

export function Exercise8() {
  return <div style={{ backgroundColor: "limegreen", padding: "16px" }}> </div>;
}

export function Exercise9() {
  return <div style={{ backgroundColor: "grey", padding: "16px" }}> </div>;
}

export function Exercise10() {
  return <div style={{ backgroundColor: "brown", padding: "16px" }}> </div>;
}

export function Exercise11({ bgColor, value }) {
  return (
    <div style={{ backgroundColor: bgColor, padding: "16px", color: "white" }}>
      {value}
    </div>
  );
}

export function Exercise12({ bgColor }) {
  return <div className={`bg-${bgColor} p-4`}> </div>;
}

export function LoopExercise({ arr }) {
  return (
    <div>
      {arr?.map((color, idx) => {
        const plus = "hello " + (idx + 1);
        return <Exercise11 bgColor={color} key={idx} value={plus} />;
      })}
    </div>
  );
}
