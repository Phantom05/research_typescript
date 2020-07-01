import React from "react";
import Hello from "components/Hello";

import "../styles/index.css";

function App() {
  return (
    <div>
      <h1>
        <Hello title="TypeScript" />
      </h1>
    </div>
  );
}

// class App extends React.PureComponent<IAppProps, IAppState> {
//   render() {
//     return (
//       <div>
//         <h1>
//           <Hello title="TypeScript" />
//         </h1>
//       </div>
//     );
//   }
// }

export default App;
