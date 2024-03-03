var question = document.querySelectorAll(".question_txt");
var answer = document.querySelectorAll(".question p");

function show(){
    var question_target = event.target;
    var x = question_target.parentNode;
    var y =x.parentNode;
    var z = y.querySelector('p');
    var icon = x.querySelector("button");
    console.log(question_target);
    console.log(x.parentNode);
    console.log(z);
    console.log(x);
    //z.style.display = "block";
    if(z.style.display === "none" || z.style.display === ""){
        z.style.display = "block";
        icon.querySelector("img").src = "./assets/images/icon-minus.svg"
    }else{
        z.style.display = "none";
        icon.querySelector("img").src = "./assets/images/icon-plus.svg"
    };
 

    
};
