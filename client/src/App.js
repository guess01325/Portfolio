import "./App.css";
import Layout from "./Layouts/Layout";
import { Switch, Route } from "react-router-dom";
import Portfolio from "./screens/Portfolio";
import About from "./screens/About";
import Main from "./screens/Main";
import Contact from "./screens/Contact"
import { sliderData } from "./components/sliderData";


function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/">
            <Main slides = {sliderData} />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
          <Contact/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
