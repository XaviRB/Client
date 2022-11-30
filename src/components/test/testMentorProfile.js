import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import MentorProfile from "../MentorProfile";

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
it("MentorProfile has right text", () => {
  act(() => {
    render(<MentorProfile />, container);
  });
  expect(container.textContent).toBe(
    "Mentor 1's ProfileMentor 1Interests:SoccersVideo GamesI want to:Help someone to get a job"
  );
});
