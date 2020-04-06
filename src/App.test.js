import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import App from "./App";
import DiseaseList from "./components/DiseaseList/index";

test("renders without crash", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("renders a list of disease", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(DiseaseList).length).toBe(1);
});
