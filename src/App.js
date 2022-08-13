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

  console.log(`App renders`);

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <Test words={"This is a test"} myColor="red" />
      <List list={stories} />
    </div>
  );
};
// We instantiate our components like <Item />

/**
 * React component using React State
 * @returns Renders a search bar
 */
const Search = () => {
  console.log("Search renders");
  const [searchTerm, setSerachTerm] = React.useState("");

  //handler for an event
  const handleChange = (event) => {
    //synthetic event
    console.log(event);

    //value of target (here: element), using setSearchTerm() with useState we can now see our typed input below the search box.
    setSerachTerm(event.target.value);
  };

  //onChange here is our handleChange event
  return (
    <div>
      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};

/**
 * React component
 * @returns Will render the items out of our list object
 */
const List = (props) => (
  console.log("List renders"),
  (
    <ul>
      {props.list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  )
);

const Item = (props) => (
  console.log("Item renders"),
  (
    <li>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li>
  )
);

/*
//PROPS
///

// using a props to display words
const Test = (props) => {
  console.log(`Test rendered`);
  return <p>{props.words}</p>;
};

//assigning words object to props and then returning words itself as it is declared
const Test = (props) => {
  const { words } = props;
  return <p>{words}</p>;
};

//using destructing to assign a prop
const Test = ({ words }) => {
  return <p>{words}</p>;
};
*/

//destructing multiple props within one
const Test = ({ words, myColor }) => {
  return <p style={{ color: myColor }}>{words}</p>;
};

export default App;
