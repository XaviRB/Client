import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import NavBarMainPage from "../NavBarMainPage";

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
it("snapshot test of NavBarMainPage", () => {
  act(() => {
    render(<NavBarMainPage />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<nav class=\\"navbar navbar-dark bg-dark\\">
      <div class=\\"container-fluid\\"><a class=\\"navbar-brand\\" href=\\"../mainpage\\">ASD - Advice, Support, Development</a>
        <form class=\\"d-flex\\"><button class=\\"btn btn-outline-light m-1\\" type=\\"submit\\">My Profile</button><button class=\\"btn btn-outline-light m-1\\" type=\\"submit\\">Settings</button><button class=\\"btn btn-outline-light m-1\\" type=\\"submit\\">Help</button><button class=\\"btn btn-outline-light m-1\\" type=\\"submit\\">Log out</button></form>
      </div>
    </nav>"
  `);
});
