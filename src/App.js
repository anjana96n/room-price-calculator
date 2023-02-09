//import logo from "./logo.svg";
// import './App.css';
import React, { useState } from "react";
import Cost from "./components/Cost";
import FormData from "./components/FormData";

function App() {
  // const [authState, setAuthState] = useState({
  //   room: 0,
  //   adults: 0,
  //   numOfChildren: 0,
  //   age: 0,
  // });
  // const [authState, setAuthState] = useState({});

  return (
    <div className="App max-h-screen py-6 px-12">
      <div className="sm:grid grid-cols-5 gap-4">
        <div className="col-span-2 border border-1 border-gray-400 rounded-lg">
          <FormData />
        </div>
        <div className="col-span-3">
          <div className="border border-1 rounded-lg border-gray-400">
            <Cost />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
