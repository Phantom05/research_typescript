import React from "react";
import { HelloProps } from "defs/test";
import { Test } from "components/common/Test";

export function Hello(props: HelloProps) {
  return (
    <>
      <h1>Hello {props.title}</h1>
      <Test />
    </>
  );
}
