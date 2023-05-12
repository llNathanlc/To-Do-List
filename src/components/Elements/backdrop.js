const Backdrop = (Id, Class, Title, Form) => {
  const backdrop = document.createElement("div");
  backdrop.id = Id;
  backdrop.classList.add(Class);

  const backdropBox = document.createElement("div");
  backdropBox.id = "backdropBox";

  const form = Form;

  const title = document.createElement("span");
  title.id = "formTitle";
  title.textContent = Title;

  backdropBox.append(title, form);

  backdrop.appendChild(backdropBox);

  const content = document.getElementById("content");

  backdrop.addEventListener("pointerdown", (e) => {
    if (e.target !== backdrop) {
      return;
    } else {
      content.removeChild(content.lastChild);
    }
  });

  return backdrop;
};

export default Backdrop;
