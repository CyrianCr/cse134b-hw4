const themebtn = document.getElementById("theme-button");
const themechoisi = localStorage.getItem("themechoisi"); // Get the theme choice from local storage, if none, it will be null

const def_light = window.matchMedia("(prefers-color-scheme: light)");

function preftheme(preference) {
    if (themechoisi === "light" || (preference && preference.matches)) {
      document.body.classList.add("light");
      themebtn.classList.add("light");
    } else {
      document.body.classList.add("dark");
      themebtn.classList.add("dark");
    }
  }
if (!themechoisi) { // If no theme is set, it checks the system preference by callin preftheme()
  def_light.addEventListener("change", preftheme);
  preftheme(def_light);
}

if (themechoisi == "dark") {
  document.body.classList.toggle("dark");
  themebtn.classList.add("dark");
} else if (themechoisi == "light") {
  document.body.classList.toggle("light");
  themebtn.classList.add("light");
}

window.addEventListener("load", () => {     // Display the right icon on load
  let moonImage = document.getElementById("moon");
  let sunImage = document.getElementById("sun");
  let bodyclass = document.body.className;

    if (bodyclass === "light") {
      moonImage.style.display = "none";
      sunImage.style.display = "block";
  } else {
      moonImage.style.display = "block";
      sunImage.style.display = "none";
  }
  });

themebtn.addEventListener("click", function () {   // Switch theme on click and button style
  let bodyclass = document.body.className;
  let moonImage = document.getElementById("moon");
  let sunImage = document.getElementById("sun");

  if (bodyclass === "dark") {
    document.body.classList.replace("dark" , "light");
    themebtn.classList.replace("dark", "light");
    moonImage.style.display = "none";
    sunImage.style.display = "block";
    var themechoisi = document.body.classList.contains("light") ? "light" : "dark";
  } else {
    document.body.classList.replace("light" , "dark");
    themebtn.classList.replace("light", "dark");
    moonImage.style.display = "block";
    sunImage.style.display = "none";
    var themechoisi = document.body.classList.contains("dark") ? "dark" : "light";
  }
  localStorage.setItem("themechoisi", themechoisi); // Save in local storage
});