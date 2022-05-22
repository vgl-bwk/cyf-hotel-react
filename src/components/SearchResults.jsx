import React, { useState } from "react";
import moment from "moment";
import Row from "./Row";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [selectedId, setSelectedId] = useState();

  return (
    <>
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
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.result.map(data => {
            const date1 = moment(data.checkInDate);
            const date2 = moment(data.checkOutDate);
            const diff = date2.diff(date1, "days");
            return (
              <Row data={data} diff={diff} setSelectedId={setSelectedId} />
            );
          })}
        </tbody>
      </table>
      <CustomerProfile id={selectedId} />
    </>
  );
};

export default SearchResults;
