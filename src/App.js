import Login from './Components/Login';
import Student from './Components/Student';
import User from './Components/User';
import Emp from './Components/Emp';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 import { createStore, applyMiddleware } from 'redux'; 

const store = createStore(() => [], {}, applyMiddleware());

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route path="/std">
            <Student />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/emp">
            <Emp />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
        </Provider>
    </Router>
  );
}

export default App;
