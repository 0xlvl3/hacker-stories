import * as React from "react";

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 4,
    objectID: 0,
  },
];
const numArr = [1, 2, 3, 4];
const exponentialNumbers = numArr.map((number) => number * number);
console.log(exponentialNumbers);

/**
 *
 * @returns renders to the browser
 */
const App = () => {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />

      <Item />
      <List />
    </div>
  );
};
// We instantiate our components like <Item />

/**
 * React component
 * @returns Renders a search bar
 */
const Search = () => {
  const handleFocus = (e) => {
    console.log(e);
    console.log(`Focused`);
  };

  const handleChange = (event) => {
    //synthetic event
    console.log(event);

    //value of target (here: element)
    console.log(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <input id="search" type="text" onFocus={handleFocus} />
    </div>
  );
};

/**
 * React component
 * @returns Will render the items out of our list object
 */
const Item = () => {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <br />
          <span>{item.author}</span>
          <br />
          <span>{item.num_comments}</span>
          <br />
          <span>{item.points}</span>
        </li>
      ))}
    </ul>
  );
};

const List = () => {
  return (
    <ol>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>Right</li>
    </ol>
  );
};

export default App;
