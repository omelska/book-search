import React from 'react';
import Search from  "./pages/search";
import Saved from "./pages/saved";
import Navbar from "./components/nav";
import Footer from "./components/footer"
import  {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Book from "./components/book";
import Main from "./components/main";

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

    <Main >
 <Book title="Game of Thrones" url="https://prodimage.images-bn.com/pimages/9780553573404_p0_v1_s600x595.jpg" alt="some Img" authors="Gearge Martin" description="Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off King’s Landing. There Eddard Stark of Winterfell rules in Robert’s name. There his family dwells in peace and comfort: his proud wife, Catelyn; his sons Robb, Brandon, and Rickon; his daughters Sansa and Arya; and his bastard son, Jon Snow. Far to the north, behind the towering Wall, lie savage Wildings and worse—unnatural things relegated to myth during the centuries-long summer, but proving all too real and all too deadly in the turning of the season.
 
 Yet a more immediate threat lurks to the south, where Jon Arryn, the Hand of the King, has died under mysterious circumstances. Now Robert is riding north to Winterfell, bringing his queen, the lovely but cold Cersei, his son, the cruel, vainglorious Prince Joffrey, and the queen’s brothers Jaime and Tyrion of the powerful and wealthy House Lannister—the first a swordsman without equal, the second a dwarf whose stunted stature belies a brilliant mind. All are heading for Winterfell and a fateful encounter that will change the course of kingdoms.
  
 Meanwhile, across the Narrow Sea, Prince Viserys, heir of the fallen House Targaryen, which once ruled all of Westeros, schemes to reclaim the throne with an army of barbarian Dothraki—whose loyalty he will purchase in the only coin left to him: his beautiful yet innocent sister, Daenerys." link="https://www.barnesandnoble.com/w/game-of-thrones-george-r-r-martin/1100041703?ean=9780553573404&st=PLA&sid=BNB_ADL+Core+Top+EAN+-+Desktop+High&sourceId=PLAGoNA&dpid=tdtve346c&2sid=Google_c&gclid=Cj0KCQjwxYLoBRCxARIsAEf16-uNXPrLh_RISkSvoBLkKa849mLQxrFJ9hjEOuTT9uTi-mkZYn6b8qAaAgFJEALw_wcB#/" />

    </Main>
   
    <Footer />
   </div>

  )
}

export default App;
