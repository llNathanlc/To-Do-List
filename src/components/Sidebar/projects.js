import { Span} from "../Elements/spans";
import Button from "../Elements/buttons";
import Icon from "../Elements/icon";
import blackPlus from "../../assets/black-plus.svg";
import arrowDown from "../../assets/arrowdown.svg";

const Projects = () => {
  const spanDiv = document.createElement("div");
  spanDiv.id = "projectSpan"
  spanDiv.classList.add("spanDiv");

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
      console.log("ayy");
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
  spanDiv.append(projectSpan, rightSideProjectDiv);

  return spanDiv;
};
export default Projects;
