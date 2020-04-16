import React , {useEffect , useState} from "react";
import "./App.css";
import {GlobalProvider} from"./context";
import {Input} from "./Input";

function App() {
   return (
     <GlobalProvider>
       
       <div className="container">
         <Input />

       </div>
     </GlobalProvider>
   );
 }

export default App;
