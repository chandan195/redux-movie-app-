import React from "react";
import pnf from "../../images/pnf.jpg"
import "../PageNotFound/PageNotFound.css"
import Header from "../Header/Header";
// import Footer from "./components/Footer/Footer";

const PageNotFound = () => {
  return (
    
    <div>  
      <div>
        <Header/>
        </div>  
      {/* <div>PageNotFound</div> */}
      <div className="pnf-image">
        <img src={pnf} alt="pnf" />
      </div>
    </div>
  );
};

export default PageNotFound;
