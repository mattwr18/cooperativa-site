function openFirstDropdown() {
  document.getElementById("firstDropdown").classList.toggle("show");
};

function openSecondDropdown() {
  document.getElementById("secondDropdown").classList.toggle("show");
};

window.onclick = function(element) {
  if (!element.target.matches('.dropbtn1')) {
    var firstDropdown = document.getElementById("firstDropdown");
    if (firstDropdown.classList.contains('show')) {
      firstDropdown.classList.remove('show');
    }
  }
  if (!element.target.matches('.dropbtn2')) {
    var secondDropdown = document.getElementById("secondDropdown");
    if (secondDropdown.classList.contains('show')) {
      secondDropdown.classList.remove('show');
    }
  }
};
