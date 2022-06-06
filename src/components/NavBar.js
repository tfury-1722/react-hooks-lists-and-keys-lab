import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const menuLinks = links.map((link) => (
    <a key={link} href={`#${link}`}>
      {link}
    </a>
  ));

  return <nav>{menuLinks}</nav>;
}

export default NavBar;
