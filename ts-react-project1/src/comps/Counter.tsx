import React, { useState } from 'react'

interface Props {
  
}

function Counter(){
  
  const [count,setCount] = useState<number>(0);
  const onIncrease = () => setCount(count+1);
  const onDecrease = () => setCount(count-1);


  type Information ={name:string,description:string};
  const [info, setInformation] = useState<Information | null>(null);

  type Todo = { id: number; text: string; done: boolean };
  const [todos, setTodos] = useState<Todo[]>([]);


  // const onPush = () => setTodos({})
  console.log(todos,'todos');
  console.log(info,'info');
  return(
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </>
  )

}

export default Counter
