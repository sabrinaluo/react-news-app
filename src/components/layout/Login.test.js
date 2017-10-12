import React from "react";
import Login from "./Login";

it("render Home", () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});
