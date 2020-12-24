Drupal.behaviors.mysiteSearch = function (context) {
  // Hide the search submit button.
  $('#search .form-submit').hide();

  // Apply the AutoFill plug-in to the search
  // field. This ID might vary from implementation
  // to implementation.
  $('#edit-search-theme-form-1')
  // Widen textfield.
  .attr('size', 30)
  // Add default text options.
  .autofill({
    value: Drupal.t('Enter search query ...'),
    defaultTextColor: '#666',
    activeTextColor: '#333'
  });
}

