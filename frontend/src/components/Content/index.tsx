import Footer from "../Footer";
import { Container, ContentContainer } from "./styles";

const Content: React.FC = ({ children }) => {
  return (
    <Container>
      <ContentContainer className="col-md-12 col-sm-12">
        {children}
      </ContentContainer>
      <Footer />
    </Container>
  );
};

export default Content;
