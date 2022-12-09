
displayGalleryOnLoad();

function displayGalleryOnLoad() {
    
    const URL = window.location.href.split('#');

    // checks if the default page should be loaded
    if(URL.length == 1) {
        return;
    }

    const selectedGallery = "#" + URL[URL.length - 1];
    $(`${selectedGallery}`).show();
    $(".gallery-container").not(`${selectedGallery}`).hide();
}

// any time one of the .gallery-links is clicked...
$('.gallery-link').click(function () {

    const selectedGallery = $(this).attr('href');

    $(`${selectedGallery}`).show();
    $(".gallery-container").not(`${selectedGallery}`).hide();
})

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
