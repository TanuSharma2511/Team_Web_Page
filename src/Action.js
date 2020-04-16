export default(state , action) =>{
    switch(action.type){
        case "GRAM":
            return{
             ...state,
             transitions:action.payload / 0.0022046 
            }
        case "KILOGRAM":
            return{
                ...state,
            transitions:action.payload / 2.2046     
             }
        case "OUNCE":
            return{
                ...state,
            transitions:action.payload * 16      
            }  
            default:
                return state;   
    }
}