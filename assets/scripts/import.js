const STYLESHEETS = ["fonts", "site", "header", "footer"];

STYLESHEETS.forEach((stylesheet) => {
  const STYLESHEET_LOCATION = "/assets/stylesheets/"
  const newLink = document.createElement("link");
  newLink.setAttribute("rel", "stylesheet");
  newLink.setAttribute("href", STYLESHEET_LOCATION + stylesheet + ".css")

  document.head.append(newLink);

})

const newLink = document.createElement("link");
newLink.setAttribute("rel", "stylesheet");
newLink.setAttribute("href", "style.css");
document.head.append(newLink);
