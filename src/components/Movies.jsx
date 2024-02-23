import React, { useEffect, useState } from "react";
import render from "./Navbar";
import "../css/movie.css";
import axios from "axios";

const Movies = () => {
  // for the moving words
  const words = ["Movies", "Series", "Anime"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  //   to consume the api

  const [search, setSearch] = useState("");

  const [show, setShow] = useState([]);

  const [result, setResult] = useState("");

  useEffect(() => {
    const fetchMe = () => {
      fetch(
        `https://online-movie-database.p.rapidapi.com/auto-complete?q=+${search}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "0c7e152adamsh2259fb2423de343p1cd8c5jsnde0d5a9288ef",
            "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setShow(data.d);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchMe();
  }, [result]);

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setResult(search);
  };

  const render = show.map((item, index) => {
    return (
      <div key={index} className="group">
        <img src={item.i.imageUrl} alt="" width="200" height="170px" />
        <p className="title">{item.l}</p>
        <p className="title">{item.s}</p>
      </div>
    );
  });
  return (
    <div className="movie">
      <h2>
        Search for your favourite{" "}
        <span className="word"> {words[currentIndex]} </span>here!!!
      </h2>
      <form onSubmit={submitHandler} className="form">
        <input
          type="text"
          value={search}
          onChange={onChangeHandler}
          className="search"
        />
        <button type="submit" className="button btn btn-primary">
          Submit
        </button>
      </form>
      <div className="container">{render}</div>
    </div>
  );
};

export default Movies;
