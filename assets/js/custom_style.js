
/***** Custom_style Js *****/


/***** Birthday Select *****/


$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 80) {
    $('.header-search').fadeIn();
  } else {
    $('.header-search').fadeOut();
  }
});

$(document).ready(function(){
    $(".res-menu-btn").click(function(){
        $(".res-menu-open").slideToggle("slow");
    });
    $("#sub-menu1").click(function(){
        $("#open-sub-menu1").slideToggle("slow");
    });
});
$(document).ready(function(){
    $(".domain-title a").click(function(){
        $("#results_detail").slideToggle("slow");
    });
});