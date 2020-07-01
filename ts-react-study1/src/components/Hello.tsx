import * as React from "react";

export interface HelloProps {
  compolier: string;
  framework: string;
}
export const Hello = (props: HelloProps) => {
  return (
    <h1>
      Hello from {props.compolier} and {props.framework}
    </h1>
  );
};
