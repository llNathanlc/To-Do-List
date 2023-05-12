import "./sidebar.css";
import { SpanWithIcon } from "../Elements/spans.js";
import Projects from "./projects";
import Icon from "../Elements/icon.js";
import calendar from "../../assets/calendar.svg";
import calendarNext from "../../assets/calendar-next.svg";
import mail from "../../assets/mail.svg";
import lightSkin from "../../assets/colors/light-skin.svg";

const Sidebar = () => {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  const upsideDiv = document.createElement("div");
  upsideDiv.id="upsideDiv";

  const inboxSpan = SpanWithIcon({
    Id: "inboxSpan",
    Class: "sidebarSpan",
    Text: "Inbox",
    Icon: Icon("mailIcon", "sidebarIcon", mail),
    onClick: () => {
      window.location.hash = "/inbox";
    },
  });

  const todaySpan = SpanWithIcon({
    Id: "todaySpan",
    Class: "sidebarSpan",
    Text: "Today",
    Icon: Icon("calendarIcon", "sidebarIcon", calendar),
    onClick: () => {
      window.location.hash = "/today";
    },
  });
  const upcomingSpan = SpanWithIcon({
    Id: "upcomingSpan",
    Class: "sidebarSpan",
    Text: "Upcoming",
    Icon: Icon("calendarnextIcon", "sidebarIcon", calendarNext),
    onClick: () => {
      window.location.hash = "/upcoming";
    },
  });
  upsideDiv.append(inboxSpan, todaySpan, upcomingSpan);

  const downsideDiv = document.createElement("div");

  const projects = Projects();

  const projectsWrapper = document.createElement("div");

  const projectExample = SpanWithIcon({
    Id: "projectExample",
    Class: "sidebarSpan",
    Text: "My Things",
    Icon: Icon("Icon", "sidebarIcon", lightSkin),
    onClick: () => {
      console.log("idkman");
    },
  });
  projectsWrapper.append(projectExample);
  downsideDiv.append(projects, projectsWrapper);

  sidebar.append(upsideDiv, downsideDiv);
  return sidebar;
};

export default Sidebar;
