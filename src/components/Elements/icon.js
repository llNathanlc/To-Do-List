const Icon = (Id, Class, Src) => {
  const icon = new Image();
  icon.id = Id;
  icon.classList.add(Class);
  icon.src = Src;
  return icon;
};

export default Icon;
