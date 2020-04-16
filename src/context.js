import React , {createContext ,useState} from "react" ;

//Create Context
export const GlobalContext = createContext();

//Provider Component
export const GlobalProvider = (props) => {
    const [transactions , setTransaction] = useState(0);

    // const [state, dispatch] = useReducer(Action, transactions);
  
    // Actions
    // function gram(transaction) {
    //   dispatch({
    //     type: 'GRAM',
    //     payload: transaction
    //   });
    // }
  
    // function kilogram(transaction) {
    //   dispatch({
    //     type: 'KILOGRAM',
    //     payload: transaction
    //   });
    // }

    // function ounce(transaction) {
    //     dispatch({
    //       type: 'OUNCE',
    //       payload: transaction
    //     });
    //   }
  
    return (
    <GlobalContext.Provider value={[transactions , setTransaction]}>
      {props.children}
    </GlobalContext.Provider>
    );
  }