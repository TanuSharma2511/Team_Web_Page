import { OPEN } from './types';
import { CLOSE } from './types';
import { SET_PRODUCT } from './types';
import { GET_PRODUCT } from './types';
import {storeProducts} from "../data";

//To open the modal
export const openModal = (id) => dispatch => {
     dispatch(getItem(id));
    dispatch({
      type: OPEN,
      payload:id
    });
  };

  //To close the modal
export const closeModal = () => dispatch => {
    dispatch({
      type: CLOSE,
    });
  };  

  //To get the specific information using card
  export const getItem = id => dispatch => {
    dispatch({
      type: GET_PRODUCT,
      payload: id
    });
  };

