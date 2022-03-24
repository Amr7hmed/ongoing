import "./App.scss";
import Home from "./pages/Home/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import Footer from "./components/Footer/index.jsx";
import { BrowserRouter , Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
