import React, { useState } from "react";

const Row = props => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    props.setSelectedId(props.data.id);
  };

  return (
    <tr
      onClick={() => setSelected(!selected)}
      className={selected ? "higlightedRow" : ""}
    >
      <td scope="row">{props.data.id}</td>
      <td>{props.data.title}</td>
      <td>{props.data.firstName}</td>
      <td>{props.data.surname}</td>
      <td>{props.data.email}</td>
      <td>{props.data.roomId}</td>
      <td>{props.data.checkInDate}</td>
      <td>{props.data.checkOutDate}</td>
      <td>{props.diff}</td>
      <td>
        <button onClick={handleClick}>Show Profile</button>
      </td>
    </tr>
  );
};

export default Row;
