import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import Welcome from "./Welcome";
import Settings from "./Setting";

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
//Testing
//Login.js

//Mentor Profile

//RegStep1.js

//RegStep2.js
//RegStep4.js
//RegStepPreview.js
//Help.js
//Mainpage.js
//ProfilePage.js
//SettingPage.js
//SideBar.js
//Editprofile.js
//EditProfilePage.js
//HelpPage.js
//Home.js
//MyProfile.js
//NavBar.js
//NavBarMainPage.js
//RegForm.js
//RegMenu.js
//Welcome.js
it("Welcome has right text", () => {
  act(() => {
    render(<Welcome />, container);
  });
  expect(container.textContent).toBe(
    "Welcome to the ASD - Advice, Support, Development Website, User 1!This is our main page."
  );
});

//Setting.js
//test text with no inputs
it("Settings has right text", () => {
  act(() => {
    render(<Settings />, container);
  });
  expect(container.textContent).toBe(
    "Settings  Email address: temp@temp.com   password: 1234   Phone Number: 1-800-46-84733 editChange Text SizeEdit Notification SettingsSave"
  );
});
//test text with input
//test snapshot
it("should render a greeting", () => {
  act(() => {
    render(<Settings />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"container\\" style=\\"padding-top: 50px;\\">
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
    </div>"
  `);
});
