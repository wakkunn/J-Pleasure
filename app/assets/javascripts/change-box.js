$(function(){
  $(".D-1").resizable({
    maxWidth: 582,
    resize: function(event, ui) {
      var w1 = $(".D-1").css("width");
      var w4 = w1.replace('px','');
      var w7 = eval(w4);  //D-1の数値
      var w10 = 600 - w7
      var w11 = w10 / 2
      $("#debug").empty().prepend(w10);
      $(".D-2").width(w11);
      $(".D-3").width(w11);
    }
  });
  $(".D-2").resizable({
    maxWidth: 582,
    resize: function(event, ui) {
      var w2 = $(".D-2").css("width");
      var w5 = w2.replace('px','');
      var w8 = eval(w5);  //D-2の数値
      var w10 = 600 - w8
      var w11 = w10 / 2
      $("#debug").empty().prepend(w10);
      $(".D-1").width(w11);
      $(".D-3").width(w11);
    }
  });
  $(".D-3").resizable({
    maxWidth: 582,
    resize: function(event, ui) {
      var w3 = $(".D-3").css("width");
      var w6 = w3.replace('px','');
      var w9 = eval(w6);  //D-3の数値
      var w10 = 600 - w9
      var w11 = w10 / 2
      $(".D-1").width(w11);
      $(".D-2").width(w11);
    }
  });
})