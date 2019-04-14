var suggestions = [
    {'src' : 'images/samsung_logo.jpg', 'href' : '.../index.html'},
    {'src' : 'images/wally_logo.png', 'href' : '.../index.html'},
    {'src' : 'images/magicleap_logo.png', 'href' : '.../index.html'},
    {'src' : 'images/samsung_4.jpg', 'href' : '.../index.html'},
];

var start = 0;
var end = -1;
var container = $('.suggestions-container');

if (container.length) {

    var width = 100 / Math.min(4, suggestions.length) + '%';
    end = start + Math.min(4, suggestions.length);
    for (var i = 0; i < end; i++) {
        var suggestion = document.createElement('div');
        suggestion.className = 'suggestion';
        suggestion.style.width = width;
        
        var img = document.createElement('img');
        img.setAttribute('src', suggestions[i].src);
        var anchor = document.createElement('a');
        anchor.setAttribute('href', suggestions[i].href);
        
        anchor.appendChild(img);
        suggestion.appendChild(anchor);
        container.append(suggestion);
    }
    
}