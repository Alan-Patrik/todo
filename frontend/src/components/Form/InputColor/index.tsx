import { Console } from "console";
import { ChangeEvent, useState } from "react";
import { Container, Content, ContainerColor } from "./styles";

interface Props {
  onClick?(): void;
  value?: string | undefined | null;
  onChange?(event: ChangeEvent<HTMLInputElement>): void | undefined;
}

const InputColor: React.FC<Props> = ({ onClick, value, onChange }) => {
  const [selectedColor, setSelectedColor] = useState(value);
  const [color, setColor] = useState();

  localStorage.setItem("@tasksColor", JSON.stringify(selectedColor));

  return (
    <Container>
      <Content>
        <p className="p-color">Choose a color below for the card</p>
        <ContainerColor onClick={onClick} onChange={onChange}>
          <span
            onClick={() => setSelectedColor("#dd5732")}
            className={`span-color ${
              selectedColor === "" || selectedColor === "#dd5732"
                ? "color-one"
                : "color-one-secondary"
            }`}
            id="span-color color-one"
          ></span>
          <span
            onClick={() => setSelectedColor("#a1a5a7")}
            className={`span-color ${
              selectedColor === "" || selectedColor === "#a1a5a7"
                ? "color-two"
                : "color-two-secondary"
            }`}
            id="span-color color-two"
          ></span>
          <span
            onClick={() => setSelectedColor("#099ba0")}
            className={`span-color ${
              selectedColor === "" || selectedColor === "#099ba0"
                ? "color-three"
                : "color-three-secondary"
            }`}
            id="span-color color-three"
          ></span>
          <span
            onClick={() => setSelectedColor("#f7b733")}
            className={`span-color ${
              selectedColor === "" || selectedColor === "#f7b733"
                ? "color-four"
                : "color-four-secondary"
            }`}
            id="span-color color-four"
          ></span>
          <span
            onClick={() => setSelectedColor("#b073d3")}
            className={`span-color ${
              selectedColor === "" || selectedColor === "#b073d3"
                ? "color-five"
                : "color-five-secondary"
            }`}
            id="span-color color-five"
          ></span>
          <span
            onClick={() => setSelectedColor("#37b7e9")}
            className={`span-color ${
              selectedColor === "" || selectedColor === "#37b7e9"
                ? "color-six"
                : "color-six-secondary"
            }`}
            id="span-color color-six"
          ></span>
          <span
            onClick={() => setSelectedColor("#4f7cac")}
            className={`span-color ${
              selectedColor === "" || selectedColor === "#4f7cac"
                ? "color-seven"
                : "color-seven-secondary"
            }`}
            id="span-color color-seven"
          ></span>
          <span
            onClick={() => setSelectedColor("#d3c64f")}
            className={`span-color ${
              selectedColor === "" || selectedColor === "#d3c64f"
                ? "color-eight"
                : "color-eight-secondary"
            }`}
            id="span-color color-eight"
          ></span>
        </ContainerColor>
      </Content>
    </Container>
  );
};

export default InputColor;
