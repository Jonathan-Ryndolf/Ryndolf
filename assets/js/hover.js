$(function () {
  $("#designer").hover(
    function () {
      $(".big").css("width", "600px");
      $(".big").css("height", "100px");
      $(".outline").css("width", "585px");
      $(".outline").css("height", "85px");
      $(".outline").css("border", "2px solid #595959");
      $(".outline").css("background-color", "#00c5db23");
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
      $("#code").css("-webkit-mask-image", "radial-gradient(ellipse 50% 100% at 58% 58%, black 50%, transparent 80%)");
    },
    function () {
      // on mouseout, reset the background colour
      $("#code").css("-webkit-mask-image", "radial-gradient(ellipse 0% 0% at 58% 58%, black 50%, transparent 80%)");
    }
  );
});