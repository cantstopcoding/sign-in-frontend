import "./App.css";
import React from "react";
import TokenContext from "./components/TokenContext";
import UsersContainer from "./containers/UsersContainer";

// creates a piece of global state
// const TokenContext = React.createContext();

const App = () => {
  const token = "";

  return (
    <div className="App">
      <TokenContext.Provider value={token}>
        <UsersContainer />
      </TokenContext.Provider>
    </div>
  );
};

export default App;

// const ThemeContext = React.createContext('light');

// class App extends React.Component {
//   render() {
//     // Use a Provider to pass the current theme to the tree below.
//     // Any component can read it, no matter how deep it is.
//     // In this example, we're passing "dark" as the current value.
//     return (
//       <ThemeContext.Provider value="dark">
//         <Toolbar />
//       </ThemeContext.Provider>
//     );
//   }
// }
