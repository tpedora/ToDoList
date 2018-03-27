// Check off specific todo's by clicking
$('ul').on("click", "li", function() { 
  $(this).toggleClass("completed");
});

// Click on X to delete todo
$('ul').on("click", "span", function(event) {
// Sets fade out, but fade out doesn't "remove". This applies to span
    $(this).parent().fadeOut(function() {
// Removes item from list once faded. This applies to LI, because of .parent()
        $(this).remove();
    });
    event.stopPropagation();
});

$('input[type="text"]').keypress(function(event) {
  if (event.which === 13) {
// Grabbing todo text from input
    let toDoText = $(this).val();
    $(this).val("");
// Create new LI and add to ul and adding span with X
    $('ul').append("<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</li>");  
  } 
});

$('.fa-plus').click(function() { 
    $('input[type="text"]').fadeToggle();
})
