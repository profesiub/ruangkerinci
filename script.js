document.addEventListener("DOMContentLoaded", function () {
    const sidebarLinks = document.querySelectorAll(".sidebar a");
  
    sidebarLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetHref = this.getAttribute("href");
        loadContent(targetHref);
      });
    });
  
    function loadContent(url) {
      fetch(url)
        .then(response => response.text())
        .then(content => {
          const mainContent = document.querySelector(".content");
          mainContent.innerHTML = content;
        })
        .catch(error => console.error("Error loading content:", error));
    }
  });
  