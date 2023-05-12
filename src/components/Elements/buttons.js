const Button = ({ Id, Class, Icon, onClick }) => {
  const buttonElement = document.createElement("button");

  const icon = Icon;

  buttonElement.id = Id;
  buttonElement.classList.add(Class);
  buttonElement.addEventListener("pointerdown", onClick);

  buttonElement.append(icon);

  return buttonElement;
};

export default Button;
