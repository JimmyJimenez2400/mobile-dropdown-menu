import mobileDropDownListener from "./mobileDropDownListener";

export default function createMobileDropDownMenu(options) {
  const mobileDropDownMenuContainer = document.createElement("section");
  mobileDropDownMenuContainer.id = "mobileDropDownMenuContainer";

  const plusButton = document.createElement("button");
  plusButton.classList.add("plusButton");
  plusButton.id = "plusButton";
  plusButton.textContent = "+";
  plusButton.addEventListener("click", mobileDropDownListener);

  const menuOptions = document.createElement("section");
  menuOptions.id = "menuOptions";
  menuOptions.classList.add("menuOptions");

  for (let i = 0; i < options.length; i += 1) {
    console.log(options[i]);
    const createlinkElement = document.createElement("a");

    createlinkElement.href = `#${options[i]}`;
    createlinkElement.textContent = options[i];

    menuOptions.appendChild(createlinkElement);
  }

  mobileDropDownMenuContainer.appendChild(plusButton);
  mobileDropDownMenuContainer.appendChild(menuOptions);

  return mobileDropDownMenuContainer;
}
