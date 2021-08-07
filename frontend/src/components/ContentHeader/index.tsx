import { Container, TitleContainer } from "./styles";

type Props = {
  title: string;
};

const ContentHeader = ({ title }: Props) => {
  return (
    <Container>
      <TitleContainer>
        <h1>{title}</h1>
      </TitleContainer>
    </Container>
  );
};

export default ContentHeader;
