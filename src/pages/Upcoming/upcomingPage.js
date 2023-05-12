import "./upcomingPage.css";

const UpcomingPage =() =>{
    const upcomingPage = document.createElement("div");
    upcomingPage.id = "upcomingPage";

    const element = document.createElement("div");
    element.textContent="upcoming";

    upcomingPage.append(element);

    return upcomingPage;
}

export default UpcomingPage;