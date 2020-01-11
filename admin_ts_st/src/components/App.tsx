import React from "react";
import { Home } from "pages";
import { Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default App;
