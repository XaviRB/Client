import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import Mainpage from "../Mainpage";

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
it("snapshot test of Mainpage", () => {
  act(() => {
    render(<Mainpage />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot();
});
