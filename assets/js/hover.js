$(function () {
  $("#designer").hover(
    function () {
      $(".big").css("height", "300px");
      $(".outline").css("height", "285px");
      $(".outline").css("border", "2px solid #595959");
      $(".outline").css("background-color", "#00c5db10");
      $(".small").css("opacity", "1");
      $("#color1, #color2, #color3, #color4, #color5").css("opacity", "1");
      $("#color1").css("transition-delay", "0s");
      $("#color2").css("transition-delay", ".25s");
      $("#color3").css("transition-delay", ".5s");
      $("#color4").css("transition-delay", ".75s");
      $("#color5").css("transition-delay", "1s");
    },
    function () {
      // on mouseout, reset the background colour
      $(".big").css("height", "0px");
      $(".outline").css("height", "0px");
      $(".outline").css("border", "0px solid #59595900");
      $(".outline").css("background-color", "#00c5db2300");
      $(".small").css("opacity", "0");
      $("#color1, #color2, #color3, #color4, #color5").css("opacity", "");
      $("#color1").css("transition-delay", "1s");
      $("#color2").css("transition-delay", ".75s");
      $("#color3").css("transition-delay", ".5s");
      $("#color4").css("transition-delay", ".25s");
      $("#color5").css("transition-delay", "0s");
    }
  );
});

$(function () {
  $("#developer").hover(
    function () {
      $("#code").css("clip-path", "circle(30% at 55% 50%)");
    },
    function () {
      // on mouseout, reset the background colour
      $("#code").css("clip-path", "circle(0% at 55% 50%)");
    }
  );
});

$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");;
});