import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  // console.log(people);
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((prevIndex) => {
      prevIndex++;
      if (prevIndex >= people.length) {
        prevIndex = 0;
      }
      console.log(prevIndex);
      return prevIndex;
    });
  };
  const prevPerson = () => {
    setIndex((prevIndex) => {
      prevIndex--;
      if (prevIndex < 0) {
        prevIndex = people.length - 1;
      }
      return prevIndex;
    });
  };
  const randomPerson = () => {
    setIndex((prevIndex) => {
      prevIndex = Math.floor(Math.random() * people.length);
      console.log(prevIndex);
      return prevIndex;
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
