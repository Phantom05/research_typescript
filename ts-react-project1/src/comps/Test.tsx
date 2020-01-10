import React, { useState,useEffect } from 'react'
import axios,{AxiosResponse} from 'axios';

type TestProps={
  name:string;
  onChange:(val:string)=>void;
}

function Test({name,onChange}:TestProps){
  const [value,setValue] = useState<number>(0);
  const [data,setData] = useState([]);

  const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {value} = e.target;
    onChange(value)
  };

   async function getAjaxData(){
    const conf={
      url:`https://jsonplaceholder.typicode.com/todos`,
    }
    return await axios(conf)
  }

  useEffect(()=>{
    const fetchData = async ()=>{
      const {data} = await getAjaxData();
      setData(data)
    }
    fetchData();
  },[]);

  console.log(data);

  return (
    <div>
      <p>/post , /comments, /albums, /photos, /todos, /users</p>
      <form action="">
        <input 
          type="text"
          onChange={handleChange}
        />
        <button>List Up</button>
      </form>
      {data && 
      <ul>
        {/* {data.map((item:{id:number,title:string})=>{
          <li key={item.id}>{item.title}</li>
        })}   */}
      </ul>}
    </div>
  )
}

export default Test
