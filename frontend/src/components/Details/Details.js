import React from "react";
import { useParams } from "react-router-dom";
import dummyData from "../../dummy";
import MapContainer from "../Maps/MapContainer";

const Details = () => {
  const { id } = useParams();
  const item = dummyData.find((item) => item.id === id);

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <div className="container mt-5 container1">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card mb-4 d-flex flex-column align-items-center">
            <div className="card-body text-center">
              <div className="d-flex justify-content-center mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid rounded-circle"
                  style={{
                    width: "40%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </div>

              <h1 className="card-title">{item.name}</h1>

              <p className="card-text">
                <strong>Place:</strong> {item.place}
              </p>

              <p className="card-text">
                <strong>Description:</strong> {item.description}
              </p>

              <div className="d-flex justify-content-around w-100 mt-3">
                <button type="button" className="btn btn-primary w-25">
                  Edit
                </button>
                <button type="button" className="btn btn-danger w-25">
                  Delete
                </button>
              </div>
              <MapContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
