import React, { useState, useEffect } from "react";

function ToastSystem() {
  const [duration, setDuration] = useState(3);
  return (
    <div className="relative">
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
        <label htmlFor="tyoe" className="text-sm">
          Type
        </label>
        <select name="type" id="type" className="custom-select">
          <option disabled>Select Type</option>
          <option value="Success">Success</option>
          <option value="Error">Error</option>
          <option value="Warning">Warning</option>
          <option value="Info">Info</option>
        </select>
        <label htmlFor="Message" className="text-sm">
          Message
        </label>
        <input type="text" id="message" className="custom-select text-input" />
        <div className="w-[100%]">
          <label htmlFor="tyoe" className="text-sm">
            Duration
          </label>
          <input
            type="range"
            min={1}
            max={10}
            onChange={(e) => setDuration(e.target.value)}
            defaultValue={3}
            className="w-[100%]"
          />
          <span>{duration}s</span>
          <div className="toast">
            <p>Message    <span>x</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastSystem;
