$(document).ready(funciton(){
    var array = [];
    var heightWindow = $(window).heigh();
    var widthWindow = $(window).width();

    for(var i = 0; i< 40; i++){
    array.push({
        top: Math.random()*heightWindow,
        left: Math.random()*widthWindow,
        id: i
    })  
    }
})