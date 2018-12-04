import * as types from '../Constants/actionTypes';

let initialState = [
    {name:"abc"}
]
let reducer = (state = initialState,action) =>{
    switch (action.type){
        case types.LIST_ALL:
        return state;
        default:
        break;
    }
    return state;
}
export default reducer;