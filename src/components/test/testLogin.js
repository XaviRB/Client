import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Login from "../Login";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
it("Login has right text", () => {
  act(() => {
    render(<Login />, container);
  });
  expect(container.textContent).toBe(
    "Welcome to the mentor website!Please, loginEmail or Username:Password: Remember me LoginRegister"
  );
});
