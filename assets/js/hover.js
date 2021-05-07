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
      $(".outline").css("border", "");
      $(".small").css("background-color", "");
    }
  );
});
