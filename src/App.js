import * as React from "react";

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

  // console.log(`App renders`);

  const [searchTerm, setSearchTerm] = React.useState("React"); //declare state within component which depend on the state can read (via props) and update (via callback handler)

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchStories = stories.filter((story) => {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />

      <hr />
      <List list={searchStories} />
      {/* <Test words={"This is a test"} myColor="red" /> */}
    </div>
  );
};
// We instantiate our components like <Item />

/**
 * React component using React State
 * @returns Renders a search bar
 */
const Search = ({ search, onSearch }) => {
  return (
    <div>
      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" value={search} onChange={onSearch} />
    </div>
  );
};
//handler for an event
// const handleChange = (event) => {
//   //synthetic event
//   // console.log(event);

//   //value of target (here: element), using setSearchTerm() with useState we can now see our typed input below the search box.
//   setSearchTerm(event.target.value);

//   props.onSearch(event);

//onChange here is our handleChange event
// return (
//   <div>
//     <label htmlFor="search"> Search: </label>
//     <input id="search" type="text" onChange={props.onSearch} />
//     <p>
//       Searching for <strong>{searchTerm}</strong>
//     </p>
//   </div>
// );

/**
 * React component
 * @returns Will render the items out of our list object
 */
const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = ({ item }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
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

//destructing multiple props within one
const Test = ({ words, myColor }) => {
  return <p style={{ color: myColor }}>{words}</p>;
};

*/

export default App;
