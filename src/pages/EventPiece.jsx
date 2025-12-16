import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router";
import "../EventPiece.css";

function EventPiece() {
  return (
    <>
      <Header variant="blue"></Header>
            <section className="preview">
                <div className="banner-content">
                    <h3>Udstilling</h3>
                    <img 
                      src="./images/arrow-circle-left.svg" 
                      alt="Tilbage pil" 
                      onClick={() => navigate('/events')}
                      style={{ cursor: 'pointer' }}
                    />
                </div>
            </section>
            <main className="content">
        <section className="teaser">
            <h1>A Piece of Land</h1>
        </section>
        <div className="content-wrapper">
            <section className="description">
                <h2>Om udstillingen</h2>
                <p>
                    Udstillingen er en kulmination af billedkunstner Maiken Stæhrs seneste års undersøgelser af moderne landbrugsæstetik. Cantina bliver under udstillingen omdannet til en fiktiv produktionsenhed som dyrker nostalgiske og syntetiske drømmesyn.
                    Der vil under ferniseringen være koncert ved musiker Lisen Larsen og serverering af varm suppe. Udstillingen suppleres af tekstbidrag fra kurator og kunsthistoriker Marie Inge Malberg og forfatter Caroline Albertine Minor.            
                </p>
            </section>
            <aside className="event-info">
                <h2>Praktisk information</h2>
                <p><strong>Dato:</strong> 21. november - 21. december</p>
                <p><strong>Lokale:</strong> Cantina, Godsbanen</p>
                <p><strong>Éntre:</strong> Gratis</p>
            </aside>  
        </div>          
        </main>
        <div className="back-to-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img src="./images/arrow-circle-up.svg" alt="back to the top" />
        </div>
      <Footer variant="blue"></Footer>
    </>
  );
}

export default EventPiece;