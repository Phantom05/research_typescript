import React from "react";
import { hot } from "react-hot-loader/root";
// import {}
import { Hello } from "./Hello";

function App() {
  return <Hello title="TypeScript" />;
}

// class App extends React.Component<Props> {
//   render() {
//     const { name } = this.props;
//     return <div>Hello {name}</div>;
//   }
// }

export default hot(App);
