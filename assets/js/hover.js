$(function () {
  $("#designer").hover(
    function () {
      $(".big").css("width", "600px");
      $(".big").css("height", "300px");
      $(".outline").css("width", "585px");
      $(".outline").css("height", "285px");
      $(".outline").css("border", "2px solid #595959");
      $(".outline").css("background-color", "#00c5db10");
      $(".small").css("background-color", "#00c5db");
    },
    function () {
      // on mouseout, reset the background colour
      $(".big").css("width", "0px");
      $(".big").css("height", "0px");
      $(".outline").css("width", "0px");
      $(".outline").css("height", "0px");
      $(".outline").css("border", "0px solid #59595900");
      $(".outline").css("background-color", "#00c5db2300");
      $(".small").css("background-color", "#00c5db00");
    }
  );
});

$(function () {
  $("#developer").hover(
    function () {
      $("#code").css("clip-path", "circle(40% at 55% 50%)");
      $("#shadow").css("opacity", "1");
      $("#shadow").css("transition", "1s");
      $("#shadow").css("transition-delay", "1s");
    },
    function () {
      // on mouseout, reset the background colour
      $("#code").css("clip-path", "circle(0% at 55% 50%)");
      $("#shadow").css("opacity", "0");
      $("#shadow").css("transition", "0s");
      $("#shadow").css("transition-delay", "0s");
    }
  );
});
