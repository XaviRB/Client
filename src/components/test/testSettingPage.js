import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import SettingPage from "../SettingPage";

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
it("snapshot test of SettingPage", () => {
  act(() => {
    render(<SettingPage />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div>
      <nav class=\\"navbar navbar-dark bg-dark\\">
        <div class=\\"container-fluid\\"><a class=\\"navbar-brand\\" href=\\"../mainpage\\">ASD - Advice, Support, Development</a>
          <form class=\\"d-flex\\"><button class=\\"btn btn-outline-light m-1\\" type=\\"submit\\">My Profile</button><button class=\\"btn btn-outline-light m-1\\" type=\\"submit\\">Settings</button><button class=\\"btn btn-outline-light m-1\\" type=\\"submit\\">Help</button><button class=\\"btn btn-outline-light m-1\\" type=\\"submit\\">Log out</button></form>
        </div>
      </nav>
      <div class=\\"container\\" style=\\"padding-top: 50px;\\">
        <h2 class=\\"text-center\\">Settings</h2>
        <div>
          <div class=\\"form-group\\"><label style=\\"font-size: 20px;\\" for=\\"email\\">  Email address:</label><text style=\\"font-size: 20px;\\"> temp@temp.com </text></div>
          <div class=\\"form-group\\"><label style=\\"font-size: 20px;\\" for=\\"pwd\\">  password:</label><text style=\\"font-size: 20px;\\"> 1234 </text></div>
          <div class=\\"form-group\\"><label style=\\"font-size: 20px;\\" for=\\"phone\\">  Phone Number:</label><text style=\\"font-size: 20px;\\"> 1-800-46-84733 </text></div>
        </div>
        <div><button class=\\"btn btn-secondary m-1\\">edit</button></div><text>Change Text Size</text>
        <div style=\\"display: flex; width: 300px; justify-content: left;\\">
          <div class=\\"MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-align-items-xs-center\\">
            <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true\\"><span class=\\"MuiSlider-root MuiSlider-colorPrimary\\"><span class=\\"MuiSlider-rail\\"></span><span class=\\"MuiSlider-track\\" style=\\"left: 0%; width: 25%;\\"></span><input type=\\"hidden\\" value=\\"20\\"><span style=\\"left: 0%;\\" data-index=\\"0\\" class=\\"MuiSlider-mark MuiSlider-markActive\\"></span><span style=\\"left: 12.5%;\\" data-index=\\"1\\" class=\\"MuiSlider-mark MuiSlider-markActive\\"></span><span style=\\"left: 25%;\\" data-index=\\"2\\" class=\\"MuiSlider-mark MuiSlider-markActive\\"></span><span style=\\"left: 37.5%;\\" data-index=\\"3\\" class=\\"MuiSlider-mark\\"></span><span style=\\"left: 50%;\\" data-index=\\"4\\" class=\\"MuiSlider-mark\\"></span><span style=\\"left: 62.5%;\\" data-index=\\"5\\" class=\\"MuiSlider-mark\\"></span><span style=\\"left: 75%;\\" data-index=\\"6\\" class=\\"MuiSlider-mark\\"></span><span style=\\"left: 87.5%;\\" data-index=\\"7\\" class=\\"MuiSlider-mark\\"></span><span style=\\"left: 100%;\\" data-index=\\"8\\" class=\\"MuiSlider-mark\\"></span><span class=\\"MuiSlider-thumb MuiSlider-thumbColorPrimary\\" tabindex=\\"0\\" role=\\"slider\\" style=\\"left: 25%;\\" data-index=\\"0\\" aria-labelledby=\\"input-slider\\" aria-orientation=\\"horizontal\\" aria-valuemax=\\"50\\" aria-valuemin=\\"10\\" aria-valuenow=\\"20\\"></span></span></div>
            <div class=\\"MuiGrid-root MuiGrid-item\\">
              <div class=\\"MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-marginDense MuiInput-marginDense\\"><input type=\\"number\\" step=\\"1\\" min=\\"10\\" max=\\"50\\" aria-labelledby=\\"input-slider\\" class=\\"MuiInputBase-input MuiInput-input MuiInputBase-inputMarginDense MuiInput-inputMarginDense\\" value=\\"20\\"></div>
            </div>
          </div>
        </div>
        <div class=\\"d-flex justify-content-center\\"><button type=\\"edit\\" class=\\"btn btn-secondary m-1\\">Edit Notification Settings</button><button type=\\"save\\" class=\\"btn btn-success m-1\\">Save</button></div>
      </div>
    </div>"
  `);
});
