
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Login from './Login';

import Mainpage from './Mainpage';


function App() {
  return <>
    <Router>
    <Header/>
      <Switch>
        <Route path="/" component={Login} exact/>      
        
        <Route path="/Mainpage/:id" component={Mainpage} exact/>

      </Switch>
    </Router>
      </>
      }

export default App;
