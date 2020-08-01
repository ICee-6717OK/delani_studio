$(document).ready(function(){
  $("form#formValidity").submit(function(event){
    // event.preventDefault();
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("input#message").val();
    if (name && email){
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }
    
  });

});


$(document).ready(function(){
  $("#design-img").click(function(){
    $("#design-img").slideDown().hide()
    $("#design").show();
  });

  $("#design").click(function(){
    $("#design").slideUp();
    $("#design-img").slideDown();
  });

   $("#development-img").click(function(){
    $("#development-img").slideDown().hide()
    $("#development").show();
  });

  $("#development").click(function(){
    $("#development").slideUp();
    $("#development-img").slideDown();
  });

    $("#product-img").click(function(){
    $("#product-img").slideDown().hide()
    $("#product").show();
  });

  $("#product").click(function(){
    $("#product").slideUp();
    $("#product-img").slideDown();
  });
});


$(document).ready(function(){
  $("#work1").mouseover(function(){
    $("#overlay").show();
  }).mouseout(function(){
    $("#overlay").hide();
  });

  $("#work2").mouseover(function(){
    $("#overlay2").show();
  }).mouseout(function(){
    $("#overlay2").hide();
  });

  $("#work3").mouseover(function(){
    $("#overlay3").show();
  }).mouseout(function(){
    $("#overlay3").hide();
  });

  $("#work4").mouseover(function(){
    $("#overlay4").show();
  }).mouseout(function(){
    $("#overlay4").hide();
  });

  $("#work5").mouseover(function(){
    $("#overlay5").show();
  }).mouseout(function(){
    $("#overlay5").hide();
  });

  $("#work6").mouseover(function(){
    $("#overlay6").show();
  }).mouseout(function(){
    $("#overlay6").hide();
  });

  $("#work7").mouseover(function(){
    $("#overlay7").show();
  }).mouseout(function(){
    $("#overlay7").hide();
  });
  
  $("#work8").mouseover(function(){
    $("#overlay8").show();
  }).mouseout(function(){
    $("#overlay8").hide();
  });
});