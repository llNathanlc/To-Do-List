import "./inboxPage.css";

const InboxPage =() =>{
    const inboxPage = document.createElement("div");
    inboxPage.id = "inboxPage";

    const element = document.createElement("div");
    element.textContent="inbox";

    inboxPage.append(element);

    return inboxPage;
}

export default InboxPage;