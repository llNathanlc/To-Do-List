import "./mythingsPage.css";

const mythingsPage =(Id, Class) =>{
    const mythingsPage = document.createElement("div");
    mythingsPage.id = Id;
    mythingsPage.classList.add(Class);

    const element = document.createElement("div");
    element.textContent="mythings";

    mythingsPage.append(element);

    return mythingsPage;
}

export default mythingsPage;