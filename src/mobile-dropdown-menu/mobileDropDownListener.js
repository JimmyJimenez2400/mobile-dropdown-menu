export default function mobileDropDownListener(e) {
  const dropDownMenu = document.getElementById("menuOptions");

  const toggleDropDown = function () {
    dropDownMenu.classList.toggle("show");
  };

  e.stopPropagation();
  toggleDropDown();

  document.documentElement.addEventListener("click", () => {
    if (dropDownMenu.classList.contains("show")) {
      toggleDropDown();
    }
  });
}
