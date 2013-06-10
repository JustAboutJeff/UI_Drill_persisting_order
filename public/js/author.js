$(document).ready(function() {
  $( ".sortable-list" ).sortable({
    axis: "y",
    cursor: "ns-resize",
    update: function( event, ui ) {
      var data = {};
      $(this).children().each( function() {
        data[$(this).text()] = $(this).index();
        // $(this).attr("data-position",$(this).index());
      });
      $.post( '/', data );
    }
  });
});