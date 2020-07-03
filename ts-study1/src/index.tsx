import React from "react";
import ReactDOM from "react-dom";
import App from "~/components/App";
import Button from "~/components/common/Button";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <h1>
    Hello from {props.compiler} and {props.framework}! <App />
    <Button />
  </h1>
);

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);
