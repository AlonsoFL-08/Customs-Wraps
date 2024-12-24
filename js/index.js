document.addEventListener('DOMContentLoaded', function () {
    const cardImgs = document.querySelectorAll('.card-img-top');

    cardImgs.forEach(function(cardImg) {
        const initialSrc = cardImg.getAttribute('src');
        const hoverSrc = cardImg.getAttribute('data-src-hover');

        cardImg.addEventListener('mouseenter', function () {
            cardImg.setAttribute('src', hoverSrc);
        });

        cardImg.addEventListener('mouseleave', function () {
            cardImg.setAttribute('src', initialSrc);
        });
    });
});





    document.addEventListener("DOMContentLoaded", function() {
        var modeToggleBtn = document.querySelector(".mode-toggle-btn");
        var navbarCollapse = document.querySelector(".navbar-collapse");

        modeToggleBtn.addEventListener("click", function() {
            
            if (navbarCollapse.classList.contains("show")) {
                
                navbarCollapse.classList.remove("show");
            }
        });
    });






function showSidebar(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'flex'
    }
    function hideSidebar(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'none'
    }


       
    var copyrightElement = document.getElementById("copyright");


var startYear = 2021;


var currentYear = new Date().getFullYear();

var copyrightText = "© Customs Wraps " + startYear + " - ";
if (currentYear > startYear) {
    copyrightText += currentYear;
}

copyrightElement.innerHTML = copyrightText;


