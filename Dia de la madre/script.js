$(document).ready(function() {
    $(".container").mouseenter(function(){
        $("#sound")[0].play();
        $(".card").stop().animate({
            top:"-90px"
        },"slow");
    }).mouseleave(function(){
        $(".card").stop().animate({
            top:0
        }, "slow");
    });
    });