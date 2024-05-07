document.addEventListener('click', function(e){
    if(e.target.classList.contains('look-at-menu-button')){
        var divId = e.target.getAttribute('data-target');
        var reqDiv = document.getElementById(divId);

        var allDivs = document.querySelectorAll(".image-ordering");
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


//look-at-menu-button
//.image-ordering