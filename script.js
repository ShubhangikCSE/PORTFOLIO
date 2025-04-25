function loadSection(section) {
    fetch("sections/" + section + ".html")
      .then(response => {
        if (!response.ok) {
          throw new Error("Could not load " + section + ".html");
        }
        return response.text();
      })
      .then(data => {
        document.getElementById("content").innerHTML = data;
      })
      .catch(error => {
        document.getElementById("content").innerHTML = "<p>Error loading section: " + error.message + "</p>";
      });
  }
  
  window.addEventListener('DOMContentLoaded', function () {
    loadSection('about'); // Load default section on page load
  });