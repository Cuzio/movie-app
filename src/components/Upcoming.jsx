import React, { useEffect, useState } from "react";
import axios from "axios";

const Upcoming = () => {
  const [coming, setComing] = useState([]);
  const [showMe, setShowMe] = useState("");

  useEffect(() => {
    const come = () => {
      const options = {
        method: "GET",
        url: "https://online-movie-database.p.rapidapi.com/auto-complete",
        params: { q: "game of thr" },
        headers: {
          "X-RapidAPI-Key":
            "0c7e152adamsh2259fb2423de343p1cd8c5jsnde0d5a9288ef",
          "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response);
          //   setComing(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    come();
  }, [coming]);

  //   try {
  //       const response = await axios.request(options);
  //       console.log(response.data);
  //   } catch (error) {
  //       console.error(error);
  //   }
  return (
    <div>
      <h1>Welcome</h1>
      <input type="text" />
      {coming}
    </div>
  );
};

export default Upcoming;
