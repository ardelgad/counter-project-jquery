let counter = 0;

$(document).ready(function () {
    console.log("DOM cargado! Implementa tu solución a partir de esta línea.");

});

$(".prevBtn").click(function lowerNum() {
    counter-=1
    changeCounter();
    changeColor();
})

$(".nextBtn").click(function riseNum() {
    counter+=1
    changeCounter();
    changeColor();
})


function changeCounter() {
    $("#counter").text(counter);    
}

function changeColor() {
    if (counter>0) {
        $("#counter").css('color', 'green');
    }
    else if (counter == 0) {
        $("#counter").css('color', 'black');
    }
    
    else {
        $("#counter").css('color', 'red');
    }
}