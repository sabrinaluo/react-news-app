import React from "react";
import Home from "./Home";

it("render Home", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper).toMatchSnapshot();
});
