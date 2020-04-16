import React , {useState , useContext} from "react";
import { GlobalContext } from './context';
import {Gram} from "./components/Gram";
import {Kilogram} from "./components/Kilogram";
import {Ounce} from "./components/Ounce";

export const Input = () =>{
    
    const [transactions , setTransaction ]=useContext(GlobalContext);
    const [number,setNumber] = useState();
   
    const onChange = e => {
        e.preventDefault();
        setNumber(e.target.value)
 
        setTransaction({transactions : e.target.value});
      
      }
  
   
    //  console.log({value});
    return(
        <React.Fragment>
            <div className="col-md-6 offset-md-3 wrap">

        <h1 className="display-4 text-center mb-3">Weight Converter</h1>
        <form>
              <div className="form-group">
                <input type="number" className="form-control form-control-lg"  value={number} onChange={onChange} placeholder="Enter Pounds..." />
              </div>
            </form> 
        <Gram transactions={transactions.transactions}/>
        <Kilogram transactions={transactions.transactions} />
        <Ounce transactions={transactions.transactions} />
        </div>
        </React.Fragment>
    )
}