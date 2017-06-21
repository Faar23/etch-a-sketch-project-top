$(document).ready(function(){

/*the code below makes the main start button change color when the mouse enters it and leaves it*/
$('#mainButton').mouseenter(function(){
	$('#mainButton').addClass('highlight');
});

$('#mainButton').mouseleave(function(){
	$('#mainButton').removeClass('highlight');
});

/*the code below hides the rest of the buttons until the main button is clicked, then all the buttons show themselves*/
$('.buttonhide').hide();

$('#mainButton').click(function(){
	$('.buttonhide').show();
});

/*the code below is for creating number of boxes for the workspace*/

$('#mainButton').on('click', function(){
  var workspaceSize = prompt("How many boxes should make up the canvas? (1 to 50)", "24");
  if (workspaceSize <= 0 || workspaceSize > 50){
    alert("Please choose a valid number between 1 and 50");
  }
  /*code above creates a dialogue box which tells the user to choose a correct number*/
  else if(workspaceSize > 0 && workspaceSize <= 50){
  $('#workspace').empty();
  for (var i = 0; i < workspaceSize; i++){
    $('#workspace').append('<div class = "row"></div>');
  };
  for (var x = 0; x < workspaceSize; x++){
    $('.row').append('<div class = "column"></div>');
};
/*if the correct number is chosen the boxes are created accordingly*/
      var size = 700 / workspaceSize;
$('.row').css("height", size + 'px');
$('.column').css("width", size + 'px');
$('.column').css("height", size + 'px');
/*dont know what all this above is. i got help from one of the mods of top, but i think it sets the size of the boxes*/
    }; /*very imp closing bracket. shit doesnt work without it*/

    /*the code below makes the etch-asketch work...like it fills in the boxes as the mouse enters them*/
    $('.column').mouseenter(function(){
  $(this).css("background-color", "black");
});

});
/*the bracket above stays.*/

$('.hidden1').on('click', function(){
$('.column').css('background-color', 'white');
});

/*the code above makes the reset button work and clears the board*/
   $('.hidden3').on('click', function(){
  $('.column').mouseenter(function(){
$(this).css("background-color", "white");
});
});

/*the code above makes the eraser button work. i fugured it all out but was missing the .in hidden3*/
$('.hidden2').on('click', function() {
      function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      $('.column').on('mouseenter', function() {
        $(this).css('background-color', getRandomColor());
      });
    });

/*the code above makes a rainbow color. i copied from another user, but i get it...but I should have been able to do it alone :(*/
});

 

