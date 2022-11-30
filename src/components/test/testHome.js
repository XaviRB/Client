import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import Home from "../Home";

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

it("Test snapshot of Home", () => {
  act(() => {
    render(<Home />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div>
      <nav class=\\"navbar navbar-dark bg-dark\\">
        <div class=\\"container-fluid\\"><a class=\\"navbar-brand\\" href=\\"http://localhost:3000\\">ASD - Advice, Support, Development</a>
          <form class=\\"d-flex\\"><button class=\\"btn btn-outline-light m-1\\">Log in</button>
            <div style=\\"justify-content: center; display: flex; align-items: center; color: white;\\">- or -</div><button class=\\"btn btn-outline-light m-1\\">Sign up</button><button class=\\"btn btn-outline-light m-1\\" data-toggle=\\"popover\\" title=\\"Help\\" data-placement=\\"bottom\\" data-content=\\"hi\\">Help</button>
          </form>
        </div>
      </nav>
      <div class=\\"container\\" style=\\"padding-top: 50px;\\">
        <h2>Welcome to the mentor website!</h2>
        <h2>Please, login</h2>
        <form>
          <div class=\\"form-group\\"><label for=\\"name\\">Email or Username:</label><input type=\\"username\\" class=\\"form-control\\" id=\\"name\\"></div>
          <div class=\\"form-group\\"><label for=\\"pwd\\">Password:</label><input type=\\"password\\" class=\\"form-control\\" id=\\"pwd\\"></div>
          <div class=\\"checkbox\\"><label><input type=\\"checkbox\\"> Remember me </label></div><button type=\\"login\\" class=\\"btn btn-dark m-1\\">Login</button><button type=\\"register\\" class=\\"btn btn-dark m-1\\">Register</button>
        </form>
      </div>
    </div>"
  `);
});
