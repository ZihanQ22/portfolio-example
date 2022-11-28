// When the user scrolls the page, execute whatever is in the callback function (e.g. updateProgressBar(), updateBackgroundColor)
window.onscroll = function () {
    updateProgressBar();
    updateBackgroundColor()
}

function updateProgressBar() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress").style.width = scrolled + "%";

    let hue = (winScroll / height) * 360;
    document.getElementById("progress").style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
}

function updateBackgroundColor() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let hue = (winScroll / height) * 360;
    document.querySelector("main").style.backgroundColor = `hsl(${hue}, 100%, 85%)`;
}

updateBackgroundColor();
updateProgressBar();

ScrollReveal({ distance: '1000px' })

ScrollReveal().reveal('section:nth-child(odd)', {
    delay: 100,
    duration: 500,
    origin: "left",
    reset: true,
    easing: "ease",
    viewOffset: {
        top: 100,
        bottom: 200
    }
});

ScrollReveal().reveal('section:nth-child(even)', {
    delay: 300,
    duration: 500,
    origin: "right",
    reset: true,
    easing: "ease",
    viewOffset: {
        top: 200,
        bottom: 200
    }
});