import React from 'react';
import App from './components/App';

function Root() {
  const abc = {
    hello: 10,
  };

  console.log(abc?.hello, 'abc?.hello');
  return (
    <div>
      <App />
    </div>
  );
}

export default Root;
