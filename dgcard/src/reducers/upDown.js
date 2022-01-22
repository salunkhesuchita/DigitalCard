const initialState =0;
// import {action} from '../actions/index.js'

const changeNumber = (state=initialState,action) =>{
   switch (action.type) {
       case "INCREMENT":
           return state+1;
           break;
        case "DECREMENT":
            return state-1;
            break;
   
       default: return state;
           break;
   }
}

export default changeNumber;