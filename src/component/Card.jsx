import React from "react";

function Card(props) {

  return (
    <div className="card-wrapper" data-card-id={props.id} >
      <div className="card-container">
        <div className="card-content">
          <div className="card-top">
            <img src={process.env.PUBLIC_URL+props.bannerURL} className="card-banner" alt="card banner" />
          </div>

          <div className="card-bottom">
            <div className="card-portrait">
              <img src={process.env.PUBLIC_URL+props.portrait} alt="user portrait" />
            </div>
            <div className="btn-wrapper"><button data-card-id={props.id} className={"follow-btn" + ((props.follow) ? " highlight" : "")} onClick={props.clickHandler} name="follow">{(props.follow) ? "Following" : "Follow"}</button></div>
            <h1 className="card-title">{props.title}</h1>
            <p className="card-caption">{props.caption} — {props.tags}</p>
            <p  className="card-details"><span>{props.zodiacDate}</span></p>
            <p className="card-caption">{props.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;