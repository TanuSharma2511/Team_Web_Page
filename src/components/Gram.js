import React, {useContext} from 'react';
import { GlobalContext } from '../context';

export const Gram = ({transactions}) => {
    
    console.log({transactions});
  return (
   
<React.Fragment>
       <div className="card card-primary mb-2">
            <div className="card-block">
                <h4>Grams:</h4>
               
  <div id="gramsOutput">{transactions/ 0.0022046}</div>
                </div>
        </div>
</React.Fragment>      
  )
}
