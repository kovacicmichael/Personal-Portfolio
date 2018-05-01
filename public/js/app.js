 $("document").ready(function(){
 	$("#sidebar-wrapper").toggleClass("active");
 	
 })

 // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

$("#button").on("click", function(){
	console.log("click")
	openNav();
})
  /* Set the width of the side navigation to 250px */
function openNav() {
	console.log("open")
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
	console.log("close")
    document.getElementById("mySidenav").style.width = "0";
}