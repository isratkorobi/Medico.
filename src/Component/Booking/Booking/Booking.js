import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { id } = useParams();
  const [user, setuser] = useState([]);
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("/servicedetail.json")
      .then((res) => res.json())
      .then((data) => setuser(data));
  }, [id]);

  useEffect(() => {
    const item = user?.find((detail) => detail?.id === id);
    setData(item);
  }, [user]);
  console.log(user);

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-5 m-auto">
            <div className="card">
              <img src={data?.img} />
              <div className="card-body p-4">
                <h3>{data?.title} </h3>
                <p>{data?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
