


import React,{useState} from 'react';

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  const onChange = e => {
    const { target: { value } } = e;
    setValue(value);
  };
  return { value, onChange };
}

const Test = () => {
  const name = useInput("");

  console.log(name);

  return (
    <div>
      <input 
        type="text"
        {...name}
      />

    </div>
  );
};

export default Test;



// const changeObj ={
//   email       : emailValidator,
//   name        : isNameValidator,
//   phoneNumber : isNumberValidatoue,
//   address     : isAddressValidator,
// }
// const isValue = changeObj[id];
// if(isValue){
//   this.setState(isValue(value));
// }
