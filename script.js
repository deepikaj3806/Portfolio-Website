document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        let section = document.querySelector(
            this.getAttribute("href")
        );

        section.scrollIntoView({
            behavior:"smooth"
        });

    });

});



function scrollContact(){

    document.getElementById("contact")
    .scrollIntoView({
        behavior:"smooth"
    });

}



window.onload=function(){

    console.log("Welcome to Deepika's Portfolio");

};
