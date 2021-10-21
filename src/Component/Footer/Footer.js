
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row col-12 m-auto w-100">
            <div className="col-md-3">
              <div className="footone">
                <h2>Medico.</h2>
                <p>
                Dental bonding is a technique used to correct imperfections with your teeth to give you a better-looking smile.
                </p>
                <img src="https://i.ibb.co/Vpnn7SK/signature.png" alt="" />
                <div className="footdoc my-3">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        className="img-fluid rounded"
                        src="https://i.ibb.co/4TjyRF8/footer-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="footdoc-content">
                        <h5>Dr. Thomas Albin</h5>
                        <p>CEO & Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h3 className="mb-4">Useful Link</h3>
              <ul class="list-unstyled">
                <li>Home</li>
                <li> Products</li>
                <li>About Us</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="foottwo">
                <h3>News & Blog </h3>
                <div className="footdoc2 my-3">
                  <div className="row col-12 m-auto w-100">
                    <div className="col-md-4">
                      <img
                        className="img-fluid rounded"
                        src="https://i.ibb.co/BGcbWW9/footer-3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="footdoc-content">
                        <h6>By Daisy Gabriela</h6>
                        <p>Dental Hygiene for Children</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footdoc2 my-3">
                  <div className="row col-12 m-auto w-100">
                    <div className="col-md-4">
                      <img
                        className="img-fluid rounded"
                        src="https://i.ibb.co/5c6SN42/footer-4.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="footdoc-content">
                        <h6>By Ronnie Aaron</h6>
                        <p>Regular Checkup for Good Teeth By </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footdoc2 my-3">
                  <div className="row col-12 m-auto w-100">
                    <div className="col-md-4">
                      <img
                        className="img-fluid rounded"
                        src="https://i.ibb.co/26mrHvV/footer-2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="footdoc-content">
                        <h6>By Babatunde Jon</h6>
                        <p>Teeth Whitening is Now Popular</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footThree">
                <h3>Contact Information</h3>
                <div className="footdoc3 my-3">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="footicon">
                        <i class="fas fa-phone-volume"></i>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="footdoc-content">
                        <p>Call Today</p>
                        <h6>+088 123 654 987</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footdoc3 my-3">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="footicon">
                        <i class="far fa-clock"></i>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="footdoc-content">
                        <p>Open Hour</p>
                        <h6>09:00 AM to 18:00 PM</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footdoc3 my-3">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="footicon">
                        <i class="fas fa-street-view"></i>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="footdoc-content">
                        <p>Our Location</p>
                        <h6>35 West Dental Street California 1004</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <hr/>
          </div>
          <div className="text-center">
            <p>Copyright © 2021 Israt Zahan Korobi</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
