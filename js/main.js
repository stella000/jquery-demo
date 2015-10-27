/* your code goes here! */

/* Use clever selections and event handlers to assign the described interactivity */

/*change the content when clicking on the button */

$('#change-content').click(function(){

	var useSelector = $("#selector").val();
	var changedContent = $("#newContent").val();
	$('main ' + useSelector).html(changedContent);


})

$('#add-at-end').click(function(){

	var useSelector = $("#selector").val();
	var appendElement = $("#newContent").val();
	$(useSelector).append(appendElement);

}) 

$('#add-at-start').click(function(){

	var useSelector = $("#selector").val();
	var appendElement = $("#newContent").val();
	$(useSelector).prepend(appendElement);

}) 


$('#insert-before').click(function(){

	var appendElement = $("#newContent").val();
	$(commonSelector).before(appendElement);

}) 

$('#move-after').click(function(){

	var useSelector = $("#newContent").val();
	$(useSelector).after(commonSelector);

}) 

$('#surround-class').click(function(){
	var useSelector = $("#selector").val();
	$().wrap( "<div class='new'></div>" );

}) 




