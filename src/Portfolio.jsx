import React from "react";
import entries from "./portfolioEntries";

const PortfolioEntry = () => {

}

const Portfolio = () => {
  console.log(entries)
  return <div>
    Portfolio
    <PortfolioEntry />
  </div>;
};

export default Portfolio;
