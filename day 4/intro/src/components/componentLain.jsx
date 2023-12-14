/** @format */

import ClassComponent from "./classComponent";
import FunctionComponent from "./functionComponent";

export function ComponentLain() {
  return (
    <div>
      <ClassComponent />
      <FunctionComponent />
    </div>
  );
}
export function ComponentLain2({ text }) {
  return (
    <div>
      <h1> {text}</h1>
    </div>
  );
}
