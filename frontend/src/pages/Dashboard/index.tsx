import ContentHeader from "../../components/ContentHeader";
import { Container, ContentBody } from "./styles";

const test = () => {
  return (
    <Container>
      <ContentHeader title="Dashboard" />
      <ContentBody>
        <p>Welcome to Tasks - Todo!</p>
      </ContentBody>
    </Container>
  );
};

export default test;
