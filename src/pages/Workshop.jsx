import { Routes, Route } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkshopTiles from "../components/workshoptiles";
import "../workshop.css";



function Workshop() {

  return (
    <>
      <Header></Header>

      <div className="parallax-container">
        <div>
          <div className=" bg-stone-200   w-full h-70">
            <h2 className="font-bold">OM VÆRKSTEDERNE</h2>
            <div className=" flex flex-row gap-20">
              <div className="text-center">
                <p className="w-100">
                  Godsbanens veludstyrede værksteder for tekstil, træ, metal,
                  lasercutter, 3D-print, grafisk arbejde, storprint og keramik
                  er åbne for alle. Du kan få hjælp til selvhjælp til både små
                  og store projekter – fra eksamensprint til hønsehuse – og du
                  behøver hverken erfaring eller kendskab til materialerne for
                  at komme i gang.
                </p>
              </div>
              <div className="text-center">
                <p className="w-100 bg-white bg-opacity-50 text-center">
                  GRAFISK // KERAMIK // TRÆ // METAL MANDAG - TIRSDAG: KL. 14 -
                  21 ONSDAG - TORSDAG: KL. 10 - 16 LØRDAG I MÅNEDEN: KL. 10 - 15
                  TEKSTIL // LASER MANDAG - TIRSDAG: KL. 14 - 19 ONSDAG -
                  TORSDAG: KL. 10 - 16 LØRDAG I MÅNEDEN: TEKSTIL: KL. 10 - 15
                  LASER: LUKKET
                </p>
              </div>
            </div>
          </div>
          <WorkshopTiles
            title="// GRAFISK VÆRKSTED //"
            description="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
            imageSrc="/src/assets/images/grafisk.png"
            buttonText="Læs Mere"
            reverse={false}
          />
          <WorkshopTiles
            title="// KERAMIK VÆRKSTED //"
            description="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
            imageSrc="/src/assets/images/keramik.png"
            buttonText="Læs Mere"
            reverse={true}
          />
          <WorkshopTiles
            title="// TRÆ VÆRKSTED //"
            description="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
            imageSrc="/src/assets/images/wood.png"
            buttonText="Læs Mere"
            reverse={false}
          />
          <WorkshopTiles
            title="// METAL VÆRKSTED //"
            description="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
            imageSrc="/src/assets/images/wood.png"
            buttonText="Læs Mere"
            reverse={true}
          />
          <WorkshopTiles
            title="// LASER VÆRKSTED //"
            description="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
            imageSrc="/src/assets/images/wood.png"
            buttonText="Læs Mere"
            reverse={false}
          />
          <WorkshopTiles
            title="// TEKSTIL OG SERIGRAFI VÆRKSTED //"
            description="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
            imageSrc="/src/assets/images/wood.png"
            buttonText="Læs Mere"
            reverse={true}
          />
          <WorkshopTiles
            title="// SMYKKE VÆRKSTED //"
            description="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
            imageSrc="/src/assets/images/wood.png"
            buttonText="Læs Mere"
            reverse={false}
          />
          <WorkshopTiles
            title="// GRAFISK VÆRKSTED //"
            description="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
            imageSrc="/src/assets/images/wood.png"
            buttonText="Læs Mere"
            reverse={true}
          />
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Workshop;
