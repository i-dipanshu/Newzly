import React from "react";
import loading from "./loading.gif";

const spinner = () => {
  
    return (
      <div>
        <img className="w-28 m-auto" src={loading} alt="loading" />
      </div>
    );
  }
  export default spinner; 
