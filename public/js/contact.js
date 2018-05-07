// Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });


 $("#contact").on('submit', function(e){
 	e.preventDefault();
 	console.log("here")
 	let contactInfo = {
 		name: $(".name").val(),
 		email: $(".email").val(),
 		subject: $(".subject").val(),
 		message: $("#textarea1").val()
 	}

 	$.ajax({
 		url:"sendForm",
 		data: contactInfo,
 		method: "post"
 	}).then(function(res){
 		if(res){
 			$("#contactMessage").css("display", "block")

 		}
 		$(".name").val("")
 		$(".email").val("")
 		$(".subject").val("")
 		$("#textarea1").val("")
 	})

 })