//jquery galeria flickr
$(document).ready(function() {
    var div = $('div.gallery');
    var api_key = '7b9d45813dfdd762787e9b65978c858b';
    var per_page = 999;
    var url = 'http://api.flickr.com/services/rest/' +
        '?format=json&jsoncallback=?&api_key=' + api_key +
        '&method=flickr.people.getPublicPhotos&user_id=78235690@N06' +
        '&per_page=' + per_page;

    $.getJSON(url, function(data) {
        if (data.stat != 'ok')
            return;
        for (var i = 0; i < data.photos.photo.length; i++) {
            var photo = data.photos.photo[i];
            var thumb = 'http://farm' + photo['farm'] +
                '.static.flickr.com/' + photo['server'] + '/' + photo['id'] +
                '_' + photo['secret'] + '_' + 'q.jpg';
            div.append('<img src="' + thumb + '" alt=" ' + photo['title'] +
                       '">');
        }
    });
});
