import React from "react";
import "../styles/UpperContainer.css";
import { BsFillPlayFill } from "react-icons/bs";
function UpperContainer() {
  return (
    <div className="upper">
      <img src="https://i94.servimg.com/u/f94/20/44/55/20/photo10.png" alt="" />
      <button>
        <BsFillPlayFill />
      </button>
    </div>
  );
}

export { UpperContainer };
