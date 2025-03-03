import React from "react";
import "./Locations.css";

const locations = [
  {
    country: "Germany",
    address: "H. Alexander Str. No. 72",
    postal: "5202",
  },
  {
    country: "North Macedonia",
    address: "11th October No. 35",
    postal: "1000",
  },
  {
    country: "Albania",
    address: "Ruga Bajram Sykja No. 29",
    postal: "1031",
  },
  {
    country: "Turkey",
    address: "Lalezar Caddesi No. 45",
    postal: "34060",
  },
];

const Locations: React.FC = () => {
  return (
    <section className="locations">
      <div className="locations-content">
        <h2>
          Our <span>Locations</span>
        </h2>
        <div className="locations-container">
          {locations.map((loc, index) => (
            <div className="location-card" key={index}>
              <div className="icon">📍</div>
              <h3>{loc.country}</h3>
              <p>{loc.address}</p>
              <p>{loc.postal}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
