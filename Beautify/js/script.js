/**
 * Created by vipulism on 7/9/2016.
 */
var xPos = $('.beautify').width()/2;

$('.drag-me').css({left: xPos});
var drag;

$(document).on('mouseup', function (e) {

     drag = false;
});

$('.beautify').on('mousedown', function (e) {

    drag = true;
});


$('.beautify').on('mousemove  touchmove', function (e) {

    var pic2left = $('.beautified').css("left");
    var pic2width = $('.beautified').width();
    var pic1width = $('.original').width();


    if (drag){
        var line = $('.beautify').offset().left;
        var clicked =  e.pageX - line ;
console.log(pic1width - xPos);
        var pic1 = parseInt(pic2left.replace(/\D+/, "")) - (parseInt(pic2left.replace(/\D+/, "")) - clicked);
        var pic2 = xPos - (pic1width - xPos) ;
        $('.drag-me').css({left: clicked});

        $('.beautified').css({width: pic2});
        $('.original').css({width:  pic1});

    }


});
$('.beautify').on('mouseout', function () {

    if(!drag){
       // $('.beautified, .original').animate({width:  xPos});
       // $('.drag-me').animate({left: xPos});
    }
})

