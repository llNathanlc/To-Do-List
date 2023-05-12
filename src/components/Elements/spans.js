const Span = ({ Id, Class, Text, onClick }) => {
  const spanDiv = document.createElement("div");
  spanDiv.classList.add("spanDiv");
  spanDiv.id = "projectSpan";

  const span = document.createElement("span");
  span.id = Id;
  span.classList.add(Class);
  span.textContent = Text;
  spanDiv.addEventListener("pointerdown", onClick);

  spanDiv.append(span);

  return spanDiv;
};

const SpanWithIcon = ({ Id,spanDivId, spanDivClass, Class, Text, Icon, onClick }) => {
  const spanDiv = document.createElement("div");
  spanDiv.classList = spanDivClass;
  spanDiv.id = spanDivId;

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
