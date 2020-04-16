import React, {useContext} from 'react';
import { GlobalContext } from '../context';

export const Kilogram = ({transactions}) => {


  return (
   
<React.Fragment>
       <div className="card card-danger mb-2">
            <div className="card-block">
                <h4>Kilograms:</h4>
  <div id="gramsOutput">{transactions / 2.2046}</div>
                </div>
        </div>
</React.Fragment>      
  )
}
