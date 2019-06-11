import React from 'react';
import Search from  "./pages/search";
import Saved from "./pages/saved";
import Navbar from "./components/nav";
import Footer from "./components/footer"
import  {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  return (
<div>

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
    <Footer />
   </div>

  )
}

export default App;
