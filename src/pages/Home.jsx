import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkshopCarousel from "../components/WorkshopCarousel";
import EventCarousel from "../components/EventCarousel";
import { Link } from "react-router";
import "../Home.css";

export default function Home() {
  return (
    <>
      <Header variant="red"></Header>
      <section className="about">
        <aside className="about-text">
          <div>
            <h2>OM OS</h2>
            <p>
              På Godsbanen kan du opleve udstillinger, teater, oplæsninger,
              koncerter, markeder, og du kan nyde en god middag eller en kop
              kaffe i restauranten. Du kan også arbejde i værkstederne og
              projektlokalerne, deltage i et af de mere end 400 årlige
              arrangementer eller måske gå en tur på taget. Arkitekturen er et
              besøg værd i sig selv!
            </p>
          </div>
          <div>
            <h2>ÅBNINGSTIDER</h2>
            <p>
              Mandag - lørdag: 8:00 - 22:00 <br />
              Søndag: 8:00 - 18:00
            </p>
          </div>
        </aside>
      </section>

      <section className="workshops">
        <Link to="/workshop" className="section-link">
          <h1>VÆRKSTEDER</h1>
          <img src="./images/pil.svg" alt="pil" />
        </Link>
        <WorkshopCarousel />
      </section>

      <section className="events">
        <Link to="/events" className="section-link">
          <h1>DET DER SKER</h1>
          <img src="./images/pil.svg" alt="pil" />
        </Link>
        <EventCarousel />
      </section>

      <section className="restaurant">
        <div>
          <h1>
            ...LOKALT <span>SPISEHUS</span> PÅ GODSBANEN
          </h1>
          <a
            href="https://foodfamilygroup.dk/gods/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Læs mere</button>
          </a>
        </div>
      </section>
      <div className="back-to-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <img src="./images/arrow-circle-up.svg" alt="back to the top" />
      </div>
      <Footer variant="red"></Footer>
    </>
  );
}
