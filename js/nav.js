document.addEventListener("DOMContentLoaded", function () {
  fetch("nav.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load navigation bar.");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("sidenav").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error fetching the navbar:", error);
    });
});
