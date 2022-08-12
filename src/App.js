import * as React from "react";

const numArr = [1, 2, 3, 4];
const exponentialNumbers = numArr.map((number) => number * number);
console.log(exponentialNumbers);

/**
 *
 * @returns renders to the browser
 */
const App = () => {
  const stories = [
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
      objectID: 1,
    },
  ];

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List list={stories} />
    </div>
  );
};
// We instantiate our components like <Item />

/**
 * React component
 * @returns Renders a search bar
 */
const Search = () => {
  //handler for an event
  const handleChange = (event) => {
    //synthetic event
    console.log(event);

    //value of target (here: element)
    console.log(event.target.value);
  };

  //onChange here is our handleChange event
  return (
    <div>
      <label htmlFor="search"> Search: </label>
      <input
        id="search"
        type="text"
        onChange={handleChange}
        onBlur={handleChange}
      />
    </div>
  );
};

/**
 * React component
 * @returns Will render the items out of our list object
 */
const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);

export default App;
