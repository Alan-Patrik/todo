import Footer from "../Footer";
import { Container, ContentContainer } from "./styles";

const Content: React.FC = ({ children }) => {
  return (
    <Container>
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </Container>
  );
};

export default Content;
