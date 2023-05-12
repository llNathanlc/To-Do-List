import lightSkin from "../../assets/colors/light-skin.svg";
import Icon from "./icon";
import grey from "../../assets/colors/grey.svg";
import black from "../../assets/colors/black.svg";
import blue from "../../assets/colors/blue.svg";
import green from "../../assets/colors/green.svg";
import orange from "../../assets/colors/orange.svg";
import pink from "../../assets/colors/pink.svg";
import purple from "../../assets/colors/purple.svg";
import red from "../../assets/colors/red.svg";
import yellow from "../../assets/colors/yellow.svg";
import { SpanWithIcon } from "./spans";

const colors = {
  Grey: grey,
  LightSkin: lightSkin,
  Blue: blue,
  Green: green,
  Orange: orange,
  Pink: pink,
  Purple: purple,
  Red: red,
  Yellow: yellow,
  Black: black,
};

const Droplist = () => {
  const container = document.createElement("div");

  const colorsNames = Object.keys(colors);
  const colorsFiles = Object.values(colors);

  const droplistText = document.createElement("div");
  droplistText.id = "droplistText";
  droplistText.addEventListener("pointerdown", () => {
    if (droplist.style.display === "none") {
      droplist.style.display = "block";
    } else {
      droplist.style.display = "none";
    }
  });

  const droplist = document.createElement("div");
  droplist.id = "droplist";
  droplist.style.display = "none";

  const color1 = SpanWithIcon({
    Id: "color1",
    spanDivId:"Grey",
    spanDivClass: "spanDivForm",
    Class: "color",
    Text: "Grey",
    Icon: Icon("color1", "droplistIcon", grey),
    onClick: () => {
      droplistText.removeChild(droplistText.firstChild);
      droplistText.append(color1.cloneNode(true));
    },
  });
  for (let i = 0; i < colorsNames.length; i++) {
    let colorElement = SpanWithIcon({
      Id: `color${i}`,
      spanDivId: colorsNames[i],
      spanDivClass: "spanDivForm",
      Class: "color",
      Text: colorsNames[i],
      Icon: Icon(`color${i}`, "droplistIcon", colorsFiles[i]),
      onClick: () => {
        droplist.style.display = "none";
        droplistText.removeChild(droplistText.firstChild);
        droplistText.append(colorElement.cloneNode(true));
      },
    });
    droplist.append(colorElement);
  }
  droplistText.append(color1.cloneNode(true));
  container.append(droplistText, droplist);

  return container;
};

export default Droplist;
