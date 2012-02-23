$(document).ready(function(){
    var p = $("p.out_put");
    var offset = $("div#wrong_picture").offset();
    p.html( "left: " + offset.left + ", top: " + offset.top );
  });