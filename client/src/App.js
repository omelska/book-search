import React from 'react';
import SaveBtn from "./components/saveBtn";
import DeleteBtn from "./components/deleteBtn";
import Img from "./components/img"

function App() {
  return (
   <div>
     <SaveBtn/>
     <Img url="../public/icon.png" alt="some img"/>
     <DeleteBtn />
   </div>
  );
}

export default App;
