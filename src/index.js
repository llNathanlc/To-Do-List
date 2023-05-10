import Navbar from "./components/Navbar/navbar.js";
import Sidebar from "./components/Sidebar/sidebar.js";
import "./index.css";

function App() {
    const content = document.getElementById("content");

    const navbar = Navbar();
    const sidebar = Sidebar();

    content.append(navbar,sidebar);
}

App();