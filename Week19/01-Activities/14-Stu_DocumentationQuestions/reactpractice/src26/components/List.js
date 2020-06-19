import React from "react";

function List(props) {
  const groceryItemName = props.groceries.map(grocery => grocery.name);
  console.log(groceryItemName);

  return (
    <ul className="list-group">
      //This doesnt work because forEach does not return anything
      {groceryItemName.forEach(element => {
        return <li>{element}</li>;
      })}

      //This works because map returns a value
      {props.groceries.map(groceryItem => {
        return <li className="list-group-item">{groceryItem.name}</li>;
      })}
    </ul>
  );
}

export default List;
