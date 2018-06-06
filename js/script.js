/* global $ */

var color = "";
var audio = "";

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function stopAudio() {
    var allAudio = document.getElementsByTagName('audio');
    for(i=0; i<allAudio.length; i++) allAudio[i].pause();
}

function removeActive() {
    $("div[id*='active']").removeAttr("id");
}

//play audio
$(".play-song").click(function() {
    $(".play-song").hide();
    $(".pause-song").show();
    $(".now-selected").hide();
    $(".now-paused").hide();
    $(".now-playing").show();
    playAudio();
});

//pause audio
$(".pause-song").click(function() {
    $(".pause-song").hide();
    $(".play-song").show();
    $(".now-playing").hide();
    $(".now-paused").show();
    pauseAudio();
});

//hover the logo
$(".logo").hover(function() {
    $(".logo").css("background-color", "black");
    $(".logo a").css("color", "#F2F2F2");
}, function() {
    $(".logo").css("background-color", "transparent");
    $(".logo a").css("color", "black");
});

//hover a color
/*$(".color-picker div").mouseover(function() {
    $(".no-color-selected").hide();
    $(".now-selected").show();
    $(".selected-song-name").load("songs/white.html .selected-song-name");
    $(".selected-artist-name").load("songs/white.html .selected-artist-name");
    $(".selected-album-art").load("songs/white.html .selected-album-art");
    $(".selected-song-name").show();
    $(".selected-artist-name").show();
    $(".selected-album-art").show();
})
.mouseout(function() {
    $(".now-selected").hide();
    $(".no-color-selected").show();
    $(".selected-song-name").hide();
    $(".selected-artist-name").hide();
    $(".selected-album-art").hide();
});*/

//click a color
$(".color-picker div").click(function() {
    color = $(this).attr('name');
    audio = document.getElementById(color + "-audio");

    stopAudio();
    removeActive();
    $(this).attr('id', color + "-active");
    $(".no-color-selected").hide();
    $(".nothing-selected").hide();
    $("#nothing-selected-push").hide();
    $(".pause-song").hide();
    $(".play-song").show();
    $(".now-playing").hide();
    $(".now-paused").hide();
    $(".now-selected").show();
    $(".selected-song-name-empty").load("songs/" + color + ".html .selected-song-name");
    $(".selected-artist-name-empty").load("songs/" + color + ".html .selected-artist-name");
    $(".selected-album-art-empty").load("songs/" + color + ".html .selected-album-art");
    $(".about").attr('id', color + "-info");
    $(".lyrics").attr('id', color + "-lyrics");
    $(".info-header").attr('id', color + "-active");
    $(".info").css("display", "flex");
    $(".info").show();
    $(".selected-artist-info").load("songs/" + color + ".html .selected-artist-info");
    $(".selected-song-lyrics").load("songs/" + color + ".html .selected-song-lyrics");

    //hover the play button
    $(".control-song").hover(function() {
        $("#play").hide();
        $("#play-hover").show();
    }, function() {
        $("#play-hover").hide();
        $("#play").show();
    });

    //hover the pause button
    $(".control-song").hover(function() {
        $("#pause").hide();
        $("#pause-hover").show();
    }, function() {
        $("#pause-hover").hide();
        $("#pause").show();
    });
});

//hover the arrow button
$(".back-to-top").hover(function() {
    $("#arrow-top").hide();
    $("#arrow-top-hover").show();
}, function() {
    $("#arrow-top-hover").hide();
    $("#arrow-top").show();
});

//clicking the arrow button scrolls to the top
$(".back-to-top").click(function() {
    $("html, body").animate({scrollTop: 0}, 600);
});
