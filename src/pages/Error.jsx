import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";
import "../Error.css";

export default function Error() {
    return (
        <>
        <Header variant="red"></Header>
            <section className="error-container">
                <div>
                    <p>
                        Hmm… vi kan ikke finde siden. Måske har den forladt togstationen, eller gemmer sig et sted på perronen. Prøv igen via forsiden – den plejer at være til at finde.
                    </p>
                    <h1>404</h1> 
                    <Link to="/" className="back-button" aria-label="Gå til forsiden">
                        <img src="./images/train.png" alt="back to home" />
                        <span className="back-button-label">Til forsiden</span>
                    </Link>
                </div>
                <img src="./images/stripes.png" alt="decoration" />
            </section>
        <Footer></Footer>
        </>
    );
}