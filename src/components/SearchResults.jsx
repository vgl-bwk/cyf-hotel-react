import React, { useState } from "react";
import { format } from "date-fns";
import moment from "moment";
import Row from "./Row";

const SearchResults = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check out Date</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.result.map(data => {
          const date1 = moment(data.checkInDate);
          const date2 = moment(data.checkOutDate);
          const diff = date2.diff(date1, "days");
          return <Row data={data} diff={diff} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
