import Content from "../Content";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Grid } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <Grid>
      <Sidebar />
      <Header />
      <Content>{children}</Content>
    </Grid>
  );
};

export default Layout;
