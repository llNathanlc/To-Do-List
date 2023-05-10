import Button from "../Elements/buttons.js";
import "./navbar.css";

const Navbar = () => {
  const navbarElement = document.createElement("nav");
  navbarElement.id = "navbar";

  const sidebarButton = Button({
    Id: "sidebarButton",
    Class: "navbarButton",
    onClick: () => {
      const sidebar = document.getElementById("sidebar");
      const sidebarIcons = document.querySelectorAll(".sidebarIcon");
      const sidebarSpans = document.querySelectorAll(".sidebarSpan");
      if (sidebar.style.width === "14rem") {
        sidebar.style.width = "0rem";
        sidebarIcons.forEach((e) => (e.style.width = "0rem"));
        sidebarSpans.forEach((e) => (e.style.fontSize = "0rem"));
      } else {
        sidebar.style.width = "14rem";
        sidebarIcons.forEach((e) => (e.style.width = "1.3rem"));
        sidebarSpans.forEach((e) => (e.style.fontSize = "1rem"));
      }
    },
  });
  const homeButton = Button({
    Id: "homeButton",
    Class: "navbarButton",
    onClick: () => {
      console.log("lmao");
    },
  });
  const plusButton = Button({
    Id: "plusButton",
    Class: "navbarButton",
    onClick: () => {
      console.log("ayy");
    },
  });

  navbarElement.append(sidebarButton, homeButton, plusButton);

  return navbarElement;
};

export default Navbar;
