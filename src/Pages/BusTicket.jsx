import React, { useState, useEffect } from 'react';

const rows = ['A','B','C','D','E','F','G','H','I','J'];
const generateSeats = () => {
  const seats = [];
  rows.forEach(row => {
    seats.push(`${row}1`);
    seats.push(`${row}2`);
    seats.push(`${row}3`);
    seats.push(`${row}4`);
  });
  return seats;
};

const seatFare = 450;
const BOOKED_SEATS_KEY = 'bookedSeats';
const OFFLINE_BOOKED_SEATS_KEY = 'offlineBookedSeats';

const BusTicket = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [offlineBookedSeats, setOfflineBookedSeats] = useState(['B2', 'C3']);
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    const storedSeats = localStorage.getItem(BOOKED_SEATS_KEY);
    if (storedSeats) {
      setBookedSeats(JSON.parse(storedSeats));
    }
    const storedOffline = localStorage.getItem(OFFLINE_BOOKED_SEATS_KEY);
    if (storedOffline) {
      setOfflineBookedSeats(JSON.parse(storedOffline));
    }
    const storedAdmin = localStorage.getItem('isAdmin');
    if (storedAdmin === 'true') {
      setIsAdmin(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(BOOKED_SEATS_KEY, JSON.stringify(bookedSeats));
  }, [bookedSeats]);

  useEffect(() => {
    localStorage.setItem(OFFLINE_BOOKED_SEATS_KEY, JSON.stringify(offlineBookedSeats));
  }, [offlineBookedSeats]);

  const handleSeatClick = (seat) => {
    if (bookedSeats.includes(seat) || offlineBookedSeats.includes(seat)) return;
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const confirmBooking = () => {
    if (selectedSeats.length > 0) {
      const updatedBookings = [...bookedSeats, ...selectedSeats];
      setBookedSeats(updatedBookings);
      localStorage.setItem(BOOKED_SEATS_KEY, JSON.stringify(updatedBookings));
      setSelectedSeats([]);
    }
  };

  const resetBookings = () => {
    setBookedSeats([]);
    setOfflineBookedSeats([]);
    localStorage.removeItem(BOOKED_SEATS_KEY);
    localStorage.removeItem(OFFLINE_BOOKED_SEATS_KEY);
  };

  const handleOfflineBookingToggle = (seat) => {
    if (!isAdmin) return;
    if (offlineBookedSeats.includes(seat)) {
      setOfflineBookedSeats(offlineBookedSeats.filter(s => s !== seat));
    } else {
      setOfflineBookedSeats([...offlineBookedSeats, seat]);
    }
  };

  const handleAdminLogin = () => {
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
    } else {
      alert('Incorrect password');
    }
  };

  const renderSeat = (seat) => {
    const isBooked = bookedSeats.includes(seat);
    const isOfflineBooked = offlineBookedSeats.includes(seat);
    const isSelected = selectedSeats.includes(seat);

    let seatClass = 'w-12 h-12 m-1 rounded-full flex items-center justify-center text-sm';

    if (isBooked || isOfflineBooked) {
      seatClass += ' bg-gray-500 text-white cursor-not-allowed';
    } else if (isSelected) {
      seatClass += ' bg-green-500 text-white';
    } else {
      seatClass += ' bg-blue-200 hover:bg-blue-400 cursor-pointer';
    }

    return (
      <button
        key={seat}
        className={seatClass}
        onClick={() => handleSeatClick(seat)}
        onContextMenu={(e) => {
          e.preventDefault();
          handleOfflineBookingToggle(seat);
        }}
        disabled={isBooked || isOfflineBooked}
        title={isAdmin ? 'Right-click to toggle offline booking' : ''}
      >
        {seat}
      </button>
    );
  };

  return (
    <div className="p-6 max-w-4xl mx-auto mt-16">
      <h1 className="text-2xl font-bold mb-4">Bus Ticket Booking - Economy Class</h1>

      <div className="grid grid-cols-4 gap-2 bg-white p-4 rounded shadow">
        {generateSeats().map(seat => renderSeat(seat))}
      </div>

      {selectedSeats.length > 0 && (
        <div className="mt-4 p-4 bg-yellow-100 rounded">
          <p>Confirm seat(s) <strong>{selectedSeats.join(', ')}</strong> for <strong>{selectedSeats.length * seatFare} Tk</strong>?</p>
          <button
            className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={confirmBooking}
          >
            Confirm Booking
          </button>
        </div>
      )}

      {!isAdmin && (
        <div className="mt-4 flex items-center gap-2">
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-3 py-1 rounded"
          />
          <button
            onClick={handleAdminLogin}
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          >
            Login as Admin
          </button>
        </div>
      )}

      {isAdmin && (
        <div className="mt-4">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={resetBookings}
          >
            Reset All Bookings
          </button>
          <p className="text-sm mt-1 text-gray-500">Right-click a seat to mark/unmark it as offline booked.</p>
        </div>
      )}

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Legend:</h2>
        <div className="flex items-center space-x-4 mt-2">
          <div className="w-6 h-6 bg-blue-200 border rounded"></div><span>Available</span>
          <div className="w-6 h-6 bg-green-500 border rounded"></div><span>Selected</span>
          <div className="w-6 h-6 bg-gray-500 border rounded"></div><span>Booked</span>
        </div>
      </div>
    </div>
  );
};

export default BusTicket;
