import React from "react";
import InsertData from "./components/InsertData/InsertData";
import "./App.css";

function App() {
  // const [user, setUser] = useState([]);

  // const onAddUserHandler = (currentDetails) => {
  //   setUser((prevUser) => {
  //     return [currentDetails, ...prevUser];
  //   });
  // };

  return (
    <div className="App">
      <header className="App-header">
        <InsertData />
        {/* <InsertData addUser={onAddUserHandler} /> */}
      </header>
    </div>
  );
}

export default App;
