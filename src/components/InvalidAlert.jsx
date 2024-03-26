import React from 'react'

function InvalidAlert() {
  return (
    <div className="alert-box">
      <div
        class="bg-red-100 border-t-4 border-red-700 rounded-b text-red-900 px-4 py-3 shadow-md"
        role="alert"
      >
        <div class="flex">
          <div class="py-1">
            <svg
              class="fill-current h-6 w-6 text-red-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M3 8l2-2 4 4 7-7 2 2-9 9-6-6z" />
            </svg>
          </div>
          <div>
            <p class="font-bold">Alert !</p>
            <p class="text-sm">Please fill all the required fields</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvalidAlert