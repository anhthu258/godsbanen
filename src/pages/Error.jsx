import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Error() {
    return (
        <>
        <Header></Header>
            <div>
                <h1>404</h1> 
                <p>
                    Hmm… vi kan ikke finde siden. Måske har den forladt togstationen, eller gemmer sig et sted på perronen. Prøv igen via forsiden – den plejer at være til at finde.
                </p>
            </div>
        <Footer></Footer>
        </>
    );
}