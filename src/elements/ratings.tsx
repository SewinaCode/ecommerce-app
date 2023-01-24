import React from "react";
import "../styling/rating.scss";

export default function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div className="ratings">
      <span>
        <i
          className={
            rating >= 1
              ? "fa fa-star fa-lg"
              : rating >= 0.5
              ? "fa fa-star-half fa-lg"
              : "fa fa-star-half-stroke fa-lg"
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 2
              ? "fa fa-star fa-lg"
              : rating >= 1.5
              ? "fa fa-star-half fa-lg"
              : "fad fa-star-half-stroke fa-lg"
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? "fa fa-star fa-lg"
              : rating >= 2.5
              ? "fa fa-star-half fa-lg"
              : "fad fa-star-half-stroke fa-lg"
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? "fa fa-star fa-lg"
              : rating >= 3.5
              ? "fa fa-star-half fa-lg"
              : "fad fa-star-half-stroke fa-lg"
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? "fa fa-star fa-lg"
              : rating >= 4.5
              ? "fa fa-star-half fa-lg"
              : "fad fa-star-half-stroke fa-lg"
          }
        />
      </span>
      <h5>{numReviews} reviews</h5>
    </div>
  );
}
