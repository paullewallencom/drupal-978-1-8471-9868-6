Drupal.behaviors.mysiteSort = function (context) {
  $('#distance-table').dataTable({
    "bFilter": false,
    "bPaginate": false,
    "bInfo": false,      
    "aaSorting": [[1, "asc"]],
    "aoColumns": [
      null,
      null,
      null,
      null
    ]
  });
}

