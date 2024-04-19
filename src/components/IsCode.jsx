import React, { useContext, useState } from "react";
import GlobalContext from "../GlobalContext";

function IsCode() {
  const {code, setCode, codeSnippet, setCodeSnippet} = useContext(GlobalContext)

  return (
    <div>
      <div className="code-component flex flex-col gap-2">
        <span className="text-orange-300 text-md">
          Do you want to add code snippet ?
        </span>
        <div className="flex gap-2 items-center">
          <label htmlFor="isCode">Yes</label>
          <input
            type="radio"
            onChange={() => {
              setCode(true);
            }}
            name="isCode"
            id="isCode"
          />
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="isCode">No</label>
          <input
            type="radio"
            onChange={() => {
              setCode(false);
            }}
            name="isCode"
            id="isCode"
          />
        </div>
      </div>

      {
        code ? <div className="flex flex-col gap-2">

          <span className="text-green-500">Enter the code</span>
          <textarea
                rows="3"
                className="border border-gray-400 pl-2 block w-full rounded-md py-1.5 text-gray-900 shadow-sm sm:text-sm sm"
                onChange={(e) => {setCodeSnippet(e.target.value)}}
                placeholder="Enter the code "
              ></textarea>
        </div> : ""
      }
    </div>
  );
}

export default IsCode;
