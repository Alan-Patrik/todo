import { Container, Content, ContainerColor } from "./styles";

const InputColor = () => {
  return (
    <Container>
      <Content>
        <p className="p-color">Choose a color below for the card</p>
        <ContainerColor>
          <span
            className="span-color color-one"
            id="span-color color-one"
          ></span>
          <span
            className="span-color color-two"
            id="span-color color-two"
          ></span>
          <span
            className="span-color color-three"
            id="span-color color-three"
          ></span>
          <span
            className="span-color color-four"
            id="span-color color-four"
          ></span>
          <span
            className="span-color color-five"
            id="span-color color-five"
          ></span>
          <span
            className="span-color color-six"
            id="span-color color-six"
          ></span>
          <span
            className="span-color color-seven"
            id="span-color color-seven"
          ></span>
          <span
            className="span-color color-eight"
            id="span-color color-eight"
          ></span>
        </ContainerColor>
      </Content>
    </Container>
  );
};

export default InputColor;
