import React from "react";

const FeedBack = ({ data }) => {
  let updatedFeedbacks = [];
  if (data) {
    for (let i in data) {
      updatedFeedbacks = [...updatedFeedbacks, i];
    }
  }
  return (
    <div>
      {data ? (
        <>
          {updatedFeedbacks.map((feedback) => (
            <div>
            <br></br>
        <kbd>{data[feedback].Gender === "Male" ? "Mr. " : "Mrs. "}{data[feedback]?.Name}</kbd><kbd style={{float:"right"}}>{data[feedback].Dates}</kbd>
         <p>{data[feedback]?.Feedback}</p>
         <hr></hr>
              </div>
          ))}
        </>
      ) : null}
    </div>
  );
};

    export default FeedBack;
    