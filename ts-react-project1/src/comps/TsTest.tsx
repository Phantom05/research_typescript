import React,{useState} from "react";

interface Props {
  name: string;
  enterValue:string;
  onClick(e: React.MouseEvent): void;
  onSubmit(value:string): void;
}

function TsTest({ name, onClick,enterValue,onSubmit }: Props) {
  const [input,setInput] = useState('');

  const handleChange = (e:React.FormEvent<HTMLInputElement>):void=>{
    const {value} = e.currentTarget;
    setInput(value)
  }

  const handleKeyup = (e:React.KeyboardEvent):void=>{
    if(e.keyCode === 13){
      console.log('1');
      setInput(''); 
    }
  }
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>):void=>{
    e.preventDefault();
    onSubmit(input);
    console.log('submit');

  }
  return (
    <>
      <div onClick={onClick}>Typescript</div>
      <form action="" onSubmit={handleSubmit}>
        <input 
          type="text" 
          onChange={handleChange}
          onKeyUp={handleKeyup}
          value={input}
        />
      </form>

      <p style={{fontSize:14}}>
        {enterValue}
      </p>
    </>
  );
}

export default TsTest;
