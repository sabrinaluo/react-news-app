import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderTop from "./HeaderTop";

it("render login", () => {
  const username = "test@test.com";
  const wrapper = render(
    <Router>
      <HeaderTop isLogin={true} username={username} />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
  const text = wrapper.text();
  expect(text).toContain(username);
  expect(text).toContain("Logout");
  expect(text).not.toContain("Login");
});

it("render not login", () => {
  const username = "test@test.com";
  const wrapper = render(
    <Router>
      <HeaderTop isLogin={false} username={username} />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
  const text = wrapper.text();
  expect(text).not.toContain(username);
  expect(text).not.toContain("Logout");
  expect(text).toContain("Login");
  expect(text).toContain("Sign Up");
});
