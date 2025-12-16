import { useState, useEffect } from "react";
import classes from "../MonthCarousel.module.css";

function EventCarousel() {
  const [events, setEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Afhent eventdata fra JSON-fil ved komponent-mount
  useEffect(() => {
    const base = import.meta.env.BASE_URL;
    fetch(`${base}data/month.json`)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
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
    const displayCount = 3; // Antal events der skal vises samtidigt
    
    for (let i = 0; i < displayCount; i++) {
      const index = (currentIndex + i) % events.length;
      visible.push(events[index]);
    }
    return visible;
  };

  const visibleEvents = getVisibleEvents();

  return (
    <section className={`${classes.eventCarousel}`}>
      {/* Tilbage button */}
      
      <img 
        src="./images/arrow-left.svg" 
        alt="Tilbage" 
        className={`${classes.eventCarouselButton}`}
        onClick={prevSlide}
      />

      {/* Sørge for at der kun vises 1 event af gangen */}
      <aside className={`${classes.carouselTrack}`}>
        {visibleEvents.map((event, idx) => (
          <div key={`${event.id}-${idx}`} className={`${classes.eventCarouselItem}`}>
            <a href={event.link} className={`${classes.eventLink}`}>
              <img src={event.image} alt={event.title} />
              <div className={`${classes.carouselText}`}>
                <h2>{event.title}</h2>
                <p className={`${classes.eventDate}`}>{event.date}</p>
                <p className={`${classes.eventTime}`}>{event.time}</p>
                <p className={`${classes.eventDescription}`}>{event.description}</p>
              </div>
              <button className={`${classes.readMore}`}>Læs Mere</button>
            </a>
          </div>
        ))}
      </aside>

      {/* Næste button */}
      <img 
        src="./images/arrow-right.svg" 
        alt="Næste" 
        className={`${classes.eventCarouselButton}`}
        onClick={nextSlide}
      />
    </section>
  );
}

export default EventCarousel;
