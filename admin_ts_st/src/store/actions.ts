
export const INCREASE = "counter/INCREASE" as const;
export const DECREASE = "counter/DECREASE" as const;
export const INCREASE_BY = "counter/INCREASE_BY" as const;
export const DECREASE_BY = "counter/DECREASE_BY" as const;


export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff
});
export const decreaseBy = (diff: number) => ({
  type: DECREASE_BY,
  payload: diff
});




interface actionProps{
  [key:string]:string
}
function setAction(obj:actionProps):object{
const INDEX:string = obj.INDEX;
const new_obj:actionProps ={};
for(const item in obj){
  if(item !== 'INDEX'){
    new_obj[item] = `${INDEX}/${item}`
  }
}
return new_obj
}

export const COUNTER = setAction({
INDEX:'counter',
INCREASE:'INCREASE',
DECREASE:"DECREASE",
INCREASE_BY:"INCREASE_BY",
DECREASE_BY:"DECREASE_BY"
});

console.log(COUNTER,'COUNTER!');


// export function makeActionCreator(actionType,payload) {
//   return store.dispatch({ type: actionType, payload:payload })
// }
// export function makeAsyncCreateActions(actions){
//   const ActionsFunction = (payload)=>makeActionCreator(actions.INDEX,payload);
//   return (api)=>{
//     if(typeof api !== 'function') new Error('api must be Function');
//     ActionsFunction.request = (data)=>  api(data);
//     ActionsFunction.pending = (payload)=>makeActionCreator(actions.PENDING,payload);
//     ActionsFunction.success = (payload)=>makeActionCreator(actions.SUCCESS,payload);
//     ActionsFunction.failure = (payload)=>makeActionCreator(actions.FAILURE,payload);
//     return ActionsFunction
//   }
// }