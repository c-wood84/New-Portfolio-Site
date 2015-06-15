$('button.minus').click(function() {
  $(this).toggleClass('expanded').siblings('div').slideToggle();
});


// Activate ToolTip
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

