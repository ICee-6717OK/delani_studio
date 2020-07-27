$(document).on("keypress", "input", function(e){
   if(e.which == 13){
   var name = $getElementById("#name");
    alert(name+ " we have received your message. Thank you for reaching out to us.");
  }
});