$(function () {
  $('.switch-btn').click(function () {
    $(this).toggleClass('switch-on');
    if ($(this).hasClass('switch-on')) {
      $(this).trigger('on.switch');
    } else {
      $(this).trigger('off.switch');
    }
  });
  $('.switch-btn').on('on.switch', function () {
    document.getElementById('theme').href = 'dark-style.css';
  });
  $('.switch-btn').on('off.switch', function () {
    document.getElementById('theme').href = 'light-style.css';
  });
});
