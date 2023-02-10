import React, { useContext, useEffect, useState } from "react";
import { InputContext } from "../context/InputContext.js";

function Cost() {
  const { adults, room, childrenArr } = useContext(InputContext);

  const [adultCost, setAdultCost] = useState(0);
  const [childrenCost, setChildrenCost] = useState(0);

  const AdultCost = (room, adults) => {
    setAdultCost(adults * 2);
    if (room === "1") {
      setAdultCost(adults * 5);
    } else if (room === "2") {
      setAdultCost(adults * 8);
    }
  };

  const ChildrenCost = (room, childrenArr, childrenCost) => {
    setChildrenCost(0);

    childrenArr.forEach((child) => {
      if (child.age >= 0 && child.age <= 5) {
        setChildrenCost((a) => a + child.numOfChildren * 3);
      } else if (child.age <= 12) {
        setChildrenCost((a) => a + child.numOfChildren * 4);
      }
    });

    if (room === "1") {
      setChildrenCost(0);
      childrenArr.forEach((child) => {
        if (child.age >= 0 && child.age <= 5) {
          setChildrenCost((a) => a + child.numOfChildren * 6);
        } else if (child.age <= 12) {
          setChildrenCost((a) => a + child.numOfChildren * 7);
        }
      });
    } else if (room === "2") {
      setChildrenCost(0);
      childrenArr.forEach((child) => {
        if (child.age >= 0 && child.age <= 5) {
          setChildrenCost((a) => a + child.numOfChildren * 9);
        } else if (child.age <= 12) {
          setChildrenCost((a) => a + child.numOfChildren * 10);
        }
      });
    }
  };
  useEffect(() => {
    AdultCost(room, adults);
    ChildrenCost(room, childrenArr);
  }, [room, adults, childrenArr]);

  return (
    <div className="">
      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold">Cost</h1>
        <div className="mt-4">
          <div className="flex justify-between mb-1">
            <span className="text-md text-gray-500">Item</span>
            <span className="text-md text-gray-500">Amount</span>
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-lg">Adult cost</span>
            <span className="text-lg">{adultCost}</span>
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-lg">Children cost</span>
            <span className="text-lg">{childrenCost}</span>
          </div>
        </div>
      </div>
      <div className="border border-1 m-3 border-gray-300 rounded-lg">
        <div className="flex justify-between mb-1 py-2 px-3">
          <span className="text-lg font-bold">Total Price</span>
          <span className="text-lg font-bold">{childrenCost + adultCost}</span>
        </div>
      </div>
    </div>
  );
}

export default Cost;
