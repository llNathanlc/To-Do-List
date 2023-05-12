import "./upcomingPage.css";

const UpcomingPage =(Id,Class) =>{
    const upcomingPage = document.createElement("div");
    upcomingPage.id = Id;
    upcomingPage.classList.add(Class);

    const element = document.createElement("div");
    element.textContent="upcoming";

    upcomingPage.append(element);

    return upcomingPage;
}

export default UpcomingPage;