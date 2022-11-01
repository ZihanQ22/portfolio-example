// HEADER
$('#header-container').load('/assets/components/header.html', function(){

  // add code here for things that should happen once the <header> loads.

  // for example, this is where you would add functionality for dealing with a toggle-able hamburger menu.



});




// FOOTER

const footer = `<footer>&copy; ${new Date().getFullYear()} Portfolio Example</footer>`

$('body').append(footer)