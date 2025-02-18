import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';

// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" onSetRating={setMovieRating} maxRating={10} />
//       <p>This movie was rated {movieRating} starts</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      message={["terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={10} />
    <StarRating
      maxRating={15}
      size={24}
      color="#A1E3F9"
      className="test11"
      defaultRating={3}
    /> */}

    {/* <Test /> */}
  </React.StrictMode>
);
