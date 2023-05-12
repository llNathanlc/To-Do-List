import Navbar from "./components/Navbar/navbar.js";
import Sidebar from "./components/Sidebar/sidebar.js";
import Display from "./components/Display/display.js";
import Router from "./router.js";
import "./index.css";

function App() {
  const content = document.getElementById("content");

  const navbar = Navbar();
  const sidebar = Sidebar();
  const display = Display();
  content.append(navbar, sidebar, display);

  if (!window.location.hash) {
    window.location.hash = "#/today";
  }

  Router();
}

App();
