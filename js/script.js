

var loadSplash = function(){
    console.log($(window).height());

};

$(document).ready(function(){
    $('.splash-img').css('height',$(window).height()+'px');
});

