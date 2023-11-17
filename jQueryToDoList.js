$(document).ready(function(){
  /**
   * Toggles "done" class on <li> element
   */
  $('.today-list').on('click', 'li', function(){
    console.log($(this));
    $(this).toggleClass('done');
  });


  /**
   * Delete element when delete link clicked
   */
  $('.today-list').on('click','a.delete', function(){
    $(this).parent('li').fadeOut('slow', function(){
      $(this).parent('li').remove();
    })
  });


  /**
   * Adds new list item to <ul>
   */
  const addListItem = function(e) {
    e.preventDefault();
    const $text = $('input').val();

    const $list = $('ul.today-list');
    const $listItem = $('<li/>');

    $listItem.append(
      $('<span/>', {text: $text})
    );
    $listItem.append(
      $('<a/>', {text:'Delete',class:'delete'})
    );
    $listItem.appendTo($list);

  };


  // add listener for add
  $('.add-item').on('click', function(e){
    addListItem(e);
  });

});