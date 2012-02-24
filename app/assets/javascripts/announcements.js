$(document).ready(function(){
    var p = $("p.out_put");
    var offset = $("div#wrong_picture").offset();
    p.html( "left: " + offset.left + ", top: " + offset.top );
  });
  
  $(function(){
    $(".point_1").resizable({
      handles: "all",
      containment: "#wrong_picture",
      resize: function(event, ui){
        $("point_1").css('z-index', '99999');
      }
    }).draggable({
      containment: "#wrong_picture",
      create: function(event, ui){
        $(".point_1").css("z-index", "99999");
      }
    })
  });
  $(function(){
    $(".point_2").resizable({
      handles: "all",
      containment: "#wrong_picture",
      resize: function(event, ui){
        $("point_2").css('z-index', '99999');
      }
    }).draggable({
      containment: "#wrong_picture",
      create: function(event, ui){
        $(".point_2").css("z-index", "99999");
      }
    })
  });
  $(function(){
    $(".point_3").resizable({
      handles: "all",
      containment: "#wrong_picture",
      resize: function(event, ui){
        $("point_3").css('z-index', '99999');
      }
    }).draggable({
      containment: "#wrong_picture",
      create: function(event, ui){
        $(".point_3").css("z-index", "99999");
      }
    })
  });
  $(function(){
    $(".point_4").resizable({
      handles: "all",
      containment: "#wrong_picture",
      resize: function(event, ui){
        $("point_4").css('z-index', '99999');
      }
    }).draggable({
      containment: "#wrong_picture",
      create: function(event, ui){
        $(".point_4").css("z-index", "99999");
      }
    })
  });
  $(function(){
    $(".point_5").resizable({
      handles: "all",
      containment: "#wrong_picture",
      resize: function(event, ui){
        $("point_5").css('z-index', '99999');
      }
    }).draggable({
      containment: "#wrong_picture",
      create: function(event, ui){
        $(".point_5").css("z-index", "99999");
      }
    })
  });