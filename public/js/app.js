 
 $("document").ready(function(){
 	//$("#sidebar-wrapper").toggleClass("active");
 	//$(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");

 	moveArrow();
 })

 // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
    $(".arrowContent").css("opacity", '1');

    moveArrowClick();
  });
function moveArrow(){
  if($(".active")[0]){
      console.log("active")
      $(".arrowContent").css("top", '40%');
      $(".arrowContent").css("right", '7%');
      $(".arrow").css("transform", "rotate(-108deg)");
      $(".arrowContent").css("transform", "scaleX(1)");
  }else{

    $(".arrowContent").css("top", '4%');
    $(".arrowContent").css("right", '-17%');
    $(".arrowContent").css("transform", "scaleX(-1)");
    $(".arrow").css("transform", "rotate(132deg)");
  }
}

function moveArrowClick(){
  
	if($(".active")[0]){
 		if ($(window).width() < 600) {
     $(".arrowContent").hide();
    }
    else {
       console.log("active")
      $(".arrowContent").css("top", '40%');
      $(".arrowContent").css("right", '7%');
      $(".arrow").css("transform", "rotate(-108deg)");
      $(".arrowContent").css("transform", "scaleX(1)");
    }
 	}else{
 		$(".arrowContent").show();

 		$(".arrowContent").css("top", '4%');
 		$(".arrowContent").css("right", '-17%');
 		$(".arrowContent").css("transform", "scaleX(-1)");
 		$(".arrow").css("transform", "rotate(132deg)");
 	}
}

