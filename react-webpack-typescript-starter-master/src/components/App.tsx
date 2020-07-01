import * as React from "react";
import { hot } from "react-hot-loader";
import Hello from "./common/Hello";

const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";

class App extends React.Component<{}, undefined> {
  public render() {
    return (
      <div className="app">
        <Hello />
      </div>
    );
  }
}

declare let module: object;

export default hot(module)(App);
