import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Home from "./page/Home";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route
              path="/"
              render={(props) => (
                  <Home {...props} />
              )}
          />
          <Redirect to="/"/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
