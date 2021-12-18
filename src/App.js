import React from "react";
import "./App.css";
// import { Route } from "react-router-dom"
import HomePage from "./pages/homepage/homepage.componenet";

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
);

// function App() {
//   return (
//     <div>
//       <Route path="/" component={HomePage} />
//       <Route path="/hats" component={HatsPage} />
//     </div>
//   );
// }
function App() {
  return (
    <div>
      <HomePage/>
      <HatsPage/>
    </div>
  );
}

export default App;
