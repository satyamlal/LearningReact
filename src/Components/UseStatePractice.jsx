import React, { useState } from "react";

const UseStatePractice = () => {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div className="w-full h-screen">
      <h1 className="w-full h-20 bg-zinc-400 flex items-center text-zinc-700 pl-12 font-bold">
        Practicing useState
      </h1>
      <div className="px-30 mt-10">
        {val.map((item) => (
          <h1>{item}</h1>
        ))}
        <button
          onClick={() =>
            setVal(val.filter((item, index) => index != val.length - 1))
          }
          className="px-12 py-4 bg-blue-400 rounded-full"
        >
          Clear
        </button>

        <button
          onClick={() =>
            setVal((prev) => [
              ...prev,
              prev.length > 0 ? prev[prev.length - 1] + 1 : 1,
            ])
          }
          className="px-12 py-4 bg-blue-400 rounded-full"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default UseStatePractice;
