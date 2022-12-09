const menu = `
<nav class="main-nav">
  <a href="/">Portfolio</a>
  <a href="/bio">Bio</a>
  <a href="/contact">Contact</a>
  <a href="/sure">Sure</a>
</nav>
`



let menuContainer = document.getElementById("menu-container");
menuContainer.innerHTML = menu;

let footerMenuContainer = document.getElementById("footer-menu-container");
footerMenuContainer = menu;