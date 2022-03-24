import "./App.scss";
import Home from "./pages/Home/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import Footer from "./components/Footer/index.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
