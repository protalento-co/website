
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 2) {
            $(".nav").addClass("white--nav");
            $(".nav").removeClass("transparent--nav");
        } else {
            $(".nav").addClass("transparent--nav");
            $(".nav").removeClass("white--nav");
        }
    });
});
