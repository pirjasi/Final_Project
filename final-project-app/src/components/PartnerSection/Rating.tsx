import React from "react";
import "./Rating.css";

const Rating: React.FC = () => {
  return (
    <section className="rating-section">
      <div className="rating-container">
        <div className="main-rating">
          <img src="/image2/person1.png" alt="User" className="user-image" />
          <div className="Ratingvertical-line"></div>
          <div className="rating-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
              ultrices mauris.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit
              amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
            </p>
            <p className="user-name">— Emily R.</p>
            <div className="stars">★★★★★</div>
          </div>
        </div>

        <div className="side-ratings">
          <div className="side-rating">
            <img src="/image2/person2.png" alt="User" className="user-image" />
            <div className="Ratingvertical2-line"></div>
            <div className="side-rating-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
              </p>
              <p className="user-name">— Linda T.</p>
              <div className="stars">★★★★★</div>
            </div>
          </div>

          <div className="side-rating">
            <img src="/image2/person3.png" alt="User" className="user-image" />
            <div className="Ratingvertical2-line"></div>
            <div className="side-rating-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
              </p>
              <p className="user-name">— Jessica M.</p>
              <div className="stars">★★★★★</div>
            </div>
          </div>

          <div className="rating-buttons">
            <button className="prev">▲</button>
            <button className="next">▼</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rating;
