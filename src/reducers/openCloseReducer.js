import { OPEN } from '../actions/types';
import { CLOSE } from '../actions/types';
import { GET_PRODUCT } from '../actions/types';
import { storeProducts} from "../data";

//States used in the web page
const initialState = {
 products:storeProducts,
 product:null,
 modalOpen: false,
 modalProduct : null
};

export default function(state = initialState, action) {
  switch (action.type) {
    //Case for opening the modal
    case OPEN:
      return {
        ...state,
        modalOpen : true,
       

      };

      //Case for closing the modal
      case CLOSE:
        return {
          ...state,
          modalOpen : false,
          product : null
  
        };

      //Case for get the required information using card
      case GET_PRODUCT:
        return{
          ...state,
          product: state.products.find(item => item.id===action.payload)
        }
      
      
    default:
      return state;
  }
}
