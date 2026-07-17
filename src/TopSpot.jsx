const TopSpot = ({ name, description, location }) => {
  const mapLink = `https://maps.google.com/?q=${location[0]},${location[1]}`;

  return (
    <div data-testid="topspot" className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>

        <p className="card-text">{description}</p>

        <a 
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  );
};

export default TopSpot;