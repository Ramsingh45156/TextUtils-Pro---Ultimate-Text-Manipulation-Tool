import React from "react";

export default function About(props) {
  return (
    <div className="container">
      <div className="mb-3" style={{color: props.mode==="dark"? 'white' : "black" }}>
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          style={{backgroundColor: props.mode==="dark"? '#072344' : "white",color: props.mode==="dark"? 'white' : "black" }}
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3"style={{color: props.mode==="dark"? 'white' : "black" }}>
        <label for="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          style={{backgroundColor: props.mode==="dark"? '#072344' : "white",color: props.mode==="dark"? 'white' : "black" }}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
}
