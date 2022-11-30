import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import EditProfile from "../EditProfile";

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

it("Test text of EditProfile", () => {
  act(() => {
    render(<EditProfile />, container);
  });

  expect(container.textContent).toBe("My ProfileUser 1Interests:Video GamesMovies I want to:CancelSave");
});
