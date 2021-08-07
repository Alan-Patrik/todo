import { Container, Content, Image, Title } from "./styles";

import IconTask from "../../assets/task.png";

const Header = () => {
  return (
    <Container id="container">
      <Content id="content">
        <Image id="task-icon" src={IconTask} />
        <Title id="header-title">Tasks - Todo</Title>
      </Content>
    </Container>
  );
};

export default Header;
