import React from "react";

const INITIAL_LIST = ["Learn React", "Learn Firebase", "Learn GraphQL"];

const ListWithAddItem = () => {
  const [value, setValue] = React.useState("");
  const [list, setList] = React.useState(INITIAL_LIST);
  const [item, setItem] = React.useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    if (value) {
      setList(list.concat(value));
    }
  };

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default ListWithAddItem;
