import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkshopCarousel from "../components/WorkshopCarousel";
import EventCarousel from "../components/EventCarousel";
import { Link } from "react-router";
import "../Home.css";

export default function Home() {
  return (
    <>
      <Header></Header>
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
        <Link to="/workshop">
          <h1>VÆRKSTEDER</h1>
        </Link>
        <WorkshopCarousel />
      </section>

      <section className="events">
        <Link to="/events">
          <h1>DET DER SKER</h1>
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
      <Footer variant="red"></Footer>
    </>
  );
}
