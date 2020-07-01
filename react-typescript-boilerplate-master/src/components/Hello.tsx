import React from "react";

export interface HelloProps {
  title: string;
}
function Hello(props: HelloProps) {
  return <div>Hello {props.title}</div>;
}

export default Hello;
