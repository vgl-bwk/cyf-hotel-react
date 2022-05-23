import React, { useState, useEffect } from "react";
import Search from "../Search.js";
import SearchResults from "./SearchResults.jsx";
import CustomerProfile from "./CustomerProfile";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [initialBookings, setInitialBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_URL = "https://cyf-react.glitch.me/error";
  /*const API_URL = "https://cyf-react.glitch.me/delayed";*/
  const [error, setError] = useState("");

  const search = searchVal => {
    if (searchVal.length === 0) {
      setBookings(initialBookings);
      return;
    }
    const filteredBookings = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filteredBookings);
  };

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then(data => data.json())
      .then(json => {
        /*setBookings(json);
        setInitialBookings(json);*/
        setError(json.error);
        setLoading(false);
      });
  }, []);

  console.log(bookings);

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div className="App-content">
      <h3 style={{ color: "red" }}>{error}</h3>
      <div className="container">
        <Search search={search} />
        <SearchResults result={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
