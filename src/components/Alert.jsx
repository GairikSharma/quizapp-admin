import React from "react";
import "../styles/Alert.css"

function Alert() {
  return (
    <div className="alert-box">
      <div
        class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
        role="alert"
      >
        <div class="flex">
          <div class="py-1">
            <svg
              class="fill-current h-6 w-6 text-teal-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M3 8l2-2 4 4 7-7 2 2-9 9-6-6z" />
            </svg>
          </div>
          <div>
            <p class="font-bold">Congratulations !</p>
            <p class="text-sm">Question Added</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alert;
