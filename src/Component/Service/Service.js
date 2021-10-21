import React from "react";
import "./Service.css";
import { Link } from 'react-router-dom';
import Header from "../Header/Header";
<Header></Header>
const Service = (props) => {
  const { title, description, img ,id} = props?.service; //distructure array
  return (   
    <div>
      <div className="container">
            <div class="card mb-5" style={{ width: "25rem" }}>
              <img src={img} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5>{title}</h5>
                <p>{description}</p>
                <Link to={`/booking/${id}`}>
                  <button class="btn btn-primary  ps-4 pe-4">Booking</button>
                </Link>
              </div>
            </div>

      </div>
    </div>
  );
};

export default Service;
