import React from "react";
import "../index.css";
function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.img} className="card-img card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <button className="cssbuttons-io">
            <a className="code" href={props.link}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                  fill="currentColor"
                ></path>
              </svg>{" "}
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
