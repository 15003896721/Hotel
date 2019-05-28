$(function(){
    fontSize();
    $(window).resize(fontSize)
})
function fontSize(){
    var w = $(window).width()/25;
    //console.log(w);
    $(".big_title").css("font-size",w+"px");
}

