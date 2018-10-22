$(document).ready(function() {
  $("form").submit(function(event) {
  event.preventDefault();
  var faveFood = $("#foods").val();
  var faveAnimal = $("#animals").val();
  var faveColor = $("#colors").val();
  var array = [faveFood, faveAnimal, faveColor];
  var newArray = [];
  // newArray.push(array[1]);
  // console.log(newArray);
  $("li#first").text(array[0]);
  $("li#second").text(array[1]);
  $("li#third").text(array[2]);
  });
});
