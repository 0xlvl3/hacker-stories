import * as React from "react";

const welcome = {
  title: "React",
  greeting: "Hey",
};

const num = 10;
const numArr = [1, 2, 3, 4];
const float = 1.1;

/**
 *
 * @param {string} title
 * @returns title string passed in will be returned
 */
function getTitle(title) {
  return title;
}

const exponentialNumbers = numArr.map(function (number) {
  return number * number;
});
console.log(exponentialNumbers);

/**
 *
 * @returns renders to the browser
 */
function App() {
  return (
    <div>
      <h1>
        {welcome.greeting} {getTitle("React")} {float} {num} {numArr}
      </h1>
      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
