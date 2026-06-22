// Load nav.html into #sidenav
document.addEventListener("DOMContentLoaded", function () {
  fetch("nav.html")
    .then((response) => {
      if (!response.ok) throw new Error("Failed to load navigation bar.");
      return response.text();
    })
    .then((data) => {
      document.getElementById("sidenav").innerHTML = data;
      // Also load into mobilenav for mobile view
      const mobilenav = document.querySelector(".mobilenav");
      if (mobilenav) {
        const navCopy = document.createElement("div");
        navCopy.innerHTML = data;
        mobilenav.appendChild(navCopy);
      }
    })
    .catch((error) => console.error("Error fetching navbar:", error));
});

// Toggle mobile menu
function toggleMobileMenu() {
  document.querySelector(".mobilenav").classList.toggle("active");
}

document.querySelector(".mobilenav").addEventListener("click", function (e) {
  if (e.target === this) toggleMobileMenu();
});
