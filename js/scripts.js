function Destination (place, date) {
  this.place = place;
  this.landmarks = [];
  this.date = date;
}
Destination.prototype.addLandmark = function(newLandmark){
  this.landmarks.push(newLandmark)
}
Destination.prototype.alertLandmark = function(){
  alert(this.landmarks);
}


$(document).ready(function() {
  $("#add-landmark-button").click(function() {
    $('#input-form').append('<div class="form-group row">' +
      '<div class="new-landmark">' +
            '<label for="landmarks" class="col-2 col-form-label">Landmarks</label>' +
          '<div class="col-10">'+
              '<input class="landmarks" type="text" value="landmarks">'+
        '</div>'+
          '</div>'+
          '</div>');
  });

  $("#submit-button").click(function() {
   var inputPlace = $("input#location").val();
   var inputDate = $("input#date").val();
   var input = new Destination(inputPlace, inputDate);
   $(".new-landmark").each(function(){
    var inputLandmarks2 = $(this).find("input.landmarks").val();
    input.landmarks.push(inputLandmarks2);
   });
  // input.addLandmark(inputLandmarks);
   //input.alertLandmark();
   var arrayToString = input.landmarks.join(", ");
   $("#output-stream").append('<div class="panel panel-default">' +
    ' <div class="panel-heading">' + inputPlace +
     '</div>' +
     '<div class="panel-body">' +
       '<ul>' +
        ' <li>Landmark:</li>' + arrayToString +
         '<li>Date: </li>' + inputDate +
       '</ul> '  +
     '</div>' +
   '</div>')

  });

});
