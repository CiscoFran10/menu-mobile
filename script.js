const btn = document.querySelector(".btn-mobile");

function toggleNav() {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("ativo");
}

btn.addEventListener("click", toggleNav);
