fetch('/assets/components/header.html').then(response => {
  return response.text();
}).then(header => {
  document.body.insertAdjacentHTML("afterbegin", header);
})


  // FOOTER

  const footer = document.createElement('footer');
  const footerText = document.createTextNode(`© ${new Date().getFullYear()} Portfolio Example`)
  footer.appendChild(footerText)

  document.body.append(footer)









  

// async function load() {

//   // HEADER
//   const response = await fetch('/assets/components/header.html');
//   const header = await response.text();
//   document.body.insertAdjacentHTML("afterbegin", header);

//   // FOOTER

//   const footer = document.createElement('footer');
//   const footerText = document.createTextNode(`© ${new Date().getFullYear()} Portfolio Example`)
//   footer.appendChild(footerText)

//   document.body.append(footer)
// }

// // load();

