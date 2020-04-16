import React, {useContext} from 'react';
import { GlobalContext } from '../context';

export const Ounce = ({transactions}) => {

  return (
   
<React.Fragment>
       <div className="card card-success mb-2">
            <div className="card-block">
                <h4>Ounces:</h4>
  <div id="gramsOutput">{transactions * 16}</div>
                </div>
        </div>
</React.Fragment>      
  )
}
