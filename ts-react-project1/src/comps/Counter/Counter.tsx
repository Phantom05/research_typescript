import React, { useReducer } from 'react'
import styled from 'styled-components';

interface Props {
  
}
interface State {
  
}

type Action ={type:"INCREASE"} | {type:"DECREASE"};
function reducer(state:number,action:Action):number{
  switch(action.type){
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      throw new Error("Unhandled action");
  }
}

function Counter(){
  const [count,dispatch] = useReducer(reducer,0);
  const onIncrease = () => dispatch({type:"INCREASE"});
  const onDecrease = () => dispatch({type:"DECREASE"});

  return(
    <Styled.Counter>
      <p>{count}</p>
      <button
        className="btn"
        onClick={onIncrease}
      >UP</button>
      <button
        className="btn"
        onClick={onDecrease}
      >DOWN</button>
    </Styled.Counter>
  )
}

const Styled={
  Counter:styled.div`
    .btn{
      border:0;
      border-radius:5px;
      padding:5px 10px;
      cursor: pointer;
      margin-right:10px;
      &:last-child{
        margin-right:0;
      }
    }
  
  `
}
export default Counter
