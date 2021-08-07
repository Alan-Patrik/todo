import SubMenu from "./SubMenu";
import { SidebarData } from "./SidebarData";
import { Container, MenuContainer } from "./styles";

const Sidebar = () => {
  return (
    <Container>
      <MenuContainer id="sidebar" className="container-menu">
        {SidebarData.map((item, index) => {
          return <SubMenu key={index} item={item} />;
        })}
      </MenuContainer>
    </Container>
  );
};

export default Sidebar;
