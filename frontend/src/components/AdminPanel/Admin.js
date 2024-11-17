import React, { useState } from "react";
import "./Admin.css";
import dummyData from "../../dummy";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [searchText, setSearchText] = useState("");
  const [profiles] = useState(dummyData);
  const [filteredProfiles, setFilteredProfiles] = useState(dummyData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(filteredProfiles.length / itemsPerPage);

  const handleSearch = (e) => {
    const search = e.target.value;
    setSearchText(search);

    const finalProfiles = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProfiles(finalProfiles);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const navigate = useNavigate();
  const handleChange = (item) => {
    navigate(`/details/${item.id}`);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Get the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProfiles = filteredProfiles.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="admin-container">
      <h1 className="text-primary">Admin Panel</h1>
      <div className="container small-admin-container">
        <div className="row">
          <div className="col-12 search-container">
            <input
              type="text"
              name="search"
              value={searchText}
              onChange={handleSearch}
              placeholder="Search profiles"
              className="input-bar"
            />
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </div>
          {currentProfiles.map((item) => (
            <div
              className="col-12 col-md-6 col-lg-4 card-container"
              key={item.id}
            >
              <div className="card mt-3">
                <img src={item.image} alt={`${item.name}-image`} />
                <h1>{item.name}</h1>
                <p>{item.place}</p>
                <p>{item.description}</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleChange(item)}
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className=" d-flex justify-content-center pagination-container">
          <button
            className="btn btn-secondary mr-4"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`btn ${
                currentPage === index + 1 ? "btn-primary" : "btn-light"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="btn btn-secondary ml-4"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
