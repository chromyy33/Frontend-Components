import React, { useState, useEffect } from "react";

function Counter() {
  // Helper to get number from localStorage or return default
  const getStoredNumber = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    return saved !== null ? Number(saved) : defaultValue;
  };

  const [count, setCount] = useState(() => getStoredNumber("count", 0));
  const [step, setStep] = useState(() => getStoredNumber("step", 1));

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => {
    localStorage.setItem("step", step);
  }, [step]);

  function handleIncrement() {
    setCount((c) => c + step);
  }

  function handleDecrement() {
    setCount((c) => c - step);
  }

  function resetCount() {
    setCount(0);
  }

  function handleStep(e) {
    setStep(+e.target.value);
  }

  return (
    <div className="mt-10 flex flex-col items-center">
      <p className="currentcount text-[86px]">{count}</p>
      <div className="flex gap-2">
        <button className="counter-btn text-[18px]" onClick={handleDecrement}>
          &#8722;
        </button>
        <button className="counter-btn text-[18px]" onClick={handleIncrement}>
          +
        </button>
      </div>
      <button className="counter-btn mt-2 reset" onClick={resetCount}>
        Reset
      </button>

      <input
        onChange={handleStep}
        id="step"
        value={step}
        type="number"
        inputMode="numeric"
        className="w-[86px] pl-3 py-1.25 text-center border border-[lightgrey] my-2 outline-gray-200"
      />
      <label className=" mx-auto" htmlFor="step">
        Increment/Decrement
      </label>
    </div>
  );
}

export default Counter;
