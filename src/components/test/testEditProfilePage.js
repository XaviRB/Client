import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import EditProfilePage from "../EditProfilePage";

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

it("Test snapshot of EditProfilePage", () => {
  act(() => {
    render(<EditProfilePage />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot();
});
