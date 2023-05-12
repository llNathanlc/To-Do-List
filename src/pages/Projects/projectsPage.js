import "./projectsPage.css";

const ProjectsPage =(Id,Class) =>{
    const projectsPage = document.createElement("div");
    projectsPage.id = Id;
    projectsPage.classList.add(Class);

    const element = document.createElement("div");
    element.textContent="projects";

    projectsPage.append(element);

    return projectsPage;
}

export default ProjectsPage;