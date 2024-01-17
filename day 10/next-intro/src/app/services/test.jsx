/** @format */
"use client";

import { useState } from "react";

function TestComponent() {
  const [test, setest] = useState("hello");
  return (
    <div>
      {test}
      <input onChange={(e) => setest(e.target.value)}></input>
    </div>
  );
}
export default TestComponent;
