import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function switchTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute("color-scheme");

    if (currentTheme === "dark") {
      root.setAttribute("color-scheme", "light");
    } else {
      root.setAttribute("color-scheme", "dark");
    }
  }

  function counterValueToDisplay() {
    if (count === 0) {
      return "Zero";
    } else if (count > 0) {
      return "Positive";
    } else {
      return "Negative";
    }
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-white text-black dark:bg-gray-900 dark:text-white">
        <div className="hero is-primary">
          <div className="hero-body">
            <h1 className="title text-6xl font-bold text-center">
              Counter App with Theme
            </h1>
          </div>
          <h2 className="text-2xl font-bold text-center mt-10">
            Counter : {count}
          </h2>
          <h2 className="text-2xl font-bold text-center mt-10">
            Value is{" "}
            <span
              className={
                count === 0
                  ? "text-yellow-500"
                  : count > 0
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {counterValueToDisplay()}
            </span>
          </h2>
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={increment}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Increment
            </button>
            <button
              onClick={decrement}
              className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 ml-4"
            >
              Decrement
            </button>
          </div>

          <div className="flex justify-center items-center mt-4">
            <button
              onClick={switchTheme}
              className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              Switch Theme
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
