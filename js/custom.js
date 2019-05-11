//var images = $('img');
//for(var i = 0; i < images.length; i++) {
//    var src = $(images[i]).attr('src');
//    var img = new Image();
//    img.onload = function() {
//    }
//    img.src = src;
//}




var targetUrl = '';
$('a[data-protected]').click(function(e) {
    e.preventDefault();
    targetUrl = $(this).attr('href');
    console.log(targetUrl);
   $('.login-overlay').css('display', 'block'); 
});
$('.login-submit').click(function() {
    var password = $('.login-password').val();
    var hashedPass = CryptoJS.MD5(password).toString();
    var url = hashedPass + '/' + targetUrl;
    $.ajax({
        url: url,
        dataType: 'html',
        success: function(data) {
            window.location = url;
        },
        error: function(response) {
            $('.login-subtext').text('Incorrect password!');
            $('.login-password').addClass('shake');
            setTimeout(function() {
                $('.login-password').removeClass('shake');
                $('.login-password').val('');
            }, 1000);
        }
    });
});

$('.login-cancel').click(function() {
   $('.login-overlay').css('display', 'none');
});

$('.login-password').on('focus', function() {
    $('.login-subtext').text('Please enter password to view protected content.');
});


$('.scroll-down-button').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate(
        { scrollTop: $('#' + $(this).attr('target')).offset().top - $('.sticky-nav').height()}
        ,'slow');
});

$('.work-item-full, .work-item-half').mouseenter(function() {
    $(this).addClass('highlight');
    $(this).find('h1').css('display', 'none');
});

$('.work-item-full, .work-item-half').mouseleave(function() {
    $(this).removeClass('highlight');
    $(this).find('h1').css('display', 'block');
});

var currentLander = 'home';

var loaderDict = {
    'about' : 'about-landing-section',
    'home' : 'work-landing-section',
    'contact' : 'contact-landing-section'
}

var delim = '?page='
var l = window.location.href;
var idx = l.indexOf('?page=');

if(idx > -1) {
    var key = l.substring(idx + delim.length);
    if (key in loaderDict) {
        currentLander = key;
    }
}

$('.mobile-nav-icon').click(function() {
    $('.mobile-nav-links').css('display', $('.mobile-nav-links').css('display') == 'block' ? 'none' : 'block');
});


$('.' + loaderDict[currentLander]).fadeIn();

$('.landing-navigator').click(function(e) {
    e.preventDefault();
    var targetLander = $(this).attr('data-lander');
    if (currentLander != targetLander) {
        $('.' + loaderDict[currentLander]).fadeOut(250, function() {
           $('.' + loaderDict[targetLander]).fadeIn();
            currentLander = targetLander;
            var currentLocation = window.location.href;
            var idx = currentLocation.indexOf(delim);
            if (currentLocation.indexOf(delim) > -1) {
                currentLocation = currentLocation.substr(0, idx);
            }
            var lander = currentLander;
            currentLocation = currentLocation + delim + lander;
            window.history.pushState(0, 0, currentLocation);
        });
    }
});


var lightboxImages = $('.center-image');
var lightboxIndex = -1;

function lightboxNavigate(dir) {
    var before = lightboxIndex;
    if (dir == 'left') {
        lightboxIndex = (lightboxIndex - 1) % lightboxImages.length;
        if (lightboxIndex < 0) {
            lightboxIndex = lightboxImages.length - 1;
        }
    } else {
        lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
    }
    if (before != lightboxIndex) {
        $('.lightbox-container').css('background', 'url("'+$(lightboxImages[lightboxIndex]).attr('src')+'")');
//        $('.lightbox-image').fadeOut(100, function() {
//            $('.lightbox-image').attr('src', $(lightboxImages[lightboxIndex]).attr('src'));
//            $('.lightbox-image').fadeIn();
//        });
    }
}
function lightboxOpen() {
    $('.lightbox').css('display', 'block');
    $('.go-top').css('display', 'none');
}
function lightboxClose() {
    $('.lightbox').css('display', 'none');
    $('.go-top').css('display', 'block');
}

$('.center-image').click(function() {
    lightboxOpen();
    var src = $(this).attr('src');
    lightboxIndex = lightboxImages.index($(this));
//    $('.lightbox-image').attr('src', $(this).attr('src'));
    $('.lightbox-container').css('background', 'url("'+$(this).attr('src')+'")');
});

$('.lightbox-close').click(function() {
    lightboxClose();
    
});

$(document).keydown(function(e) {
    var lightBox = $('.lightbox');
    if (lightBox.length > 0 && lightBox.css('display') != 'none') {
        if (e.keyCode == 37) {
           lightboxNavigate('left');
        } else if (e.keyCode == 39) {
           lightboxNavigate('right');
        } else if (e.keyCode = 27) {
            lightboxClose();
        }
    }
    var loginOverlay = $('.login-overlay');
    if (loginOverlay.length > 0 && loginOverlay.css('display') != 'none') {
        if (e.keyCode == 13) {
            $('.login-submit').click();
        } else if(e.keyCode == 27) {
            $('.login-cancel').click();
        }
    }
});

$('.lightbox-arrow').click(function() {
    var dir = $(this).attr('data-dir');
    lightboxNavigate(dir);
});

//$(window).resize(function() {
//    var sectionCutoff = $('.overview-section').offset().top + $('.overview-section').height();
//    var sectionNavOffset = $('.section-nav').offset().top - $('.section-nav').height()
//    if (sectionNavOffset > sectionCutoff) {
//        $('.sectionNav').css({display: 'block'});
//    } else {
//        $('.sectionNav').css({display: 'none'});
//    }
//});


function handleSectionNav() {
    if ($('.sticky-nav').css('display') != 'none') {
        var sectionCutoff = $('.overview-section').offset().top + $('.overview-section').height();
        var sectionNavOffset = $('.section-nav').offset().top - $('.section-nav').height();
        if (sectionNavOffset > sectionCutoff) {
            $('.section-nav').removeClass('hidden');
        } else {
            $('.section-nav').addClass('hidden');
        }

        var sectionLinks = $('.sectionNavLink');
        for (var i = sectionLinks.length - 1; i >= 0; i--) {
            var a = sectionLinks[i];

            if ($(document).scrollTop() >= $(a.getAttribute('href')).offset().top) {
                a.classList.add('selected');
                for(var j = 0; j < sectionLinks.length; j++) {
                    if (j == i) continue;
                    sectionLinks[j].classList.remove('selected');
                }
                break;
            }
        }
    } else {
        $('.section-nav').addClass('hidden');
    }
}

var sectionNav = document.getElementsByClassName('section-nav');
if (sectionNav.length) {
    sectionNav = sectionNav[0];
}
if (sectionNav) {
    for(var i = 0; i < links.length; i++) {
        var a = document.createElement('a');
        a.setAttribute('href','#' + links[i].replace(' ', '_').toLocaleLowerCase());
        a.className = 'sectionNavLink';
        sectionNav.appendChild(a);
        a.innerHTML = links[i];                                 
    }

    $(window).scroll(function() {
        handleSectionNav();
    });
    
    $(window).resize(function() {
       handleSectionNav(); 
    });

    $('.sectionNavLink').click(function(e) {
        e.preventDefault();
        $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top + 5
        }
        ,'slow'); 
    });
}



