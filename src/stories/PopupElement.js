import React from "react";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  object
} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import Popup from "../Popup";
const PopupElement = () => {
  const labels = "Styles";
  const defaultValueStyles = {
    backgroundColor: "#FFFFFF"
  };

  const label = "trigger On";
  const options = {
    click: "click",
    hover: "hover"
  };
  const defaultValue = "click";
  const on = select(label, options, defaultValue);
  const label2 = "Position";
  const options2 = {
    "top left": "top left",
    "top center": "top center",
    "top right": "top right",
    "bottom left": "bottom left",
    "bottom center": "bottom center",
    "bottom right": "bottom right",
    "right top": "right top",
    "right center": "right center",
    "right bottom": "right bottom",
    "left top": "left top",
    "left center": "left center",
    "left bottom": "left bottom"
  };
  const defaultValue2 = "top left";
  const position = select(label2, options2, defaultValue2);
  const StylesValue = object(labels, defaultValueStyles);
  const closeOnDocumentClick = boolean("closeOnDocumentClick", true);

  return (
    <div>
      <div style={{ zIndex: "90" }}>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptas s{" "}
        <Popup
          on="click"
          position="bottom left"
          closeOnDocumentClick={true}
          //defaultOpen={true}
          trigger={open => (
            <button>Button nested {open ? "open" : "close"}</button>
          )}
        >
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            voluptas ex, blanditiis reiciendis dolor numquam pariatur facilis,
            labore, libero nihil asperiores ae facilis quis commodi dolores, at
            enim. Deserunt qui, officiis culpa optio numquam ullam pariatur
            voluptas tempora doloremque!
          </div>
        </Popup>
        <Popup
          on={on}
          contentStyle={StylesValue}
          trigger={
            <button
              style={{ position: "absolute", top: "100px", left: "300px" }}
            >
              Button 2
            </button>
          }
          closeOnDocumentClick={closeOnDocumentClick}
          position={position}
        >
          <div>
            sum dolor sit amet consectetur adipisicing elit. Nemo voluptas ex,
            blanditiis reiciendis dolor numquam pariatur facilis, labore, libero
            nihil asperiores ae facilis quis commodi dolores, at enim. Deserunt
            qui, officiis culpa optio numquam ullam pariatur voluptas tempora
            doloremque!
            <Popup
              on="click"
              position="bottom left"
              closeOnDocumentClick={true}
              trigger={<button>Button nested</button>}
            >
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                voluptas ex, blanditiis reiciendis dolor numquam pariatur
                facilis, labore, libero nihil asperiores ae facilis quis commodi
                dolores, at enim. Deserunt qui, officiis culpa optio numquam
                ullam pariatur voluptas tempora doloremque!
              </div>
            </Popup>
          </div>
        </Popup>
      </div>

      <div style={{ zIndex: "90" }}>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptas
        ex, blanditiis reiciendis dolor numquam pariatur facilis, labore, libero
        nihil asperiores ae facilis{" "}
      </div>
    </div>
  );
};

export default PopupElement;
