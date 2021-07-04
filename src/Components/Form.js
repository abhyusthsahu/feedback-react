import React from "react";
import { useState } from "react";
import firebase from "../Config/firebase";

const Form = ({setData}) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [feedback, setFeedback] = useState("");
    const [gender, setGender] = useState("");

    const handleDetails = async (e) => {
      e.preventDefault();
      if (fname && lname && feedback && gender) {
        const today = new Date();
        await firebase.database().ref(`feedbacks/${Date.now()}`).set({
            Name: `${fname} ${lname}`,
            Feedback: feedback,
            Gender: gender,
            Dates: `${today.getDate()}-${
              today.getMonth()+1
            }-${today.getFullYear()}`,
          });
           
      setFname("");
      setLname("");
      setFeedback("");
      }
      else
      alert("* marked details are mandatory");
    };

return (
      <form>
        <div className="mb-3">
          <div className="row">
            <div className="col">
              <label className="form-fname">
                First Name *
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                id="fname"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div className="col">
              <label className="form-lname">
                Last Name *
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                id="lname"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Feedback *
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}></textarea>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="Male"
            onClick={(e) => setGender(e.target.value)}/>
          <label className="form-check-label">
            Male
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="Female"
            onClick={(e) => setGender(e.target.value)}/>
          <label className="form-check-label">
            Female
          </label>
        </div>
        <p></p>
        <button
          type="submit"
          className="btn btn-primary" onClick={(e) => handleDetails(e)}>
          Submit
        </button>
      </form>
  );

 }
        export default Form