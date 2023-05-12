import { Span } from "../Elements/spans";
import Button from "../Elements/buttons";
import Icon from "../Elements/icon";
import blackPlus from "../../assets/black-plus.svg";
import arrowDown from "../../assets/arrowdown.svg";
import projectsForm from "../Elements/forms";
import Backdrop from "../Elements/backdrop";

const Projects = () => {
  const projectSpan = Span({
    Id: "project",
    Class: "sidebarSpan",
    Text: "Projects",
    onClick: () => {
      window.location.hash = "/projects";
    },
  });

  const rightSideProjectDiv = document.createElement("div");

  const addProjectButton = Button({
    Id: "addProjectButton",
    Class: "sidebarButton",
    Icon: Icon("blackplusIcon", "sidebarIcon", blackPlus),
    onClick: () => {
      const content = document.querySelector("#content");
      const backdrop = Backdrop(
        "addProjectBackdrop",
        "backdrop",
        "Add Project",
        projectsForm()
      );
      content.appendChild(backdrop);
      const droplist = document.getElementById("droplist");
      const backdropBox = document.getElementById("backdropBox");
      backdropBox.addEventListener("pointerdown", (e) => {
        const colorsInput = document.querySelector("#droplistText > div");
        if (
          e.target === colorsInput ||
          e.target === colorsInput.firstChild ||
          e.target === colorsInput.lastChild ||
          e.target === droplist
        ) {
          return;
        } else {
          droplist.style.display = "none";
        }
      });
    },
  });
  const toggleProjectsButton = Button({
    Id: "toggleProjectsButton",
    Class: "sidebarButton",
    Icon: Icon("arrowdownIcon", "sidebarIcon", arrowDown),
    onClick: () => {
      console.log("ayy");
    },
  });
  rightSideProjectDiv.append(addProjectButton, toggleProjectsButton);
  projectSpan.append(rightSideProjectDiv);

  return projectSpan;
};
export default Projects;
