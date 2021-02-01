// import logo from "./logo.svg";
// import Header from "./components/common/header/Header";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./pages/home";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
}

export default App;
