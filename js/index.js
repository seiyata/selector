$(function() {
  $('#table td').on('click', function() {
    $('#taste').val($(this).data('taste'));
    $('#scent').val($(this).data('scent'));
  });
});