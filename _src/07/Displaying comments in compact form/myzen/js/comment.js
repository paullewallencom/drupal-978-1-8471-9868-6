Drupal.behaviors.myzenComments = function (context) {
  $('#comments h3.title')
    .click(function() {
      // Display all siblings in animated fashion.
      $(this).siblings().show('fast');
    })
    .siblings()
    .hide();
}

