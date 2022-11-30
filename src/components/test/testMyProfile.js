import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import MyProfile from "../MyProfile";


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
it("MyProfile has right text", () => {
  act(() => {
    render(<MyProfile />, container);
  });
  expect(container.textContent).toBe(
    "My ProfileUser 1Interests:Video GamesMovies   I want to:Edit Profile"
  );
});