import "./style.css";

(() => {
  const menuButtonHTML = document.getElementById("menu-button");
  const closeMenuButtonHTML = document.getElementById("close-menu-button");
  const menuHTML = document.getElementById("menu");

  const handleOpen = () => {
    menuHTML.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");

    setTimeout(() => {
      menuHTML.children[0].classList.replace(
        "translate-x-full",
        "translate-x-0",
      );
    }, 1);
  };

  const handleClose = () => {
    document.body.classList.remove("overflow-hidden");
    menuHTML.children[0].classList.replace("translate-x-0", "translate-x-full");
    setTimeout(() => {
      menuHTML.classList.add("hidden");
    }, 500);
  };

  menuButtonHTML.addEventListener("click", handleOpen);
  closeMenuButtonHTML.addEventListener("click", handleClose);
})();
