$(document).ready(function(){
  var height = parseInt(prompt("How tall are you?"));

  if (height >= 60) {
    $(".adults").show();
    $(".all").show();
    $(".adult-ride, .all-ride").css({ "background-color": "yellow"});
  } else if (height <= 30) {
    $(".kids").show();
    $(".all").show();
    $(".kid-ride, .all-ride").css({ "background-color": "yellow"});
  } else {
    $(".all").show();
    $(".all-ride").css({ "background-color": "yellow"});
  }

  $(".btn").click(function() {
    $("#ride-list").toggle();
  });
});
