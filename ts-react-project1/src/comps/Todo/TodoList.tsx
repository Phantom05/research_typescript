import React, { useState } from 'react'
import TodoItem from './TodoItem';

interface Props {
  
}

interface TodoItemState{
  id:number;
  text:string;
  done:boolean;
}

interface State{
  input:string;
  todoItems:TodoItemState[];
}

// any script=>


let nextTodoId: number = 0;
function TodoList({}: Props) {
  const [input,setInput] = useState('');
  const [todoItems,setTodoItems] = useState<TodoItemState[]>([]);

  const onToggle = (id:number):void=>{
    const nextTodoItems:TodoItemState[] = todoItems.map(item=>{
      if(item.id === id){
        item.done = !item.done
      }
      return item;
    });
    setTodoItems(nextTodoItems)
  };

  const onSubmit = (e:React.FormEvent<HTMLFormElement>):void=>{
    e.preventDefault();
    const newItem:TodoItemState = {
      id:nextTodoId++,
      text:input,
      done:false
    };
    const nextTodoItems:TodoItemState[] = todoItems.concat(newItem);
    setInput('');
    setTodoItems(nextTodoItems);
  }

  const onchange = (e:React.FormEvent<HTMLInputElement>)=>{
    const {value} = e.currentTarget;
    setInput(value);
  }

  const onRemove = (id:number):void=>{
    const nextTodoItems: TodoItemState[] = todoItems.filter( item => item.id !== id);
    setTodoItems(nextTodoItems);
  }

  const todoItemList:React.ReactElement[] = todoItems.map(
    todo=>(
      <TodoItem 
        key={todo.id}
        done={todo.done}
        onToggle={()=>onToggle(todo.id)}
        onRemove={()=>onRemove(todo.id)}
        text={todo.text}
      />
    )
  );
  return (
    <div>
      <h1>Todos</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onchange} value={input}/>
        <button type="submit">Add</button>
      </form>
      <ul>
        {todoItemList}
      </ul>
    </div>
  )
}

export default TodoList;















