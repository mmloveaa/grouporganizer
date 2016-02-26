'use strict';

$(document).ready(init);



function init(){

	console.log('ready!');

	$('#addName').on('click', addName);
	$('.holder').on('click', '.nameItems',clickName);
	$('.holder').on('click', clickBox)
	// $('#addItems').on('click','.product', clickItem);
	// $('#addCups').click(addCups);

}



function addName(){

	console.log("is this working")

	var names = $('#person').val();
	console.log(names);
	var $div = $('<div>').text(names);
	$div.addClass('nameItems')
	$('#one').append($div);
	emptyInput();

};

function emptyInput() {
	$("#person").val("")
	console.log("this is empty")
}

function clickName(event) {
	event.stopPropagation();
	// if i added this on line before line 56, 
	// selected i and p detached will happen at the same time

    console.log('cup clicked!')


    if($('.nameItems').hasClass('selected')){
    	$('.nameItems').removeClass('selected')
    	console.log("if is running")
    }else{
    	var $selected = $(this).addClass('selected')
    }

}

function clickBox(event) {
	var $selected = $('.selected');
	if($selected){
		var $detached = $selected.detach();
		$(this).append($detached);
		$detached.removeClass('selected');
	}

}
