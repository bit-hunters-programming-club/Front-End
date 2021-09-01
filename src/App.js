import React from 'react' 
import{ BrowserRouter, Route, Switch} from "react-router-dom"
import AboutUs from "./Pages/AboutUs/AboutUs"
import Register from "./Pages/Register/Register"
function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AboutUs}></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
