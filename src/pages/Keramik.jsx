import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../Keramik.css";


function Keramik() {
  return (
    <>
      <Header variant="green"></Header>

      <div>
        <div className="practicalinfobox">
          <div className="textbox">
            <div className="openinginfo">
              <h3>ÅBNINGSTIDER</h3>
              <p>Mandag og tirsdag: 14-21</p>
              <p>Onsdag og torsdag: 10-16</p>
              <p>1. lørdag i måneden: 10-15</p>
            </div>
            <div className="contactinfo">
              <h3 className="contact">KONTAKT</h3>
              <p>+45 2920 9048</p>
              <p>keramik@godsbanen.dk</p>
              <p>Du finder keramikværkstedet lige ved informationen.</p>
            </div>
            <div className="priceinfo">
              <h3 className="prices">PRISER</h3>
              <p>
                Adgangsbillet: 50 kr (betales ved online booking) + materialer
                og brændinger
              </p>
              <p>
                Gratis entré for personer under 18 år i følge med betalende
                voksne.
              </p>
            </div>
            <div className="pinfo">
              <p>PRAKTISK OM VÆRKSTEDET</p>
              <a href="https://godsbanen.dk/wp-content/uploads/2025/02/Praktisk-info-keramik-februar-2025.pdf">
                Se generel folder om Keramikværkstedet
              </a>
              <p>
                <a href="https://godsbanen.dk/kalender/type/kursus/">KURSER</a>
              </p>
            </div>
            <button className="bookbutton">
              Book tid <span className="arrow">&#10233;</span>{" "}
            </button>
          </div>
        </div>
        <div className="aboutbox">
          <p>
            Vil du arbejde med ler og glasur? Har du en drøm om at skabe
            keramiske genstande, skulpturer, objekter & dingenoter? På
            Godsbanens Keramikværksted kan du skabe alt lige fra mormors nye
            yndlingskop, en topmoderne kakkel, skulpturer i alle afskygninger
            eller den helt unikke vase.
          </p>
          <p>
            Alle er velkomne, uanset om du er helt ny eller har mange års
            erfaring. Vi har alle materialer og værktøjer, så du behøver ikke
            medbringe noget. Der er altid en medarbejder på værkstedet, som yder
            hjælp til selvhjælp.
          </p>
          <h3>Ofte stillede spørgsmål:</h3>
          <p>
            Kan jeg bruge keramikværkstedet uden et introkursus? Må jeg
            medbringe mit eget ler? Kan jeg tage børn med på keramikværkstedet?
          </p>
          <p>
            Alle disse spørgsmål og mange flere får du svar på i{" "}
            <a href="https://godsbanen.dk/wp-content/uploads/2025/02/Praktisk-info-keramik-februar-2025.pdf">
              {" "}
              denne pdf.
            </a>
          </p>
        </div>
        <div className="practical">
          <div className="pracbox">
            <h2 className="practitle">Det praktiske</h2>
            <h3>Tidsbestilling:</h3>
            <p>
              Man kan reservere én måned frem, én plads pr. dag i max tre timer.
              Systemet åbner for booking kl. 07.00.Man kan maksimalt have 9
              aktive bookinger ad gangen.For at nedbringe mængden af glemte
              tider og tomme pladser betaler man adgangsbillet, når man booker
              online.
            </p>
            <p className="impossible">
              Det er ikke muligt at booke den sidste time af åbningstiden, men
              igangværende brugere kan arbejde til lukketid.
            </p>
          </div>
          <a href="/booking" >
            <button className="bookbutton2">
              Book tid <span className="arrow">&#10233;</span>{" "}
            </button>
          </a>
        </div>
        <div className="opportunities">
          <h2 className="opptitle">NOGLE AF MULIGHEDERNE:</h2>
          <ul className="keramiklist">
            <li>Mange forskellige typer ler, men kun stentøjsler/porcelæn.</li>
            <li>
              Gipsforme, som man kan låne, og støbe i med porcelæn og/eller
              stentøjs-støbeler, og andre forme man kan kvætse i.
            </li>
            <li>Seks elektriske drejeskiver og en ekstruder.</li>
            <li>
              Mange forskellige glasurer, begitninger, sinterbegitninger,
              penselglasurer og dekorationsfarver.
            </li>
            <li>Fire ovne i forskellige størrelser (mellem 150l – 440l).</li>
          </ul>
        </div>
      </div>

      <Footer variant="white" logoVariant="black"></Footer>
    </>
  );
}


export default Keramik;