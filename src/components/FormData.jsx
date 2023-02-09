import React, { useContext, useState } from "react";
import { InputContext } from "../context/InputContext";

function FormData() {

  const { numberOfAdults, numberOfChildrenCat1, numberOfChildrenCat2, roomType, setNmberOfAdults, setNumberOfChildrenCat1, setNumberOfChildrenCat2, setRoomType } = useContext(InputContext)

  const [childrenAge, setChildrenAge] = useState();
  const [childrenNumber, setChildrenNumber] = useState();
  // const [adults, setAdults] = useState("");
  // const [room, setRoom] = useState("");

  const [childrenAgeArr, setChildrenAgeArr] = useState([]);
  const [childrenCountArr, setChildrenCountArr] = useState([]);

  // for reset button
  const handleForm = (value) => {
    console.log(value);
    alert(value);
  };

  const addChild = () => {
    if (childrenAge === null || childrenNumber === null) {
      alert("Fill both age and number of children");
    }
    else{
      if(childrenAge>=0 && childrenAge<=12){
        childrenAge<=5 ? setNumberOfChildrenCat1(numberOfChildrenCat1+childrenNumber) : setNumberOfChildrenCat2(numberOfChildrenCat1+childrenNumber)
       
        while(childrenNumber<=0){
          // add childrens age
          // add childrens count

        }

      
        
        // setChildrenAgeArr(...childrenAgeArr+1)
        // setChildrenCountArr(...childrenCountArr+1)
      }
    }
  };

  const handleDeleteClick = (idx) => {
    //   if (index > -1) { // only splice array when item is found
    //   array.splice(index, 1); // 2nd parameter means remove one item only
    // }
    // setChildrenArr((prev) => {
    //   prev.splice(idx, 1);
    //   return [...prev];
    // });
  }

  return (
    <div className="px-6 py-4">
      {console.log(roomType)}
      <div className="flex justify-between">
        <span className="font-bold">Room Price Calculator </span>
        <button onClick={handleForm} className="text-sm">
          <span className="text-blue-600">Reset</span>
        </button>
      </div>
      <div className="mb-4">
        {/* <input
          name="roo"
          required
          type="number"
          min="0"
          value={adults}
          onChange={(e) => setAdults(e.target.value)}
          placeholder="No of Adults"
          className="peer form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        /> */}

        <select
          className="peer form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
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
          value={numberOfAdults}
          onChange={(e) => setNmberOfAdults(e.target.value)}
          placeholder="No of Adults"
          className="peer form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>


{/* children section starts */}
      <div className="flex gap-10">
        <div className="">
          <input
            name="age"
            required
            type="number"
            min="0"
            placeholder="Age"
            value={childrenAge}
            onChange={(e) => setChildrenAge(e.target.value)}
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
            value={childrenNumber}
            onChange={(e) => setChildrenNumber(e.target.value)}
            className="peer form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />

        </div>
      </div>
      <button onClick={addChild} className="text-blue-500 text-sm">
        Add child
      </button>
{/* initial children details adding closed */}


      <div className="flex justify-between mb-1">
        <span className="text-lg">Age</span>
        <span className="text-lg">Number of Children</span>
      </div>
      {childrenAgeArr.map((val, i) => (
        <div key={i} className="flex justify-between mb-1">
          <span className="text-lg">{val.age}</span>
          <span className="text-lg">{val.numberOfChildren}</span>
          <button onClick={() => handleDeleteClick(i)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default FormData;
