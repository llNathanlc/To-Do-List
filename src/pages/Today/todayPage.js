import "./todayPage.css";

const TodayPage =(Id,Class) =>{
    const todayPage = document.createElement("div");
    todayPage.id = Id;
    todayPage.classList.add(Class);

    const element = document.createElement("div");
    element.classList.add("test");
    element.textContent="today";

    todayPage.append(element,element.cloneNode(true),element.cloneNode(true),element.cloneNode(true),element.cloneNode(true),element.cloneNode(true),element.cloneNode(true),element.cloneNode(true),element.cloneNode(true),element.cloneNode(true));

    return todayPage;
}

export default TodayPage;