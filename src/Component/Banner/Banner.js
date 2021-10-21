import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className="banner">
        {/* <img src="https://i.ibb.co/nQMtkGx/slides-bg1-1.jpg" className="img-fluid banner-image" alt="" /> */}
        <div className="container">
          <div classNme="row">
              <div className="col-md-6">
                <div className="banner-content">
                <div className="banner-text">
                  <h1>
                    The World Best
                    <span className="slide-span"> Dental Specialist </span>
                    Treatment
                  </h1>
                  <p className="slider-p">
                  Dental bonding is a technique used to correct imperfections with your teeth to give you a better-looking smile. Bonding is used to repair chipped teeth, decayed teeth, and cracked teeth.
                  </p>
                  <div className="button">
                    <button type="button" class="btn primary-btn">
                      Book Appointment
                    </button>
                    <button type="button" class="btn secondary-btn">
                      Consult A Dentist
                    </button>
                  </div>
                </div>
                </div>
              </div>
              <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
