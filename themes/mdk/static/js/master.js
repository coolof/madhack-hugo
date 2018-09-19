$(document).ready(function() {
  /* Wrap menu item labels and buttons */
  $('.menu a, .btn').each(function() {
      var letters = $(this).text().split('');

      $(this).html(function() {
        return $.map(letters, function(letter, i) {
          return "<span class='letter'>"+letter+"</span>"
        });
      });

      $(this).find('.letter').each(function() {
        var letter = $(this).text();
        if(letter == " ") {
          $(this).addClass('letter--space');
        }
      });

    //console.log($(this).find('.letter').length);

    if($(this).find('.letter').length > 13) {
      $(this).addClass('item--long');
    }
  });

  $('.faq__question').click(function() {
    $(this).parent().toggleClass('faq__item--open');
    $(this).parent().find('.faq__answer').slideToggle(200);
  });

  $('.nav-toggle').click(function() {
    $('.site-header').toggleClass('nav-open');
    console.log('clickie!');
  });
});
