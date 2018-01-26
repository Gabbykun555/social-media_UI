
$(document).ready(function() {
    $('.btn-primary').on('click', function() {
        var title = $('#post-title').val();
        var content = $('#post').val();
        $('#posts').prepend("<div class=\"card\"><div class=\"card-header\">" + username + " " + "posted:" + "</div><div class=\"card-block\"><h4 class=\"card-title\">" + title + "</h4><p class=\"card-text\">" + content + "</p><div class=\"react text-left\"><ul><a href=\"\"><li><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></li></a><a href=\"\"><li><i class=\"fa fa-comment\" aria-hidden=\"true\"></i></li></a><a href=\"\"><li><i class=\"fa fa-share\" aria-hidden=\"true\"></i></li></a></ul><p class=\"card-text text-right\"><small class=\"text-muted\">No views.</small></p></div></div></div>");
        $('#new').html(content);
    });
    
    
    var username = $('#username').text();
    
});