import { Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import NewTask from "../pages/NewTask";
import Task from "../pages/Task";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <Layout>
          <Dashboard />
        </Layout>
      </Route>
      <Route exact path="/newtask">
        <Layout>
          <NewTask />
        </Layout>
      </Route>
      <Route exact path="/tasks">
        <Layout>
          <Task />
        </Layout>
      </Route>
    </Switch>
  );
};

export default Routes;
