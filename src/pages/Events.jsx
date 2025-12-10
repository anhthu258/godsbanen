import Header from "../components/Header";
import Footer from "../components/Footer";
import "../events.css";



function Events() {

  return (
    <>
      <Header></Header>
      
      <div className="section-body">

        <figure className="big-picture">
            <img src="../images/events-sorthvid.png" alt="to personer der står på skateboard foran godbanen" />
            
            <div className="header-infobox">
              <h2>EVENTS</h2>
              <p>
                Her er en legende, inviterende version: <br />
                Træd indenfor på Godsbanen, hvor kreativiteten lever, og hvor hver dag bringer nye oplevelser til dig, der er nysgerrig på kunst, kultur og fællesskab. Vi inviterer dig til at være en del af det, der sker her – uanset om du vil skabe, opleve, lytte, lære eller bare mærke stemningen. Kig forbi, lad dig inspirere, og bliv en del af det levende miljø, der gør Godsbanen til et af Aarhus’ mest sprudlende steder. Vi glæder os til at se dig.
              </p>
            </div>
        </figure>

        <div className="overskrift">
          <h1>DENNE MÅNED</h1>
        </div>
        
        <section className="denne-måned">
          <div className="section-bokse">
            <figure>
              <img src="../images/a-piece-of-land.png" alt="" />

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptate perferendis accusamus dolore totam qui, fugit cupiditate obcaecati sit sed nostrum officia error nam, adipisci debitis nemo quidem! Aliquid, accusamus.</p>

              <button>Læs Mere</button>
            </figure>

            <figure>
              <img src="../images/a-piece-of-land.png" alt="" />

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptate perferendis accusamus dolore totam qui, fugit cupiditate obcaecati sit sed nostrum officia error nam, adipisci debitis nemo quidem! Aliquid, accusamus.</p>

              <button>Læs Mere</button>
            </figure>

            <figure>
              <img src="../images/a-piece-of-land.png" alt="" />

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptate perferendis accusamus dolore totam qui, fugit cupiditate obcaecati sit sed nostrum officia error nam, adipisci debitis nemo quidem! Aliquid, accusamus.</p>

              <button>Læs Mere</button>
            </figure>
          </div>
        </section>

        <div className="overskrift">
          <h1>TIL MUSIK ELSKERER</h1>
        </div>

        <section className="musik-elskere">
          <div className="section-bokse">
            <figure>
              <img src="../images/a-piece-of-land.png" alt="" />

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptate perferendis accusamus dolore totam qui, fugit cupiditate obcaecati sit sed nostrum officia error nam, adipisci debitis nemo quidem! Aliquid, accusamus.</p>

              <button>Læs Mere</button>
            </figure>

            <figure>
              <img src="../images/a-piece-of-land.png" alt="" />

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptate perferendis accusamus dolore totam qui, fugit cupiditate obcaecati sit sed nostrum officia error nam, adipisci debitis nemo quidem! Aliquid, accusamus.</p>

              <button>Læs Mere</button>
            </figure>

            <figure>
              <img src="../images/a-piece-of-land.png" alt="" />

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptate perferendis accusamus dolore totam qui, fugit cupiditate obcaecati sit sed nostrum officia error nam, adipisci debitis nemo quidem! Aliquid, accusamus.</p>

              <button>Læs Mere</button>
            </figure>
          </div>
        </section>

        <div className="overskrift">
          <h1>VORES WORKSHOP</h1>
        </div>

        <section className="vores-workshop">
          <div className="section-bokse">
            <figure>
              <img src="../images/a-piece-of-land.png" alt="" />

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptate perferendis accusamus dolore totam qui, fugit cupiditate obcaecati sit sed nostrum officia error nam, adipisci debitis nemo quidem! Aliquid, accusamus.</p>

              <button>Læs Mere</button>
            </figure>

            <figure>
              <img src="../images/a-piece-of-land.png" alt="" />

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptate perferendis accusamus dolore totam qui, fugit cupiditate obcaecati sit sed nostrum officia error nam, adipisci debitis nemo quidem! Aliquid, accusamus.</p>

              <button>Læs Mere</button>
            </figure>

            <figure>
              <img src="../images/a-piece-of-land.png" alt="" />

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptate perferendis accusamus dolore totam qui, fugit cupiditate obcaecati sit sed nostrum officia error nam, adipisci debitis nemo quidem! Aliquid, accusamus.</p>

              <button>Læs Mere</button>
            </figure>
          </div>
        </section>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Events;
