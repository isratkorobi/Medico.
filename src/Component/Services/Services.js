import React from "react";
import { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./servicedata.json")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 12)));
  }, []);
  return (
    <div className="mt-5 service pt-3 text-center mb-5">
      <h3>SERVICES</h3>
      <h1>What We Offer</h1>
      <p>
        Teachzy offers students the best of education and entertainment
        opportunities available in the area.
        <br /> We are glad to take care of every student and university entrant.
      </p>
      <div className="service-container">
        {services.map((service) => (
          <Service key={service?.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
