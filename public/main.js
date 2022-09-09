$(document).ready(function(){ 
var faq = document.getElementsByClassName("faq-q");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        console.log("opened")
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        body.classList.toggle('open');
    });
}
});

$(document).ready(function(){ 
let circle = document.querySelectorAll('.circle');
for (i = 0; i < circle.length; i++) {
    let cir = circle[i];
    circle[i].addEventListener('click', function (){
        let line = cir.childNodes[0];
        const vertical = line.childNodes[1];
        vertical.classList.toggle('open');
        line.classList.toggle('open');
        if(line.classList.contains('open')){
            cir.style.backgroundColor="#685DC5";
        }else{
             cir.style.backgroundColor="#fff";
        }
        // document.querySelector('.content').classList.toggle('open');
    });
}

});