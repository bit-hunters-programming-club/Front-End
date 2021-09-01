import React from 'react' 
import{ BrowserRouter, Route, Switch} from "react-router-dom"
import AboutUs from "./Pages/AboutUs/AboutUs"
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AboutUs}></Route>
          <Route exact path="/signup" component={Signup}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
