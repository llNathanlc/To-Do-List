const Span = ({ Id, Class, Text, onClick }) => {
  const span = document.createElement("span");
  span.id = Id;
  span.classList.add(Class);
  span.textContent = Text;
  span.addEventListener("pointerdown", onClick);

  return span;
};

const SpanWithIcon = ({ Id, Class, Text, Icon, onClick }) => {
  const spanDiv = document.createElement("div");
  spanDiv.classList.add("spanDiv");

  const icon = Icon;

  const span = document.createElement("span");
  span.id = Id;
  span.classList.add(Class);
  span.textContent = Text;
  spanDiv.addEventListener("pointerdown", onClick);

  spanDiv.append(icon,span);
  return spanDiv
};

export {Span,SpanWithIcon};
