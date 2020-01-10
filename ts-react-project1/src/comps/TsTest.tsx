import React,{useState} from "react";
import styled from 'styled-components';

interface Props {
  name: string;
  enterValue:string;
  onClick(e: React.MouseEvent): void;
  onSubmit(value:string): void;
}

function TsTest({  onClick,enterValue,onSubmit }: Props) {
  const [input,setInput] = useState('');

  const handleChange = (e:React.FormEvent<HTMLInputElement>):void=>{
    const {value} = e.currentTarget;
    setInput(value)
  }

  const handleKeyup = (e:React.KeyboardEvent):void=>{
    if(e.keyCode === 13){
      setInput(''); 
    }
  }
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>):void=>{
    e.preventDefault();
    onSubmit(input);
  }

  return (
    <Styled.TsTest>
      <div onClick={onClick}>Typescript</div>
      <form action="" onSubmit={handleSubmit}>
        <input 
          className="input"
          type="text" 
          onChange={handleChange}
          onKeyUp={handleKeyup}
          value={input}
        />
      </form>

      <p style={{fontSize:14}} className="result">
        {enterValue}
      </p>
    </Styled.TsTest>
  );
}

const Styled={
  TsTest:styled.div`
    .input{
      border-radius:5px;
      border:0;
      padding:5px 20px;
      margin-top:10px;
    }
    .result{
      min-height:20px;
    }
  `
}

export default TsTest;
