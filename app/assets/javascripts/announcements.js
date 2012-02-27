$(function(){
  $(".point_1").resizable({
    handles: "all",
    maxWidth: 200,
    maxHeight: 200,
    resize: function(event, ui){
      $("point_1").css('z-index', '99999');
      $("point_1").css("margin", "0");
      var P1W = $(".point_1").css("width");
      var P1H = $(".point_1").css("height");
      $(".point_1_out").empty().prepend(P1W);
      $(".point_2_out").empty().prepend(P1H);
    }
    }).draggable({
      containment: "#wrong_picture",
      drag: function(event, ui){
        $(".point_1").css("z-index", "99999");
        $(".point_1").css("margin", "0");
        var span = $("span.out_put_point_1");
        var P1 = $(".point_1").position();
        span.html( "left: " + Math.floor( P1.left - 60 ) + ", top: " + Math.floor( P1.top - 282 ) );
      }
    })
  });
 
  $(function(){
    $(".point_2").resizable({
      handles: "all",
      containment: "#wrong_picture",
      resize: function(event, ui){
        $("point_2").css('z-index', '99998');
      }
    }).draggable({
      containment: "#wrong_picture",
      create: function(event, ui){
        $(".point_2").css("z-index", "99998");
      }
    })
  });
  $(function(){
    $(".point_3").resizable({
      handles: "all",
      containment: "#wrong_picture",
      resize: function(event, ui){
        $("point_3").css('z-index', '99997');
      }
    }).draggable({
      containment: "#wrong_picture",
      create: function(event, ui){
        $(".point_3").css("z-index", "99997");
      }
    })
  });
  $(function(){
    $(".point_4").resizable({
      handles: "all",
      containment: "#wrong_picture",
      resize: function(event, ui){
        $("point_4").css('z-index', '99996');
      }
    }).draggable({
      containment: "#wrong_picture",
      create: function(event, ui){
        $(".point_4").css("z-index", "99996");
      }
    })
  });
  $(function(){
    $(".point_5").resizable({
      handles: "all",
      containment: "#wrong_picture",
      resize: function(event, ui){
        $("point_5").css('z-index', '99995');
      }
    }).draggable({
      containment: "#wrong_picture",
      create: function(event, ui){
        $(".point_5").css("z-index", "99995");
      }
    })
  });