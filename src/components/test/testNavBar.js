import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import NavBar from "../NavBar";

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
it("snapshot test of NavBar", () => {
  act(() => {
    render(<NavBar />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<nav class=\\"navbar navbar-dark bg-dark\\">
      <div class=\\"container-fluid\\"><a class=\\"navbar-brand\\" href=\\"http://localhost:3000\\">ASD - Advice, Support, Development</a>
        <form class=\\"d-flex\\"><button class=\\"btn btn-outline-light m-1\\">Log in</button>
          <div style=\\"justify-content: center; display: flex; align-items: center; color: white;\\">- or -</div><button class=\\"btn btn-outline-light m-1\\">Sign up</button><button class=\\"btn btn-outline-light m-1\\" data-toggle=\\"popover\\" title=\\"Help\\" data-placement=\\"bottom\\" data-content=\\"hi\\">Help</button>
        </form>
      </div>
    </nav>"
  `);
});
