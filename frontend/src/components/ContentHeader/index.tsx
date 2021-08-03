import { Container, TitleContainer, ComponentContainer } from "./styles";

type Props = {
  title: string;
  component?: React.ReactNode;
};

const ContentHeader = ({ title, component }: Props) => {
  return (
    <Container>
      <TitleContainer>
        <h1>{title}</h1>
      </TitleContainer>
      <ComponentContainer>{component}</ComponentContainer>
    </Container>
  );
};

export default ContentHeader;
