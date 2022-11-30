import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import HelpPage from "../HelpPage";

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

it("Test snapshot of HelpPage", () => {
  act(() => {
    render(<HelpPage />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div>
      <nav class=\\"navbar navbar-dark bg-dark\\">
        <div class=\\"container-fluid\\"><a class=\\"navbar-brand\\" href=\\"../mainpage\\">ASD - Advice, Support, Development</a>
          <form class=\\"d-flex\\"><button class=\\"btn btn-outline-light m-1\\" type=\\"submit\\">My Profile</button><button class=\\"btn btn-outline-light m-1\\" type=\\"submit\\">Settings</button><button class=\\"btn btn-outline-light m-1\\" type=\\"submit\\">Help</button><button class=\\"btn btn-outline-light m-1\\" type=\\"submit\\">Log out</button></form>
        </div>
      </nav>
      <div style=\\"display: flex;\\">
        <div class=\\"container\\" style=\\"padding-top: 50px;\\">
          <h2 class=\\"text-center\\">Welcome to our help page, </h2>
          <h2 class=\\"text-center\\" style=\\"padding-bottom: 20px;\\">we are here to help!</h2>
          <h2 class=\\"text-start\\">Log in: </h2>
          <p class=\\"text-start\\" style=\\"text-indent: 40px; font-size: 20px;\\">Log in button will redirect you to log in page.</p>
          <h2 class=\\"text-start\\">Sign up: </h2>
          <p class=\\"text-start\\" style=\\"text-indent: 40px; font-size: 20px;\\">Sign up button will redirect you to register into our website if it is your first time visit the website.</p>
          <h2 class=\\"text-start\\">My Profile: </h2>
          <p class=\\"text-start\\" style=\\"text-indent: 40px; font-size: 20px;\\">My Profile button will redirect you to your own profile where you can edit profile.</p>
          <h2 class=\\"text-start\\">Matching: </h2>
          <p class=\\"text-start\\" style=\\"text-indent: 40px; font-size: 20px;\\">Matching button will redirect you to the matching program with mentee/mentor.</p>
          <h2 class=\\"text-start\\">Setting: </h2>
          <p class=\\"text-start\\" style=\\"text-indent: 40px; font-size: 20px;\\">Setting button will redirect you to setting page where you can edit the notification settings, as well as your information regarding email and phone number.</p>
          <h2 class=\\"text-start\\">Log out: </h2>
          <p class=\\"text-start\\" style=\\"text-indent: 40px; font-size: 20px;\\">Log out button will log you out from your own account.</p>
        </div>
      </div>
    </div>"
  `);
});
