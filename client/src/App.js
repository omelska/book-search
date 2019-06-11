import React from 'react';
import SaveBtn from "./components/saveBtn";
import DeleteBtn from "./components/deleteBtn";
import Search from  "./pages/search";
import Saved from "./pages/saved";
import Navbar from "./components/nav";
import Img from "./components/img";
import  {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  return (

    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/saved" component={Saved} />
          </Switch>
      </div>
    </Router>
  //  <div>
  //    <SaveBtn/>
  //    <Img url="../public/icon.png" alt="some img"/>
  //    <DeleteBtn />
  //  </div>
  )
}

export default App;
