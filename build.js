const nav = $(".navbar");
var count = 0;
$("nav").each(function(i){
    $(this).slideUp(0.1);
});
function visi(){
    if(count == 0){
        $("nav").each(function(i){
            $(this).slideDown("fast");
        });
        $("div div").addClass("change");
        $("div div").removeClass("changeback");
        count = count + 1;
    } else if(count == 1){
        $("nav").each(function(i){
            $(this).slideUp("fast");
        });
        $("div div").addClass("changeback");
        $("div div").removeClass("change");
        count = count - 1;
    }
}
function cEL(){
    $(".menuicon").click(function(){
        visi();
    });
    $("nav").mouseleave(function(){
        visi();
    });
}
function setUpPage(){
    cEL();
}
$(document).ready(setUpPage);