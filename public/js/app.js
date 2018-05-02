 
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

    moveArrow();
  });

function moveArrow(){
	if($(".active")[0]){
 		console.log("active")
 		$(".arrowContent").css("top", '40%');
 		$(".arrowContent").css("right", '7%');
 		$(".arrow").css("transform", "rotate(-108deg)");
 		$(".arrowContent").css("transform", "scaleX(1)");
 	}else{
 		console.log("notactive")
 		$(".arrowContent").css("top", '4%');
 		$(".arrowContent").css("right", '-17%');
 		$(".arrowContent").css("transform", "scaleX(-1)");
 		$(".arrow").css("transform", "rotate(132deg)");
 	}
}

$("#button").on("click", function(){
	console.log("click")
	openNav();
})
