import "./inboxPage.css";

const InboxPage =(Id, Class) =>{
    const inboxPage = document.createElement("div");
    inboxPage.id = Id;
    inboxPage.classList.add(Class);

    const element = document.createElement("div");
    element.textContent="inbox";

    inboxPage.append(element);

    return inboxPage;
}

export default InboxPage;