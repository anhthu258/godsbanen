import { Routes, Route } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkshopTiles from "../components/workshoptiles";

import "../workshop.css";

function Workshop() {
  return (
    <>
      <Header variant="green"></Header>

      <div className="parallax-container">
        <div>
          <div className="workshop-info">
            <h2>OM VÆRKSTEDERNE</h2>
            <div className="workshop-info-container">
              <div className="workshop-info-box">
                <p>
                  Godsbanens veludstyrede værksteder for tekstil, træ, metal,
                  lasercutter, 3D-print, grafisk arbejde, storprint og keramik
                  er åbne for alle. Du kan få hjælp til selvhjælp til både små
                  og store projekter – fra eksamensprint til hønsehuse – og du
                  behøver hverken erfaring eller kendskab til materialerne for
                  at komme i gang.
                </p>
              </div>
              <div className="workshop-info-box workshop-info-box-schedule">
                <h3> GRAFISK // KERAMIK // TRÆ // METAL</h3>
                <p>MANDAG - TIRSDAG: KL. 14 - 21 </p>
                <p>ONSDAG - TORSDAG: KL. 10 - 16</p>
                <p className="saturday">LØRDAG I MÅNEDEN: KL. 10 - 15</p>
                <h3>TEKSTIL // LASER</h3>
                <p>MANDAG - TIRSDAG: KL. 14 - 19</p>
                <p>LØRDAG I MÅNEDEN:</p>
                <p>TEKSTIL: KL. 10 - 15</p>
                <p>LASER: LUKKET</p>
              </div>
            </div>
          </div>
          <WorkshopTiles
            title="// GRAFISK VÆRKSTED //"
            description="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
            imageSrc="/images/grafisk.png"
            buttonText="Læs Mere"
            reverse={false}
          />
          <WorkshopTiles
            title="// KERAMIK VÆRKSTED //"
            description="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
            imageSrc="/images/keramik.png"
            buttonText="Læs Mere"
            buttonLink="/keramik"
            reverse={true}
          />
          <WorkshopTiles
            title="// TRÆ VÆRKSTED //"
            description="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
            imageSrc="/images/wood.png"
            buttonText="Læs Mere"
            reverse={false}
          />
          <WorkshopTiles
            title="// METAL VÆRKSTED //"
            description="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
            imageSrc="/images/metal.jpg"
            buttonText="Læs Mere"
            reverse={true}
          />
          <WorkshopTiles
            title="// LASER VÆRKSTED //"
            description="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
            imageSrc="/images/laser.jpg"
            buttonText="Læs Mere"
            reverse={false}
          />
          <WorkshopTiles
            title="// TEKSTIL OG SERIGRAFI VÆRKSTED //"
            description="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
            imageSrc="/images/tryk.jpg"
            buttonText="Læs Mere"
            reverse={true}
          />
          <WorkshopTiles
            title="// SMYKKE VÆRKSTED //"
            description="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
            imageSrc="/images/smykke.jpg"
            buttonText="Læs Mere"
            reverse={false}
          />
          <WorkshopTiles
            title="// KUNSTPRINT //"
            description="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
            imageSrc="/images/kunstprint.jpeg"
            buttonText="Læs Mere"
            reverse={true}
          />
        </div>
      </div>

      <Footer variant="green"></Footer>
    </>
  );
}

export default Workshop;
