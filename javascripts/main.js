"use strict";
	let counter = 0;
	let editMode = false;

$(document).ready(function() {
	let newTask = $("#addedTask");
	let userSubmitTitle = $("#userSubmitTitle");
	let selectedTask = null;

	$("#addTaskBtn").on( 'click', function(){
		counter++;
		let newTitle = userSubmitTitle.val();
		newTask.append(`<li id="singleTask"><span>${newTitle}</span><input type="submit" id="edit" value="Edit"></li>`);
		userSubmitTitle.val('');
	});


	$("#clearData").on('click', () => {
		newTask.empty();
	});

	$(document).on('click', '#edit', function(e) {
		counter++;
		let editInput = $("#editInput");
		let targetTask = $("#singleTask");
		editTask($(this));
    	editInput.removeClass('hidden');
    	targetTask.addClass('hidden');
       	editInput.focus();	
        editInput.value = null;
	});

	$(document).on('click', 'span', function() {
        $(this).toggleClass('strike');
        $(this).appendTo('#completedTasks');
        $("#edit").remove();
    });

	$(document).on('dblclick', 'li', function() {
		$(this).fadeOut('slow');
		$("#edit").remove();
		$("#delete").remove();
	});

    $('input').focus(function() {
   		$(this).val('');
    });
        
    function editTask(el) {
  		let editInput = $("#editInput");
		let targetTask = $("#singleTask");
   		editInput.on('keypress', (el) => {
			if (el.keyCode === 13) {
				editInput.addClass('hidden');
				targetTask.removeClass('hidden');
				targetTask.append(`<span>${editInput.val()}</span>`);
			}
   		 });

    	
	}


});

