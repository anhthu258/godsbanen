import { useState, useEffect } from 'react';
import '../EventCarousel.css';

function EventCarousel() {
  const [events, setEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Afhent eventdata fra JSON-fil ved komponent-mount
  useEffect(() => {
    fetch('/data/events.json')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error loading events:', error));
  }, []);

  // Flyt til næste slide med loop wrapping
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  // Flyt til forrige slide med loop wrapping
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  // Viser loading-tilstand mens data hentes
  if (events.length === 0) {
    return <div>Indlæser...</div>;
  }

  // Funktion til at hente den synlige event,
  // Anvend modulo for at looppe rundt i arrayet
  const getVisibleEvents = () => {
    const visible = [];
    for (let i = 0; i < 1; i++) {
      const index = (currentIndex + i) % events.length;
      visible.push(events[index]);
    }
    return visible;
  };

  const visibleEvents = getVisibleEvents();

  return (
    <section className="event-carousel">
      {/* Tilbage button */}
      <img 
        src="/images/arrow-left.svg" 
        alt="Tilbage" 
        className="carousel-button prev"
        onClick={prevSlide}
      />

      {/* Sørge for at der kun vises 1 event af gangen */}
      <aside className="carousel-track">
        {visibleEvents.map((event, idx) => (
          <div key={`${event.id}-${idx}`} className="carousel-item">
            <a href={event.link} className="event-link">
              <img src={event.image} alt={event.title} />
              <div className="carousel-text">
                <h2>{event.title}</h2>
                <p className="event-date">{event.date}</p>
                <p className="event-time">{event.time}</p>
                <p className="event-description">{event.description}</p>
              </div>
            </a>
          </div>
        ))}
      </aside>

      {/* Næste button */}
      <img 
        src="/images/arrow-right.svg" 
        alt="Næste" 
        className="carousel-button next"
        onClick={nextSlide}
      />
    </section>
  );
}

export default EventCarousel;
