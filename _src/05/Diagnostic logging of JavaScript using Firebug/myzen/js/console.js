Drupal.behaviors.consoleDebug = function (context) {
  var s = 'Foo';

  console.log(s);
  console.debug(s);

  $('a.active').each(function() {
    // console.log(this);
    console.count('Number of links on the page:');
  });

  console.warn('This is simply a warning!');
  console.error('This is an error!');
)

