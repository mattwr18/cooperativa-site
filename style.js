function openFirstDropdown() {
  document.getElementById("firstDropdown").classList.toggle("show");
};

function openSecondDropdown() {
  document.getElementById("secondDropdown").classList.toggle("show");
};

window.onclick = function(element) {
  if (!element.target.matches('.dropbtn')) {
    var firstDropdown = document.getElementById("firstDropdown");
    if (firstDropdown.classList.contains('show')) {
      firstDropdown.classList.remove('show');
    }
    var secondDropdown = document.getElementById("secondDropdown");
    if (secondDropdown.classList.contains('show')) {
      secondDropdown.classList.remove('show');
    }
  }
};
function scrollToPolitica() {
    document.getElementById("politica").scrollIntoView();
};
function scrollToMissao() {
    document.getElementById("missao").scrollIntoView();
};
function scrollToHistoria() {
    document.getElementById("historia").scrollIntoView();
};

    /*window.scrollTo(0,findPos(document.getElementById("missao")));
    window.scrollTo(0,findPos(document.getElementById("politica")));*/


/*location.href="#politica";
location.href="#missao";
location.href="#historia";*/
