$( document ).ready(function() {

	// Ryu in ready position
	$(".ryu").mouseenter(function(){
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})

	// Ryu in still position
	.mouseleave(function(){
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	})

	// Ryu throws Hadouken and makes sound
	.mousedown(function(){
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show().animate(
			{"left": "1020px"}, 500,
			function(){
				$(this).hide();
				$(this).css("left", "520px");
			}
		);	
	})

	// Ryu in ready position
	.mouseup(function(){
		$(".ryu-ready").show();
		$(".ryu-throwing").hide();
	});
});


// Function to play Hadouken sound
function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}