import React from "react";
import Header from "../Header/Header";
import "./About.css";

const About = () => {
  
  return (
    <div>
      <div className="about-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="about-text">
                <h3 className="about-title">
                  Our Clients are Our Priority, We Offer Quality Dental Services
                  <span> of Specialists</span>
                </h3>
                <p className="about-desc">
                  Unhappy with your smile? Dentists have an array of tools and
                  techniques at their disposal for improving the appearance of
                  your smile. dental servicesIsaacson Gentle Dentistry, which is
                  located in White Bear Lake, MN, offers a complete range of
                  dental services. Dr. Daniel Isaacson and Dr. Mike Weisbrod are
                  some of the finest dentists in White Bear Lake, MN. Here are
                  twelve common dental services that you should know about.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://templates.hibootstrap.com/grin/default/assets/images/about/about-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------------------------- */}
      <div className="about-count">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div>
                <h1 className="count">549</h1>
                <h6 className="count-text">Expert Doctors</h6>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <h1 className="count">867</h1>
                <h6 className="count-text">Problem Solve</h6>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <h1 className="count">169</h1>
                <h6 className="count-text">Award Winning</h6>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <h1 className="count">79</h1>
                <h6 className="count-text">Experiences</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-card">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div
                class="card mb-5 mt-5"
                style={{ width: "22rem", margin: "auto" }}
              >
                <img
                  src="https://templates.hibootstrap.com/grin/default/assets/images/doctor/doctor-1.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body text-center pb-5 bb">
                  <h4>Dr. Johnson Melbourne</h4>
                  <p>Prosthodontics Dentist</p>
                  <div className="about-icon align-center">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-instagram"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                class="card mb-5 mt-5"
                style={{ width: "22rem", margin: "auto" }}
              >
                <img
                  src="https://i.ibb.co/wK6txmt/doctor-3.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body text-center pb-5 bb">
                  <h4>Dr. Ena Dicrosa</h4>
                  <p>Aesthetic Dentistry</p>
                  <div className="about-icon align-center">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-instagram"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                class="card mb-5 mt-5"
                style={{ width: "22rem", margin: "auto" }}
              >
                <img
                  src="https://i.ibb.co/LhW0YzV/doctor-2.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body text-center pb-5 bb">
                  <h4>Dr. Addison Smith</h4>
                  <p>Gastroenterologists</p>
                  <div className="about-icon align-center">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-instagram"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
