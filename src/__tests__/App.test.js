import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Routes from "../components/Routes";

describe("App Component", () => {
  it("renders App", () => {
    let wrapped = shallow(<App />);
    expect(wrapped).toBeDefined();
  });

  it("renders Header", () => {
    let wrapped = shallow(<App />);
    expect(wrapped.find(Header).exists()).toBe(true);
  });

  it("renders Footer", () => {
    let wrapped = shallow(<App />);
    expect(wrapped.find(Footer).exists()).toBe(true);
  });

  it("renders Routes", () => {
    let wrapped = shallow(<App />);
    expect(wrapped.find(Routes).exists()).toBe(true);
  });
});
