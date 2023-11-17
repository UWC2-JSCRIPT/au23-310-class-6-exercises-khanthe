$(document).ready(function(){
    // Create a new <a> element containing the text "Buy Now!"
    // with an id of "cta" after the last <p>
    $('<a/>',{
        text: 'Buy now!',
        id: 'cta'
    }).insertAfter('p:last-child');

    // Access (read) the data-color attribute of the <img>,
    // log to the console
    const $imgColor = $('img').data('color');
    console.log($imgColor);

    // Update the third <li> item ("Turbocharged"),
    // set the class name to "highlight"
    const $list = $('li');
    $('li').eq(2).addClass('highlight');

    // Remove (delete) the last paragraph
    // (starts with "Available for purchase now…")
    $('p:last-of-type').remove();

    // Create a listener on the "Buy Now!" link that responds to a click event.
    // When clicked, the the "Buy Now!" link should be removed
    // and replaced with text that says "Added to cart"
    $('#cta').on('click', function(e){
        $(this).replaceWith('Added to cart');
    });
});