import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./components/Routes";

import "./App.scss";

const App = () => {
  return (
    <Router>
      <Header title="FE API Consumer" />
      <Routes />
      <Footer />
    </Router>
  );
};

export default App;
