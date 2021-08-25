import { Container, Content, Image, Title } from "./styles";

import IconTask from "../../assets/task.png";
import ContentHeader from "../ContentHeader";
import MenuHamburguer from "../../MenuHamburguer";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container id="container">
      <Content id="content">
        {/* <div className="menu-hamburguer">
          <AiOutlineMenu
            onClick={() => {
              setIsOpen(!isOpen);
              console.log("mudou!");
            }}
          />
          {isOpen ? <MenuHamburguer /> : null}
        </div> */}
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
