import { Console } from "console";
import { ChangeEvent, useState } from "react";
import { Container, Content, ContainerColor } from "./styles";

interface Props {
  onClick?(): void;
  value?: string | undefined;
  onChange?(event: ChangeEvent<HTMLInputElement>): void | undefined;
}

const InputColor: React.FC<Props> = ({ onClick, value, onChange }) => {
  const [selectedColor, setSelectedColor] = useState(value);

  localStorage.setItem("@tasksColor", JSON.stringify(selectedColor));

  return (
    <Container>
      <Content>
        <p className="p-color">Choose a color below for the card</p>
        <ContainerColor onClick={onClick} onChange={onChange}>
          <span
            onClick={() => setSelectedColor("color-one")}
            className={`span-color ${
              selectedColor === "" || selectedColor === "color-one"
                ? "color-one"
                : "color-one-secondary"
            }`}
            id="span-color color-one"
          ></span>
          <span
            onClick={() => setSelectedColor("color-two")}
            className={`span-color ${
              selectedColor === "" || selectedColor === "color-two"
                ? "color-two"
                : "color-two-secondary"
            }`}
            id="span-color color-two"
          ></span>
          <span
            onClick={() => setSelectedColor("color-three")}
            className={`span-color ${
              selectedColor === "" || selectedColor === "color-three"
                ? "color-three"
                : "color-three-secondary"
            }`}
            id="span-color color-three"
          ></span>
          <span
            onClick={() => setSelectedColor("color-four")}
            className={`span-color ${
              selectedColor === "" || selectedColor === "color-four"
                ? "color-four"
                : "color-four-secondary"
            }`}
            id="span-color color-four"
          ></span>
          <span
            onClick={() => setSelectedColor("color-five")}
            className={`span-color ${
              selectedColor === "" || selectedColor === "color-five"
                ? "color-five"
                : "color-five-secondary"
            }`}
            id="span-color color-five"
          ></span>
          <span
            onClick={() => setSelectedColor("color-six")}
            className={`span-color ${
              selectedColor === "" || selectedColor === "color-six"
                ? "color-six"
                : "color-six-secondary"
            }`}
            id="span-color color-six"
          ></span>
          <span
            onClick={() => setSelectedColor("color-seven")}
            className={`span-color ${
              selectedColor === "" || selectedColor === "color-seven"
                ? "color-seven"
                : "color-seven-secondary"
            }`}
            id="span-color color-seven"
          ></span>
          <span
            onClick={() => setSelectedColor("color-eight")}
            className={`span-color ${
              selectedColor === "" || selectedColor === "color-eight"
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
