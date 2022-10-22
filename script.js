const mobile = document.getElementById('mobile-menu')

$(".mobile-button").click(function(){
    if ($('.mobile-class').hasClass("hidden")) {
        $('.mobile-class').addClass("block")
        $('.mobile-class').removeClass("hidden")
      }
    else {
        $('.mobile-class').addClass("hidden")
        $('.mobile-class').removeClass("block")
    }
 
});
