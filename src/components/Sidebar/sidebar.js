import "./sidebar.css";
import {SpanWithIcon} from "../Elements/spans.js";
import Icon from "../Elements/icon.js";
import calendar from "../../assets/calendar.svg";
import calendarNext from "../../assets/calendar-next.svg";

const Sidebar = () => {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";


  const todaySpan = SpanWithIcon({
    Id: "todaySpan",
    Class:"sidebarSpan",
    Text:"Today",
    Icon: Icon("calendarIcon","sidebarIcon",calendar),
    onClick: ()=>{console.log("idkman");}
  })
  const upcomingSpan = SpanWithIcon({
    Id: "upcomingSpan",
    Class:"sidebarSpan",
    Text:"Upcoming",
    Icon: Icon("calendarnextIcon","sidebarIcon",calendarNext),
    onClick: ()=>{console.log("idkman");}
  })
  console.log(upcomingSpan)

  sidebar.append(todaySpan,upcomingSpan);
  return sidebar;
};

export default Sidebar;
