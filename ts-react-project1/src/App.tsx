import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
// import Greetings from './comps/Greetings';
// import Counter from './comps/Counter';
// import MyForm from './comps/MyForm';
// import Test from './comps/Test';
import TodoList from './comps/Todo/TodoList';
import Checker from './comps/Checker';
import TsTest from './comps/TsTest';



function App(){
  const [value,setValue] = useState('');
  const handleClick = (e:React.MouseEvent):void=>{
    const {target} = e;
    console.log(target);
  }
  const handleSubmit = (value:string):void=>{
    setValue(value)
  }
  return(
    <div className="App">
      <header className="App-header">
        <span>
          <img src={logo} className="App-logo small" alt="logo" />
          {/* <TodoList/> */}
          <TsTest 
            name="hell oworld"
            onClick={handleClick}
            enterValue={value}
            onSubmit={handleSubmit}
          />
        </span>
      </header>
    </div>
  )
}

export default App;



// function App(){

//   const onClick = (name:string) =>{
//     console.log(`${name} says hello`);
//   }
//   const onSUbmit = (form:{name:string,description:string})=>{
//     console.log(form);
//   }
//   const onChange= (val:string)=>{
//     console.log('parent : ',val);
//   }
  
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//         {/* <Greetings  name="Chang"  onClick={onClick} />
//         <Counter /> */}
//         {/* <Test 
//           name="Test HEllo"
//           onChange={onChange}
//         /> */}
//         {/* <MyForm 
//           onSubmit={onSUbmit}
//         /> */}
//       </header>
//     </div>
//   );
// }