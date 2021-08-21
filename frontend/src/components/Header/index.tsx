import { Container, Content, Image, Title } from "./styles";

import IconTask from "../../assets/task.png";
import ContentHeader from "../ContentHeader";

const Header = () => {
  return (
    <Container id="container">
      <Content id="content">
        <Image id="task-icon" src={IconTask} />
        <Title id="header-title">Tasks - Todo</Title>
        <div className="title-header">
          <ContentHeader title="Tasks - Dashboard" />
        </div>
      </Content>
    </Container>
  );
};

export default Header;
