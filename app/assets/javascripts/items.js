$(document).on("click", "#add_item_button", function() {
  // Make sure the item name field isn't blank
  if ( $("#item_name").val() != '' ) {
    // Post the new item to the controller
    $.post("/items", $("#new_item_form").serialize(), function() {
      // Clear out the item name field on ajax success
      $("#item_name").val('');  
    })
  }
});

$(document).on("click", ".edit_item", function() {
  $.get('/items/' + $(this).data('item_id') + '/edit')
})

$(document).on("click", "#update_item", function() {
  if ( $("#item_name").val() != '' ) {
    $.ajax({
      url: '/items/' + $(this).data('item_id'),
      type: "PATCH", 
      data: $("#edit_item_form").serialize(),
    });
  }
});

$(document).on("click", "#cancel_edit", function() {
  $.get('items/new_form');
})

$(document).on("click", '.remove_item', function() {
  var item = $(this).parent();
  $.ajax({
    url: '/items/' + $(this).data('item_id'),
    type: "DELETE",
    dataType: 'script'
  })
  .done(function() {
    item.remove();
  })
});

$(document).on("click", "#search_item_button", function() {
  $.get("/items/search", {'search_item_name': $("#search_item_name").val()})
});