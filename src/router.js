import TodayPage from "./pages/Today/todayPage";
import InboxPage from "./pages/Inbox/inboxPage";
import UpcomingPage from "./pages/Upcoming/upcomingPage";
import ProjectsPage from "./pages/Projects/projectsPage";
import mythingsPage from "./pages/ExampleProject/mythingsPage";

const routes = {
  "#/today": TodayPage("todayPage", "page"),
  "#/inbox": InboxPage("inboxPage", "page"),
  "#/upcoming": UpcomingPage("upcomingPage", "page"),
  "#/projects": ProjectsPage("projectsPage", "page"),
  "#/mythings": mythingsPage("mythingsPage","page"),
};
const Router = () => {
  const display = document.getElementById("display");
  const route = routes[window.location.hash];

  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }

  if (route) {
    display.append(route);
  } else {
    console.log("404");
  }
};

const initRouter = () => {
  window.addEventListener("hashchange", Router);
  window.addEventListener("DOMContentLoaded", Router);
};

export default initRouter;
