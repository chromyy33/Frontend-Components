import React, { useState, useRef } from "react";

function ToastSystem() {
  const [duration, setDuration] = useState(3);
  const [toastMessage, setToastMessage] = useState("This is a toast");
  const [toastType, setToastType] = useState("S");
  const [toastPosition, setToastPosition] = useState(["top", "left"]);
  const toastContainer = useRef(null);
  //duration,toastMessage, toastType,toastPosition
  function showToast(d, tM, tT, tP) {
    console.log(d, tM, tP, tT);
  }
  return (
    <div className="relative " ref={toastContainer}>
      <div className="my-10 flex flex-col items-center min-w-[300px] w-[45%] mx-auto">
        <label htmlFor="Position" className="text-sm">
          Position
        </label>
        <select name="Position" id="Position" className="custom-select">
          <option disabled>Select Position</option>
          <option value="Top">Top</option>
          <option value="Bottom">Bottom</option>
          <option value="Left">Left</option>
          <option value="Right">Right</option>
        </select>
        <label htmlFor="type" className="text-sm">
          Type
        </label>
        <select
          name="type"
          id="type"
          className="custom-select"
          onChange={function (e) {
            setToastType(e.target.value);
          }}
        >
          <option disabled>Select Type</option>
          <option value="Success">Success</option>
          <option value="Error">Error</option>
          <option value="Warning">Warning</option>
          <option value="Info">Info</option>
        </select>
        <label htmlFor="message" className="text-sm">
          Message
        </label>
        <input
          type="text"
          id="message"
          className="custom-select text-input"
          placeholder="Enter a message"
          value={toastMessage}
          onInput={function (e) {
            setToastMessage(e.target.value);
          }}
        />
        <div className="w-[100%]">
          <label htmlFor="duration" className="text-sm">
            Duration
          </label>
          <input
            id="duration"
            type="range"
            min={1}
            max={10}
            onChange={(e) => setDuration(e.target.value)}
            defaultValue={3}
            className="w-[100%]"
          />
          <span>{duration}s</span>
        </div>
        <button
          className="counter-btn bg-blue-500! text-white rounded-sm"
          onClick={function () {
            showToast(duration, toastMessage, toastPosition, toastType);
          }}
        >
          Show Toast
        </button>
      </div>
    </div>
  );
}

export default ToastSystem;
