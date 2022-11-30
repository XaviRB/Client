import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Help from "../Help";

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
it("Help has right text", () => {
  act(() => {
    render(<Help />, container);
  });
  expect(container.textContent).toBe(
    "Welcome to our help page, we are here to help!Log in: Log in button will redirect you to log in page.Sign up: Sign up button will redirect you to register into our website if it is your first time visit the website.My Profile: My Profile button will redirect you to your own profile where you can edit profile.Matching: Matching button will redirect you to the matching program with mentee/mentor.Setting: Setting button will redirect you to setting page where you can edit the notification settings, as well as your information regarding email and phone number.Log out: Log out button will log you out from your own account."
  );
});
