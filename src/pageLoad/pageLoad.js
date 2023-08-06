import createMobileDropDownMenu from "../mobile-dropdown-menu/createMobileDropDownMenu";

export default function pageLoad() {
  const content = document.querySelector("#content");
  const arrayWithWords = ["Hello", "World", "Name", "WOHOO"];
  content.appendChild(createMobileDropDownMenu(arrayWithWords));
}
