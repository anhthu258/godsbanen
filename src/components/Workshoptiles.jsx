import "../workshoptiles.css";

function WorkshopTiles({
  title,
  description,
  imageSrc,
  buttonText = "Læs mere",
  buttonLink,
  reverse = false,
}) {
  return (
    <div className={`workshop-tile ${reverse ? "workshop-tile-reverse" : ""}`}>
      <div className="workshop-content">
        <div className="workshop-text">
          <h2 className="workshop-title">{title}</h2>
          <p className="workshop-description">{description}</p>
        </div>
        {buttonLink ? (
          <a className="workshop-button" href={buttonLink}>
            {buttonText}
          </a>
        ) : (
          <button className="workshop-button">{buttonText}</button>
        )}
      </div>
      <div className="workshop-image-container">
        <img className="workshop-image" src={imageSrc} alt={title} />
      </div>
    </div>
  );
}

export default WorkshopTiles;
