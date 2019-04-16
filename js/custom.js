$('.login-submit').click(function() {
    $('.login-subtext').text('Incorrect password!');
    $('.login-password').addClass('shake');
    setTimeout(function() {
        $('.login-password').removeClass('shake');
        $('.login-password').val('');
    }, 1000);
});

$('.login-cancel').click(function() {
   $('.login-overlay').css('display', 'none');
});

$('.login-password').on('focus', function() {
    $('.login-subtext').text('Please enter password to view protected content.');
});