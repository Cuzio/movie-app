import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  //   const [search, setSearch] = useState("");

  //   const [show, setShow] = useState([]);

  //   const [result, setResult] = useState("");

  //   useEffect(() => {
  //     const fetchMe = () => {
  //       fetch(
  //         `https://online-movie-database.p.rapidapi.com/auto-complete?q=+${search}`,
  //         {
  //           method: "GET",
  //           headers: {
  //             "X-RapidAPI-Key":
  //               "0c7e152adamsh2259fb2423de343p1cd8c5jsnde0d5a9288ef",
  //             "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  //           },
  //         }
  //       )
  //         .then((response) => {
  //           return response.json();
  //         })
  //         .then((data) => {
  //           setShow(data.d);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     };
  //     fetchMe();
  //   }, [result]);

  //   const onChangeHandler = (e) => {
  //     setSearch(e.target.value);
  //   };

  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     setResult(search);
  //   };

  //   show.map((item, index) => {
  //     return (
  //       <div key={index}>
  //         <p>{item.l}</p>
  //       </div>
  //     );
  //   });

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand" href="#">
            Cuzzy Movie
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">
                  All Movies
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link" href="#">
                  Series
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link" href="#">
                  TvShow
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/upcoming" class="nav-link" href="#">
                  Upcoming
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
