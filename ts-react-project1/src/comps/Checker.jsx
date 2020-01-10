import React from 'react';


const TypeChecker = (function () {
  function typeError(){
    throw new TypeError('타입을 확인 해주세요.');
  }
  function TypeChecker(types) {
    return function (args) {
      let new_types = types;
      const typeList = TypeChecker.typeList;
      const isArray = Array.isArray(types);
      if(new_types == null) typeError();
      if(!isArray) new_types = [types];

      const hasType = new_types.every(type=>{
        let item = type;
        if(item[0] === '!'){
          item = item.slice(1);
        }
        if(item[item.length-1] === '?'){
          item = item.slice(0,item.length-1);
        }

        console.log(item);
        
        return typeList.indexOf(item) !== -1
      });
      if(!hasType) typeError()
      // case1 타입 종류 체크 완료


      


      // console.log(types, 'types');
      // console.log(args, 'args');
      if (Array.isArray(types)) {console.log('다수의 조건');
        
      } else { console.log('1개의 조건');
        // args
      }

    }
  }
  TypeChecker.__proto__.typeList = ['string', 'boolean', 'null', 'undefined', 'array', 'object','number'];
  return TypeChecker;
})();

/**
 * 
 * @param {*} a string
 * @param {*} b number
 * @param {*} c boolean
 */
TypeChecker('!number?')(2)
function hello(a, b, c) {
  TypeChecker('number')(a)
  if (
    TypeChecker(['string', 'number', '!boolean?'])([a, b, c])
  ) {

  }
}

const Checker = () => {
  // hello('3', 32, true)
  return (
    <div>

    </div>
  );
};

export default Checker;


/**
 *
 * @param {*} a string
 * @param {*} b number
 * @param {*} c boolean
 */
// function Hello(a,b,c){
//   if(typeof b !== number  && arguments.length <3){
//     c = b;
//     b.defineProperty(
//       {type:number}
//     )
//   }
//   if(typeChecker(['string','number','!boolean'])){
//     return new Error(`Typed is not currect.`)
//   }
//   console.log(a,b,c)
// }


// Hello('hello',true);

// function typeChecker(arr){

// }

