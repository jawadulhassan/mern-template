import React, { useState } from "react";
import { Link } from "react-router-dom";
import kebabCase from "lodash/kebabCase";

function Card({ item }) {
  const [displayDetails, setDisplayDetails] = useState(false);
  const toggleDetails = () => setDisplayDetails(!displayDetails);

  if (!item) return null;
  const { title = "", progress = "", url = "" } = item;
  return (
    <Link to={`/${kebabCase(title)}`}>
      <div
        className="card-layout"
        onClick={toggleDetails}
        onMouseEnter={toggleDetails}
        onMouseLeave={toggleDetails}
        style={{
          backgroundImage: `url(${url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {!!displayDetails && (
          <div className="overlay">
            <div className="card-content-wrapper">
              <div className="column">
                <div className="card-progress">{progress}</div>
                <div className="card-name">{title}</div>
              </div>
              <span style={{ color: "white" }}>
                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

export default Card;
