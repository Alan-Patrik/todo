import { Container, FooterContainer, FooterContent } from "./styles";

const Content: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
      <FooterContainer>
        <FooterContent id="footer">
          &copy; 2021 by Alan Patrik <br></br> Todo.
        </FooterContent>
      </FooterContainer>
    </Container>
  );
};

export default Content;
