import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase";
import React, { useRef } from "react";
import "../Booking.css";

export default function Booking() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedResource, setSelectedResource] = useState("drejeskive");
    const [reservations, setReservations] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        tlfnr: ""
    });
    const [showConfirmation, setShowConfirmation] = useState(false);

    // Load reservations from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('bookings');
        if (saved) {
            setReservations(JSON.parse(saved));
        }
    }, []);

    // Time slots available for booking
    const timeSlots = [
        "10:00", "11:00", "12:00", 
        "13:00", "14:00", "15:00"
    ];

    // Get current week dates
    const getWeekDates = () => {
        const curr = new Date(selectedDate);
        const week = [];
        
        // Get Monday of current week
        const first = curr.getDate() - curr.getDay() + 1;
        
        for (let i = 0; i < 7; i++) {
            const date = new Date(curr.setDate(first + i));
            week.push(date);
        }
        return week;
    };

    const weekDates = getWeekDates();

    // Navigate week
    const changeWeek = (direction) => {
        const newDate = new Date(selectedDate);
        newDate.setDate(selectedDate.getDate() + (direction * 7));
        setSelectedDate(newDate);
    };

    // Check if time slot is available
    const isAvailable = (date, time, resource) => {
        const dateStr = date.toDateString();
        return !reservations.some(
            res => res.date === dateStr && res.time === time && res.resource === resource
        );
    };

    // Handle form input
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Submit booking
    const handleSubmit = (e) => {
        e.preventDefault();

        // Debugging logs
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(phoneRef.current.value);

        let data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
        }

        try {
            addDoc(ref, data);
        }   catch (e) {
            console.error("Error adding document: ", e);
        }
        
        if (!selectedTime || !formData.name || !formData.email) {
            alert("Udfyld venligst alle felter og vælg et tidspunkt");
            return;
        }

        const newReservation = {
            id: Date.now(),
            date: selectedDate.toDateString(),
            time: selectedTime,
            resource: selectedResource,
            ...formData
        };

        const updatedReservations = [...reservations, newReservation];
        setReservations(updatedReservations);
        localStorage.setItem('bookings', JSON.stringify(updatedReservations));

        // Reset form and show confirmation
        setFormData({ name: "", email: "", phone: "" });
        setSelectedTime("");
        setShowConfirmation(true);
        setTimeout(() => setShowConfirmation(false), 5000);
    };

    // Get capacity for resource
    const getCapacity = (resource) => {
        return resource === "drejeskive" ? 6 : 8;
    };

    // Get available spots for a time slot
    const getAvailableSpots = (date, time, resource) => {
        const dateStr = date.toDateString();
        const booked = reservations.filter(
            res => res.date === dateStr && res.time === time && res.resource === resource
        ).length;
        return getCapacity(resource) - booked;
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('da-DK', { day: 'numeric', month: 'short' });
    };

    const getDayName = (date) => {
        return date.toLocaleDateString('da-DK', { weekday: 'short' });
    };

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const ref = collection(firestore, "bookings");

    return (
        <>
            <Header variant="beige" />
            <section className="teaser">
                <h1>BOOKING</h1>
            </section>
            
            <section className="booking-content">
                {/* Week Navigation */}
                <aside className="week-nav">
                    <button onClick={() => changeWeek(-1)}>← 1 uge</button>
                    <button onClick={() => changeWeek(0)}>I dag</button>
                    <button onClick={() => changeWeek(1)}>1 uge →</button>
                </aside>

                {/* Calendar */}
                <aside className="calendar">
                    <h2>Vælg Dato & Tid</h2>
                    <div className="week-grid">
                        {weekDates.map((date, index) => (
                            <div 
                                key={index}
                                className={`day-column ${selectedDate.toDateString() === date.toDateString() ? 'selected' : ''}`}
                                onClick={() => setSelectedDate(date)}
                            >
                                <div className="day-header">
                                    <strong>{getDayName(date)}</strong>
                                    <span>{formatDate(date)}</span>
                                </div>
                                <div className="time-slots">
                                    {timeSlots.map(time => {
                                        const spots = getAvailableSpots(date, time, selectedResource);
                                        const available = spots > 0;
                                        return (
                                            <button
                                                key={time}
                                                className={`time-slot ${selectedDate.toDateString() === date.toDateString() && selectedTime === time ? 'selected-time' : ''} ${!available ? 'unavailable' : ''}`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedDate(date);
                                                    if (available) setSelectedTime(time);
                                                }}
                                                disabled={!available}
                                            >
                                                {time}
                                                <span className="spots">{spots} ledige</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Booking Form */}
                <aside className="booking-form-section">
                    <div className="resource-selector">
                        <button 
                            className={selectedResource === "drejeskive" ? "active" : ""}
                            onClick={() => setSelectedResource("drejeskive")}
                        >
                            Drejeskive (6 pladser)
                        </button>
                        <button 
                            className={selectedResource === "sidepladser" ? "active" : ""}
                            onClick={() => setSelectedResource("sidepladser")}
                        >
                            Sidepladser (8 pladser)
                        </button>
                    </div>

                    {showConfirmation && (
                        <div className="confirmation-message">
                            ✓ Din booking er bekræftet!
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="booking-form">
                        <h3>Book {selectedResource === "drejeskive" ? "Drejeskive" : "Sidepladser"}</h3>
                        
                        <div className="selected-info">
                            <p><strong>Dato:</strong> {selectedDate.toLocaleDateString('da-DK')}</p>
                            <p><strong>Tid:</strong> {selectedTime || "Vælg venligst"}</p>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Navn *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                ref={nameRef}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                ref={emailRef}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Telefon</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                ref={phoneRef}
                            />
                        </div>

                        <button type="submit" className="submit-btn">
                            Bekræft Booking
                        </button>
                    </form>

                    <div className="booking-info">
                        <h4>Information</h4>
                        <p>• Bookinger gælder for 1 time</p>
                        <p>• Ankomst 15 min. før starttidspunkt</p>
                        <p>• Afbestilling skal ske mindst 24 timer før</p>
                    </div>
                </aside>
            </section>
            
            <Footer variant="beige" />
        </>
    );
}