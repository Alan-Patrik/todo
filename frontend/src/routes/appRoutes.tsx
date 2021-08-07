import { Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Test from "../pages/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <Layout>
          <Test />
        </Layout>
      </Route>
    </Switch>
  );
};

export default Routes;
