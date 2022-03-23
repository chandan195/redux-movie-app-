import React from "react";
import pnf from "../../images/pnf.jpg"
import "../PageNotFound/PageNotFound.css"
// import Headers from "../Header/Headers";

const PageNotFound = () => {
  return (
    
    <div> 
      {/* <div>
        <Headers/>
        </div>  */}
      
      <div className="pnf-image">
        <img src={pnf} alt="pnf" />
      </div>
    </div>
  );
};

export default PageNotFound;
