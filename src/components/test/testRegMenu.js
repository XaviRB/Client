import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import RegMenu from "../RegMenu";

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

it("Test snapshot of regMenu", () => {
  act(() => {
    render(<RegMenu />, container);
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
      <div>
        <div>
          <div width=\\"100%\\" height=\\"40px\\" class=\\"sc-bdfBwQ clFeHV\\"><progress value=\\"20\\" max=\\"100\\"></progress></div>
        </div>
        <div class=\\"container\\">
          <div style=\\"justify-content: center; align-items: center; display: flex;\\">Step 1 out of 5</div>
        </div>
        <form>
          <div>
            <div class=\\"container\\" style=\\"padding-top: 50px;\\">
              <h2>Create an account</h2>
              <div class=\\"form-group\\"><i class=\\"fas fa-address-card\\"></i><label for=\\"name\\">  Login: *</label><input type=\\"name\\" class=\\"form-control\\" id=\\"name\\" required=\\"\\" value=\\"\\"></div>
              <div class=\\"form-group\\"><label for=\\"email\\">  Email address: *</label><input type=\\"email\\" class=\\"form-control\\" id=\\"email\\" required=\\"\\" value=\\"\\"></div>
              <div class=\\"form-group\\"><label for=\\"pwd\\"> Password: *</label><input type=\\"password\\" class=\\"form-control\\" id=\\"pwd\\" required=\\"\\" value=\\"\\"></div>
              <div class=\\"form-group\\"><label for=\\"pwd-rpt\\"> Repeat password: *</label><input required=\\"\\" type=\\"password-rpt\\" class=\\"form-control\\" id=\\"pwd\\"></div>
              <div class=\\"form-group\\"><label for=\\"phone\\">  Phone Number:</label><input type=\\"phoneNumber\\" class=\\"form-control\\" id=\\"phone\\" value=\\"\\"></div>
            </div>
          </div>
          <div class=\\"container d-flex justify-content-center\\" style=\\"padding-top: 15px;\\"><button type=\\"back\\" class=\\"btn btn-secondary m-1 btn-block\\">Back</button><button type=\\"continue\\" class=\\"btn btn-success m-1 btn-block\\">Continue</button></div>
        </form>
      </div>
    </div>"
  `);
});
