import React from "react";

var Progress = (props) => {
  return (
    <div className="progress">
      <div className="boxes">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div
        className="progress-inner"
        style={{ transform: `scaleX(${props.score / 10})` }}
      ></div>
    </div>
  );
};

export default Progress;
