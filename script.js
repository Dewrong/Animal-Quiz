
//intake answers should be toLowerCase() for === match

function displayQuestion(){
    let question =  document.getElementsByClassName("hide-question");
    for (let i = 0; i < question.length; i++){
        question[i].style.display ="inline";
    }
    document.getElementById("question").innerHTML = "This animal can sleep for three years.";
}

function displayHint1(){
    let hint = document.getElementsByClassName("hide-hint-1");
    for (let i=0; i <hint.length; i++){
        hint[i].style.display = "inline";
    }
    document.getElementById("hint-1").innerHTML = "This animal is an invertibrate.";
}

function displayHint2(){
    let hint = document.getElementsByClassName("hide-hint-2");
    for (let i=0; i <hint.length; i++){
        hint[i].style.display = "inline";
    }
    document.getElementById("hint-2").innerHTML = "This animal is smaller than a loaf of bread.";
}

function displayHint3(){
    let hint = document.getElementsByClassName("hide-hint-3");
    for (let i=0; i <hint.length; i++){
        hint[i].style.display = "inline";
    }
    document.getElementById("hint-3").innerHTML ="This animal is slimy!";
}
