import React from "react";
import DpUser from "../assets/images/profile.png";
import "../assets/styles/UserCard.css";
function UserCard(props) {
  return (
    <div className="card my-3">
      <div className="row g-0">
        <div className="col-md-1 col-12 text-center text-md-start">
          <img src={DpUser} className="img-fluid img-card m-3" />
        </div>
        <div className="col-md-4 col-12">
          <div className="card-body ms-md-5 text-center text-md-start ">
            <h3 className="card-title">{props.name}</h3>
            <h5>{props.dept}</h5>
            <p>{props.college}</p>
          </div>
        </div>
        <div className="col-md-7 col-12">
          <div className="d-flex justify-content-evenly align-content-center mt-md-5 my-2 my-md-0">
            <button className="btn btn-primary btn-sm">
              Page <i className="bi bi-1-circle-fill"></i>
            </button>
            <button className="btn btn-primary btn-sm ">
              Page <i className="bi bi-2-circle-fill"></i>
            </button>
            <button className="btn btn-primary btn-sm">
              Page <i className="bi bi-3-circle-fill"></i>
            </button>
            <button className="btn btn-danger btn-sm">
              Reject <i class="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
