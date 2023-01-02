export const initialState={
    basket:[],
    user:null,
};
export const basketTotal=(basket)=>
basket?.reduce((amount,item)=>item.price+amount,0);
function reducer(state,action){
  if(action.type=='SET'){
    return{
      ...state,
      user:action.user,
    }
  }
   else if(action.type==='ADD'){
      return{
        ...state,
        basket:[...state.basket,action.item]
      };
    }
    else if(action.type==='REMOVE'){
      let newBasket=[...state.basket];
      const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);
      if(index>=0){
       newBasket.splice(index,1); 
      }
    return {...state,basket:newBasket};
    }
    return state;
}
export default reducer;