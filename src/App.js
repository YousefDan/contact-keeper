import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ContactState from "./conext/contact/ContactState";

const App = () => {
  return (
    <ContactState>
      <BrowserRouter>
        <Navbar />
        <div className="container mt-4">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    </ContactState>
  );
};
export default App;
