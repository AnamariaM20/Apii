import React, { useState, useEffect } from "react";

const Bookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch("https://restful-booker.herokuapp.com/booking")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => setBookings(data))
            .catch((error) => console.error("Error fetching bookings:", error));
    }, []);

    return (
        <div>
            <h2>Bookings</h2>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking.bookingid}>Booking ID: {booking.bookingid}</li>
                ))}
            </ul>
        </div>
    );
};

export default Bookings;
