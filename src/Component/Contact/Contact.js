import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact my-5 py-4">
        <h2 className="text-center fw-bold">Drop Us Message for Any Query</h2>
        <p className="c-text">
        Cosmetic fillings, or tooth- colored fillings, are made of composite resin and glass particles. They are cemented onto the existing teeth using a bonding agent. 
        </p>
      </div>
      <div className="myform mb-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="textarea" class="form-label">
                    Message
                  </label>
                  <textarea class="form-control" id="textarea" rows="5"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
