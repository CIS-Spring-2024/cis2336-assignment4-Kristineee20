document.addEventListener('click', function(e){
    if(e.target.classList.contains('menuButton')){
        var divId = e.target.getAttribute('data-target');
        var reqDiv = document.getElementById(divId);

        var allDivs = document.querySelectorAll(".pop-up-menu");
        allDivs.forEach(function(div){
            if(div.id !== divId){
                div.style.display = "none";
            }
        });
        if(reqDiv){
            reqDiv.style.display = "block";
        }
    }
});