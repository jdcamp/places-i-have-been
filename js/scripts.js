function Destination (place, landmarks, date) {
  this.place = location;
  this.landmarks = [];
  this.date = date;
}


$(document).ready(function() {
  $("#submit-button").click(function() {
   var inputPlace = $("input#location").val();
   var inputLandmarks = $("input#landmarks").val();
   var inputDate = $("input#date").val();
   var input = new Destination(inputPlace,inputLandmarks, inputDate);

   $("#output-stream").append('<div class="panel panel-default">' +
    ' <div class="panel-heading">' + inputPlace +
     '</div>' +
     '<div class="panel-body">' +
       '<ul>' +
        ' <li>Landmark:</li>' + inputLandmarks +
         '<li>Date: </li>' + inputDate +
       '</ul> '  +
     '</div>' +
   '</div>')

  });

});
