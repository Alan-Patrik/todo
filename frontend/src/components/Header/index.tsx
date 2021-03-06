import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import IconTask from "../../assets/task.png";
import ContentHeader from "../ContentHeader";
import MenuHamburguer from "../MenuHamburguer";

import { Container, Content, Image, Title } from "./styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container id="container">
      <Content id="content">
        <div className="menu-hamburguer">
          <AiOutlineMenu onClick={() => setIsOpen(!isOpen)} />
          {isOpen ? <MenuHamburguer /> : null}
        </div>
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
