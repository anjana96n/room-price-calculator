import React, { useContext } from "react";
import { InputContext } from "../context/InputContext.js";

function FormData() {
  const {
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
  } = useContext(InputContext);

  const handleForm = (value) => {
    console.log(value);
    alert(value);
  };
  //Add child
  const addChild = () => {
    if (age.length === 0 || numOfChildren.length === 0) {
      alert("Fill both age and number of children");
    } else {
      setChildrenArr(
        (prev) => [...prev, { age, numOfChildren }],
        (setAge(""), setNumOfChildren(""))
      );
    }
  };

  const handleDeleteClick = (idx) => {
    //   if (index > -1) { // only splice array when item is found
    //   array.splice(index, 1); // 2nd parameter means remove one item only
    // }
    setChildrenArr((prev) => {
      prev.splice(idx, 1);
      return [...prev];
    });
  };

  return (
    <div className="px-6 py-4">
      {console.log(room)}
      <div className="flex justify-between">
        <span className="font-bold">Room Price Calculator </span>
        <button onClick={handleForm} className="text-sm">
          <span className="text-blue-600">Reset</span>
        </button>
      </div>

      <div className="mb-4">
        <select
          className="peer form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option value="0">Standard Double City View</option>
          <option value="1">Superior Twin City View</option>
          <option value="2">Superior Twin Sea View</option>
        </select>
      </div>

      <div className="mb-4">
        <input
          name="adult"
          required
          type="number"
          min="0"
          value={adults}
          // only positive value
          onChange={(e) => {
            const value = e.target.value === "" ? "" : parseInt(e.target.value);
            if (value === "" || value >= 0) {
              setAdults(value);
            }
          }}
          placeholder="No of Adults"
          className="peer form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div className="flex gap-10">
        <div className="">
          <input
            name="age"
            type="number"
            min="0"
            max="12"
            placeholder="Age"
            value={age}
            //Only value between 0-12
            onChange={(e) => {
              const value =
                e.target.value === "" ? "" : parseInt(e.target.value);
              if (value === "" || (value >= 0 && value <= 12)) {
                setAge(value);
              }
            }}
            //onChange={(e) => setAge(e.target.value)}
            className="peer form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="">
          <input
            name="children"
            required
            type="number"
            min="0"
            placeholder="No of Children"
            value={numOfChildren}
            //only positive
            onChange={(e) => {
              const value =
                e.target.value === "" ? "" : parseInt(e.target.value);
              if (value === "" || value >= 0) {
                setNumOfChildren(value);
              }
            }}
            className="peer form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </div>
      </div>
      <button onClick={addChild} className="text-blue-500 text-sm">
        Add child
      </button>
      <div className="flex justify-between mb-1">
        <span className="text-lg">Age</span>
        <span className="text-lg">Number of Children</span>
        // map childrens
      </div>
      {childrenArr.map((val, i) => (
        <div key={i} className="flex justify-between mb-1">
          <span className="text-lg">{val.age}</span>
          <span className="text-lg">{val.numOfChildren}</span>
          <button onClick={() => handleDeleteClick(i)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default FormData;
