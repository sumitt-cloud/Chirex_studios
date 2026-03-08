fetch("./contact.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("contact-section").innerHTML = data;
  });