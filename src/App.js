import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddContact from "./components/AddContact/AddContact"
import EditContact from "./components/EditContact/EditContact";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Header />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/addcontact">
            <AddContact />
          </Route>

          <Route path="/editcontact/:id">
            <EditContact />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </div>
  );
};
export default App;
