Drupal.behaviors.myzenBlockDisplay = function (context) {
  // We are targeting all blocks inside sidebars.
  var s = $('div.sidebar').addClass('js-sidebar');

  $('.block h2.title', s)
    .click(function () {
      $(this).siblings().toggle('slow');
      $(this).parent().toggleClass('block-open');
    })
    .siblings()
    .hide();
}

