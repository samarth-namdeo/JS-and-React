import React from "react";

const Footer = () => {
  let footerstyle = {
    position: "relative",
    width: "100%",
    top: "92.5vh",
  };
  return (
    <div className="bg-dark text-light py-3" style={footerstyle}>
      <p className="text-center">CopyRight &copy; SamarthCreates:)</p>
    </div>
  );
};

export default Footer;
