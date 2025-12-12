import Header from "../components/Header";
import Footer from "../components/Footer";
import "../Booking.css";

export default function Booking(){
    return (
        <>
        <Header variant="beige"></Header>
        <section className="teaser">
            <h1>BOOKING</h1>
        </section>
        <section className="booking-content">
            <aside>
                <p>  </p>
            </aside>
        </section>
        <Footer variant="beige"></Footer>
        </>
    );
}