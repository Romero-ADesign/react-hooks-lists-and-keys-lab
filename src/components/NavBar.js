import React from "react";
import Links from "./Links.js";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkHrefs = ["#home", "#about", "#projects"];
  const linkElements = links.map((linkList, index) => {
    return <a key={index}href={linkHrefs}>{linkList}</a>
  });
  console.log(linkElements)
  return (
    <nav>{linkElements}</nav>
  );
}

export default NavBar;
