import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../Keramik.css";


function Keramik() {
  return (
    <>
      <Header></Header>

      <div>
        <div className="practicalinfobox">
          <div className="textbox">
            <div>
              <h3>ÅBNINGSTIDER</h3>
              <p>Mandag og tirsdag: 14-21</p>
              <p>Onsdag og torsdag: 10-16</p>
              <p>1. lørdag i måneden: 10-15</p>
            </div>
            <div>
              <h3>KONTAKT</h3>
              <p>+45 2920 9048</p>
              <p>keramik@godsbanen.dk</p>
              <p>Du finder keramikværkstedet lige ved informationen.</p>
            </div>
            <div>
              <h3>PRISER</h3>
              <p>
                Adgangsbillet: 50 kr (betales ved online booking) + materialer
                og brændinger
              </p>
              <p>
                Gratis entré for personer under 18 år i følge med betalende
                voksne.
              </p>
            </div>
            <div>
              <h3>PRAKTISK OM VÆRKSTEDET</h3>
              <a href="https://godsbanen.dk/wp-content/uploads/2025/02/Praktisk-info-keramik-februar-2025.pdf">
                Se generel folder om Keramikværkstedet
              </a>
              <a href="https://godsbanen.dk/kalender/type/kursus/">KURSER</a>
            </div>
          </div>
        </div>
      </div>

      <Footer variant="green"></Footer>
    </>
  );
}


export default Keramik;