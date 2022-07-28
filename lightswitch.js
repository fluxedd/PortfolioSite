function toggleLight() {
  var element = document.body;
  element.classList.toggle("light-mode");
}

const lightswitch = document.getElementById("toggle");
const github = document.getElementById("github-toggle");
const linkedin = document.getElementById("linkedin-toggle");
const toggleIcon = document.getElementById("toggle");
const mail = document.getElementById("mail-toggle");

let toggle = true;
lightswitch.addEventListener("click", function () {
  toggle = !toggle;
  if (toggle) {
    github.src = "img/github-icon.svg";
    linkedin.src = "img/linkedin-icon.svg";
    toggleIcon.src = "img/toggle.png";
    mail.src = "img/email-icon.png";
  } else {
    github.src = "img/github-light.png";
    linkedin.src = "img/linkedin-light.png";
    toggleIcon.src = "img/toggle-light.png";
    mail.src = "img/mail-light.png";
  }
});

document.getElementById("toggle").addEventListener("click", toggleLight);
