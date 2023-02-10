import React, { createContext, useState } from "react";

export const InputContext = createContext();

function InputContextProvider(props) {
  const [age, setAge] = useState("");
  const [numOfChildren, setNumOfChildren] = useState("");
  const [adults, setAdults] = useState("");
  const [room, setRoom] = useState("");

  const [childrenArr, setChildrenArr] = useState([]);
  return (
    <InputContext.Provider
      value={{
        age,
        setAge,
        numOfChildren,
        setNumOfChildren,
        adults,
        setAdults,
        room,
        setRoom,
        childrenArr,
        setChildrenArr,
      }}
    >
      {props.children}
    </InputContext.Provider>
  );
}

export default InputContextProvider;
