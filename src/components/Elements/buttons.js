const Button = ({ Id, Class, onClick }) => {
  const buttonElement = document.createElement("button");

  buttonElement.id = Id;
  buttonElement.classList.add(Class);
  buttonElement.addEventListener("pointerdown", onClick);

  return buttonElement;
};

export default Button;
