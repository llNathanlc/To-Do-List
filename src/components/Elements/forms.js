import Droplist from "./droplist";

const projectsForm = () => {
  const content = document.getElementById("content");

  const formDiv = document.createElement("div");
  formDiv.id = "formSeparation";

  const form = document.createElement("form");

  const divOne = document.createElement("div");
  divOne.classList.add("formDiv");

  const nameLabel = document.createElement("label");
  nameLabel.classList.add("formLabel");
  nameLabel.setAttribute("for", "projectName");
  nameLabel.textContent = "Name";

  const nameInput = document.createElement("input");
  nameLabel.setAttribute("name", "projectName");

  divOne.append(nameLabel, nameInput);

  const divTwo = document.createElement("div");
  divTwo.classList.add("formDiv");

  const colorLabel = document.createElement("label");
  colorLabel.classList.add("formLabel");
  colorLabel.setAttribute("for", "projectColor");
  colorLabel.textContent = "Color";

  const colorInput = Droplist();
  colorInput.setAttribute("name", "projectColor");
  colorInput.id = "colorInput";

  divTwo.append(colorLabel, colorInput);

  const divThree = document.createElement("div");

  const favoritesLabel = document.createElement("label");
  favoritesLabel.id = "favoritesText";
  favoritesLabel.setAttribute("for", "projectFavorites");
  favoritesLabel.textContent = "Add to favorites";

  const favoritesInput = document.createElement("input");
  favoritesInput.setAttribute("name", "projectFavorites");
  favoritesInput.type = "checkbox";

  divThree.append(favoritesLabel, favoritesInput);

  const divFour = document.createElement("div");
  divFour.id = "buttonsDiv";

  const buttonCancel = document.createElement("button");
  buttonCancel.id = "buttonCancel";
  buttonCancel.classList.add("formButton");
  buttonCancel.textContent = "Cancel";

  buttonCancel.addEventListener("pointerdown", () => {
    content.removeChild(content.lastChild);
  });

  const buttonAdd = document.createElement("button");
  buttonAdd.setAttribute("type", "submit");
  buttonAdd.classList.add("formButton");
  buttonAdd.textContent = "Add";

  divFour.append(buttonCancel, buttonAdd);

  formDiv.append(divOne, divTwo, divThree);

  form.append(formDiv, divFour);

  return form;
};

export default projectsForm;
