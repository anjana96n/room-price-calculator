import React from "react";

function Cost({ adultCost, childrenCost }) {
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
