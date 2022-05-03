function onScrool() {
  if (scrollY > 0) {
    navegacao.classList.add("scrool");
  } else {
    navegacao.classList.remove("scrool");
  }
}

function openMenu() {
  document.body.classList.add("menu-espandido");
}

function closeMenu() {
  document.body.classList.remove("menu-espandido");
}
