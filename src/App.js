import React, { Suspense, lazy, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.scss";

const Home = lazy(() => import('./components/Home'));
const View = lazy(() => import('./components/ViewDetail'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));

const App = () => {

  return (
    <Fragment>
      <Header title="FE API Consumer" />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/view-detail" component={View} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Suspense>
      </Router>
      <Footer />
    </Fragment>
  );
};

export default App;
