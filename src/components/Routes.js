import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const View = lazy(() => import("./ViewDetail"));
const NotFoundPage = lazy(() => import("./NotFoundPage"));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/view-detail" component={View} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
