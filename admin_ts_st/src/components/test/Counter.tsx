import React, { ReactElement, useState } from "react";
import styled from "styled-components";
interface Props {
  count: number;
  onIncrease(): void;
  onDecrease(): void;
  onIncreaseBy: (diff: number) => void;
  onDecreaseBy: (diff: number) => void;
  onGraphQL():void;
}

function Counter({
  count,
  onIncrease,
  onDecrease,
  onIncreaseBy,
  onDecreaseBy,
  onGraphQL
}: Props): ReactElement {
  const [value,setValue] = useState('');

  const handleChange = (e:React.FormEvent<HTMLInputElement>)=>{
    const {currentTarget:{value}} = e;
    setValue(value);
  }
  return (
    <Styled.Counter>
      <h4>Counter</h4>
      <p>{count}</p>
      <div>
        <input 
          type="text" 
          className="control__input"
          onChange={handleChange}
          value={value}
        />
        <button 
          className="btn"
          onClick={()=>onDecreaseBy(+value)}>-</button>
        <button 
          className="btn"
          onClick={()=>onIncreaseBy(+value)}>+</button>
      </div>
      <button 
        className="btn" 
        onClick={onIncrease}>+1</button>
      <button 
        className="btn" 
        onClick={onDecrease}>-1</button>
      <button 
        className="btn" 
        onClick={() => onIncreaseBy(5)}>+5</button>
      <button 
        className="btn" 
        onClick={() => onDecreaseBy(5)}>-5</button>

      <br/>
      <button
        className="btn"
        onClick={onGraphQL}
      >GraphQL</button>
    </Styled.Counter>
  );
}

const Styled = {
  Counter: styled.div`
    .btn {
      border-radius: 5px;
      border: 0;
      padding: 5px 20px;
      margin-right: 5px;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
      &:active {
        opacity: 0.5;
      }
    }
    .control__input{
      border-radius:5px;
      margin-right:5px;
      padding: 5px 20px;
    }
  `
};

export default Counter;
