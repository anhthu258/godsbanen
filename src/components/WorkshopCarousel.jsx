import { useState, useEffect } from "react";
import "../WorkshopCarousel.css";

function WorkshopCarousel() {
  const [workshops, setWorkshops] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch værkstedsdata fra JSON-fil ved komponent-mount
  useEffect(() => {
    const base = import.meta.env.BASE_URL;
    fetch(`${base}data/vaerksted.json`)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then(data => setWorkshops(data))
      .catch(error => console.error('Error loading workshops:', error));
  }, []);

  // Flyt til næste slide med loop wrapping
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % workshops.length);
  };

  // Flyt til forrige slide med loop wrapping
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? workshops.length - 1 : prevIndex - 1
    );
  };

  // Vis loading-tilstand mens data hentes
  if (workshops.length === 0) {
    return <div>Indlæser...</div>;
  }

  // Funktion til at hente de tre synlige workshops,
  // anvend modulo for at looppe rundt i arrayet
  const getVisibleWorkshops = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % workshops.length;
      visible.push(workshops[index]);
    }
    return visible;
  };

  const visibleWorkshops = getVisibleWorkshops();

  return (
    <section className="carousel">
      {/* Tilbage button */}
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>

      {/* Værksteder */}
      <aside className="carousel-track">
        {visibleWorkshops.map((workshop, idx) => (
          <div key={`${workshop.id}-${idx}`} className="carousel-item">
            <a href={workshop.link} className="carousel-link">
              <img src={workshop.image} alt={workshop.title} />
              <div className="carousel-text">
                <h2>{workshop.title}</h2>
                <p>{workshop.description}</p>
              </div>
            </a>
          </div>
        ))}
      </aside>

      {/* Næste button */}
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </section>
  );
}

export default WorkshopCarousel;
