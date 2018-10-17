// Add new todos

$("input[type = 'text']").keypress(function(event) {
	if(event.which === 13) {
		// grab inputed value
		let addTodo = $(this).val();
		// clear input field
		$(this).val("");
		// create new todo
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "  +  addTodo + "</li>")
	}
});


// Check off clicked todos
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//  Click on "X" to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

