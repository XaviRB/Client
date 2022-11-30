import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import ProfilePage from "../ProfilePage";

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

//test text with input
//test snapshot
it("snapshot test of ProfilePage", () => {
  act(() => {
    render(<ProfilePage />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot();
});
