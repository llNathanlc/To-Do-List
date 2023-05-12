import Button from "../Elements/buttons.js";
import Icon from "../Elements/icon.js";
import "./navbar.css";
import home from "../../assets/home.svg";
import menu from "../../assets/menu.svg";
import plus from "../../assets/plus.svg";

const Navbar = () => {
  const navbarElement = document.createElement("nav");
  navbarElement.id = "navbar";

  const sidebarButton = Button({
    Id: "sidebarButton",
    Class: "navbarButton",
    Icon: Icon("","navbarIcon", menu),
    onClick: () => {
      const sidebar = document.getElementById("sidebar");
      const spanDiv = document.querySelectorAll(".spanDiv");
      const sidebarIcons = document.querySelectorAll(".sidebarIcon");
      const sidebarSpans = document.querySelectorAll(".sidebarSpan");
      if (sidebar.style.width === "0rem") {
        sidebar.style.width = "14rem";
        spanDiv.forEach((e) => {
            e.style.padding="0.4rem";
            e.style.width="12rem";
        });
        sidebarIcons.forEach((e) => (e.style.width = "1.3rem"));
        sidebarSpans.forEach((e) => (e.style.fontSize = "1rem"));
      } else {
        sidebar.style.width = "0rem";
        spanDiv.forEach((e) => {
            e.style.padding="0rem";
            e.style.width="0rem";
        });
        sidebarIcons.forEach((e) => (e.style.width = "0rem"));
        sidebarSpans.forEach((e) => (e.style.fontSize = "0rem"));
      }
    },
  });
  const homeButton = Button({
    Id: "homeButton",
    Class: "navbarButton",
    Icon: Icon("","navbarIcon", home),
    onClick: () => {
      window.location.hash = "/today";
    },
  });
  const plusButton = Button({
    Id: "plusButton",
    Class: "navbarButton",
    Icon: Icon("","navbarIcon", plus),
    onClick: () => {
      console.log("ayy");
    },
  });

  navbarElement.append(sidebarButton, homeButton, plusButton);

  return navbarElement;
};

export default Navbar;
