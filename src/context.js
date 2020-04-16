import React , {createContext ,useState} from "react" ;

//Create Context
export const GlobalContext = createContext();

//Provider Component
export const GlobalProvider = (props) => {
    const [transactions , setTransaction] = useState(0);
  
    return (
    <GlobalContext.Provider value={[transactions , setTransaction]}>
      {props.children}
    </GlobalContext.Provider>
    );
  }