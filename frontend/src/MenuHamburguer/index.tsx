import { HamburguerData } from "./HamburguerData";
import { Container, Content } from "./styles";

const index = () => {
  return (
    <Container>
      <Content>
        <ul>
          {HamburguerData.map((item, index) => {
            return <Item key={index} item={item} />;
          })}
        </ul>
      </Content>
    </Container>
  );
};

const Item = ({ item }: any) => {
  return (
    <li>
      <a href={item.path} id="link-a" className="link-a">
        {item.title}
      </a>
    </li>
  );
};

export default index;
