$(document).ready(function () {

    // Ryu in ready position
    $(".ryu").mouseenter(function () {
        $(".ryu-still").hide();
        $(".ryu-throwing").hide();
        $(".ryu-cool").hide();
        $(".ryu-ready").show();
    })

    // Ryu in still position
    .mouseleave(function () {
        $(".ryu-ready").hide();
        $(".ryu-throwing").hide();
        $(".ryu-cool").hide();
        $(".ryu-still").show();
    })

    // Ryu throws Hadouken and makes sound
    .mousedown(function () {
        playHadouken();
        $(".ryu-ready").hide();
        $(".ryu-still").hide();
        $(".ryu-cool").hide();
        $(".ryu-throwing").show();
        $(".hadouken").finish().show().animate({
                "left": "1020px"
            }, 500,
            function () {
                $(this).hide();
                $(this).css("left", "520px");
            }
        );
    })

    // Ryu in ready position
    .mouseup(function () {
        $(".ryu-throwing").hide();
        $(".ryu-still").hide();
        $(".ryu-cool").hide();
        $(".ryu-ready").show();
    });

    // Ryu in cool position
    $(document).keydown(function (e) {
        if (e.keyCode == 88) {
            playMusic();
            $(".ryu-ready").hide();
            $(".ryu-still").hide();
            $(".ryu-throwing").hide();
            $(".ryu-cool").show();
        }
    })

    .keyup(function (e) {
        if (e.keyCode == 88) {
            $("#cool-music")[0].pause();
            $("#cool-music")[0].load();
            $(".ryu-cool").hide();
            $(".ryu-throwing").hide();
            $(".ryu-ready").hide();
            $(".ryu-still").show();
        }
    });
});




// Function to play Hadouken sound
function playHadouken() {
    $("#hadouken-sound")[0].volume = 0.5;
    $("#hadouken-sound")[0].load();
    $("#hadouken-sound")[0].play();
}

// Function to play cool music
function playMusic() {
    $("#cool-music")[0].volume = 0.5;
    //$("#cool-music")[0].load();
    $("#cool-music")[0].play();
}
