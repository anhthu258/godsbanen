import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebase";
import React, { useRef } from "react";
import "../Booking.css";

export default function Booking() {
    // UI-state: valgt dato/tid/ressource
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedResource, setSelectedResource] = useState("drejeskive");

    // Data-state: bookinger fra Firestore
    const [reservations, setReservations] = useState([]);

    // Form-state til inputfelter
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    // UI toggles
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);

    // Reference til Firestore-collection
    const ref = collection(firestore, "bookings");

    // Henter eksisterende bookinger live fra Firestore
    useEffect(() => {
        const unsubscribe = onSnapshot(ref, (snapshot) => {
            const bookingsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setReservations(bookingsData);
        });

        return () => unsubscribe();
    }, []);

    // Standard tidsintervaller
    const timeSlots = [
        "10:00", "11:00", "12:00", 
        "13:00", "14:00", "15:00"
    ];

    // Beregn den aktuelle uge (mandag -> lørdag)
    const getWeekDates = () => {
        const curr = new Date(selectedDate);
        const week = [];
        
        // Get Monday of current week
        const first = curr.getDate() - curr.getDay() + 1;
        
        for (let i = 0; i < 6; i++) {
            const date = new Date(curr.setDate(first + i));
            week.push(date);
        }
        return week;
    };

    const weekDates = getWeekDates();

    // Skift uge med +/− 7 dage
    const changeWeek = (direction) => {
        const newDate = new Date(selectedDate);
        newDate.setDate(selectedDate.getDate() + (direction * 7));
        setSelectedDate(newDate);
    };

    // Skift én dag frem eller tilbage
    const changeDay = (direction) => {
        const newDate = new Date(selectedDate);
        newDate.setDate(selectedDate.getDate() + direction);
        setSelectedDate(newDate);
    };

    // Tjek om et tidsinterval er ledigt for en ressource på en given dato
    const isAvailable = (date, time, resource) => {
        const dateStr = date.toDateString();
        return !reservations.some(
            res => res.date === dateStr && res.time === time && res.resource === resource
        );
    };

    // Opdater lokal form-state ved tasteinput
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Gem booking i Firestore og opdater UI
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!selectedTime || !formData.name || !formData.email) {
            alert("Udfyld venligst alle felter og vælg et tidspunkt");
            return;
        }

        const newReservation = {
            date: selectedDate.toDateString(),
            time: selectedTime,
            resource: selectedResource,
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            timestamp: new Date().toISOString()
        };

        try {
            await addDoc(ref, newReservation);
            
            // Reset form and show confirmation
            setFormData({ name: "", email: "", phone: "" });
            setSelectedTime("");
            setShowConfirmation(true);
            setTimeout(() => setShowConfirmation(false), 5000);
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Der opstod en fejl. Prøv venligst igen.");
        }
    };

    // Kapacitet pr. ressource (drejeskive vs. arbejdsborde)
    const getCapacity = (resource) => {
        return resource === "drejeskive" ? 6 : 8;
    };

    // Beregner ledige pladser for en given tid, dato og ressource
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

    // Refs til formfelter (bruges når vi skriver til Firestore)
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();

    return (
        <>
            <Header variant="beige" />
            <section className="teaser">
                <h1>BOOKING</h1>
            </section>
            
            <section className="booking-content">
                {/* Single Day View */}
                <aside className="calendar">
                    <div className="calendar-header">
                        <button className="calendar-toggle-btn" onClick={() => setShowCalendar(!showCalendar)}>
                            <img src="./images/calendar.svg" alt="Kalender ikon" /> Vælg Dato
                        </button>
                        <h2>{selectedDate.toLocaleDateString('da-DK', { weekday: 'long', day: 'numeric', month: 'long' })}</h2>
                    </div>

                    {/* Day Navigation */}
                    <div className="day-nav">
                        <button onClick={() => changeDay(-1)}>← Forrige dag</button>
                        <button onClick={() => setSelectedDate(new Date())}>I dag</button>
                        <button onClick={() => changeDay(1)}>Næste dag →</button>
                    </div>

                    {/* Time Slots for Selected Day */}
                    <div className="time-slots-list">
                        <h3>Tilgængelige tider</h3>
                        {timeSlots.map(time => {
                            const spots = getAvailableSpots(selectedDate, time, selectedResource);
                            const available = spots > 0;
                            return (
                                <button
                                    key={time}
                                    className={`time-slot-item ${selectedTime === time ? 'selected-time' : ''} ${!available ? 'unavailable reserved' : ''}`}
                                    onClick={() => {
                                        if (available) setSelectedTime(time);
                                    }}
                                    disabled={!available}
                                >
                                    <span className="time">{time}</span>
                                    <span className="spots">{available ? `${spots} ledige` : 'Reserveret'}</span>
                                </button>
                            );
                        })}
                    </div>
                </aside>

                {/* Calendar Modal */}
                {showCalendar && (
                    <div className="calendar-modal" onClick={() => setShowCalendar(false)}>
                        <div className="calendar-modal-content" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-header">
                                <h3>Vælg Dato</h3>
                                <button className="close-btn" onClick={() => setShowCalendar(false)}>✕</button>
                            </div>
                            <div className="week-nav">
                                <button onClick={() => changeWeek(-1)}>← 1 uge</button>
                                <button onClick={() => changeWeek(0)}>I dag</button>
                                <button onClick={() => changeWeek(1)}>1 uge →</button>
                            </div>
                            <div className="week-grid">
                                {weekDates.map((date, index) => (
                                    <div 
                                        key={index}
                                        className={`day-column ${selectedDate.toDateString() === date.toDateString() ? 'selected' : ''}`}
                                        onClick={() => {
                                            setSelectedDate(date);
                                            setShowCalendar(false);
                                        }}
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
                                                    <div
                                                        key={time}
                                                        className={`time-slot ${!available ? 'unavailable reserved' : ''}`}
                                                    >
                                                        {time}
                                                        <span className="spots">{available ? `${spots}` : '✕'}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

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
                            className={selectedResource === "arbejdsborde" ? "active" : ""}
                            onClick={() => setSelectedResource("arbejdsborde")}
                        >
                            Arbejdsborde (8 pladser)
                        </button>
                    </div>

                    {showConfirmation && (
                        <div className="confirmation-message">
                            ✓ Din booking er bekræftet!
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="booking-form">
                        <h3>Book {selectedResource === "drejeskive" ? "Drejeskive" : "Arbejdsborde"}</h3>
                        
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