import Header from "../components/Header";
import Footer from "../components/Footer";
import MonthCarousel from "../components/MonthCarousel.jsx";
import MusicCarousel from "../components/MusicCarousel.jsx";
import EventWorkshopCarousel from "../components/EventWorkshopCarousel.jsx";
import "../events.css";

function Events() {
  return (
    <>
      <Header variant="blue"></Header>

      <div className="section-body">
        <figure className="big-picture">
          <img
            src="../images/events-sorthvid.png"
            alt="to personer der står på skateboard foran godbanen"
          />

          <div className="header-infobox">
            <h2>EVENTS</h2>
            <p>
              Her er en legende, inviterende version: <br />
              Træd indenfor på Godsbanen, hvor kreativiteten lever, og hvor hver
              dag bringer nye oplevelser til dig, der er nysgerrig på kunst,
              kultur og fællesskab. Vi inviterer dig til at være en del af det,
              der sker her – uanset om du vil skabe, opleve, lytte, lære eller
              bare mærke stemningen. Kig forbi, lad dig inspirere, og bliv en
              del af det levende miljø, der gør Godsbanen til et af Aarhus’ mest
              sprudlende steder. Vi glæder os til at se dig.
            </p>
          </div>
        </figure>

        <div className="overskrift">
          <h1>DENNE MÅNED</h1>
        </div>

        <MonthCarousel></MonthCarousel>
       

        <div className="overskrift">
          <h1>TIL MUSIK ELSKERER</h1>
        </div>

        <MusicCarousel></MusicCarousel>

        <div className="overskrift">
          <h1>VORES WORKSHOP</h1>
        </div>
    
        <EventWorkshopCarousel></EventWorkshopCarousel>
        
      </div>

      <div className="back-to-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <img src="/images/arrow-circle-up.svg" alt="back to the top" />
      </div>
      
      <Footer variant="blue"></Footer>
    </>
  );
}

export default Events;
