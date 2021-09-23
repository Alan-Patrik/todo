import DataJson from "./Data.json";
import { Container, Content } from "./styles";

interface Props {
  filter: string | undefined;
}

const DataMock: React.FC<Props> = ({ filter }) => {
  return (
    <Container>
      <Content>
        {DataJson.map((item, index) =>
          item.status === filter ? (
            <li key={index} id="animation">
              <h1>{item.name}</h1>
              <p>
                {item.description}
                <br />
                {item.startDate}
                <br />
                {item.status}
              </p>
            </li>
          ) : null
        )}
      </Content>
    </Container>
  );
};

export default DataMock;
