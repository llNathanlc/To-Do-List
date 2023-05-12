import "./todayPage.css";

const TodayPage =() =>{
    const todayPage = document.createElement("div");
    todayPage.id = "todayPage";

    const element = document.createElement("div");
    element.textContent="today";

    todayPage.append(element);

    return todayPage;
}

export default TodayPage;