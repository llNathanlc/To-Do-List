import "./projectsPage.css";

const ProjectsPage =() =>{
    const projectsPage = document.createElement("div");
    projectsPage.id = "projectsPage";

    const element = document.createElement("div");
    element.textContent="projects";

    projectsPage.append(element);

    return projectsPage;
}

export default ProjectsPage;