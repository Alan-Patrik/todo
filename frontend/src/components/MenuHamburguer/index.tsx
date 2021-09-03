import Footer from "../Footer";
import { HamburguerData } from "./HamburguerData";
import { Container, ContentContainer, Content, FooterMenu } from "./styles";

const MenuHamburguer = () => {
  return (
    <Container>
      <ContentContainer>
        <Content>
          {HamburguerData.map((item, index) => {
            return <Item key={index} item={item} />;
          })}
        </Content>
        <FooterMenu>
          <div className="footer-menu">
            <Footer />
          </div>
        </FooterMenu>
      </ContentContainer>
    </Container>
  );
};

const Item = ({ item }: any) => {
  return (
    <li>
      <a href={item.path} id="link-a" className="link-a">
        <p className="name-link">{item.title}</p>
      </a>
    </li>
  );
};

export default MenuHamburguer;
