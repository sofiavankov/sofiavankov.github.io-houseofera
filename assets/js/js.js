$(document).ready(function () {
    $("#about").click(function () {
        $('html, body').animate({
            scrollTop: $("#aboutsection").offset().top
        }, 1000);
    });

    $("#contact").click(function () {
        $('html, body').animate({
            scrollTop: $("#contactsection").offset().top
        }, 1000);
    });

    playGif();

    showProject();

    removeText();


});

function removeText() {

}

function playGif() {
    var scrollPosition = [
        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    ];
    var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
    html.data('scroll-position', scrollPosition);
    html.data('previous-overflow', html.css('overflow'));
    html.css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);

    setTimeout(function () {
        $("#site-gif").addClass("no-show");

        var html = jQuery('html');
        var scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1])
    }, 8700);

}

function showProject() {
    $("#project-1").hover(function () {
        $(".projects__image").css("background-image", "url('../test-slide/assets/img/cover/img1.jpg')");
    }, function () {
        $(".projects__image").css("background-image", "none");
    });
    $("#project-2").hover(function () {
        $(".projects__image").css("background-image", "url('../test-slide/assets/img/cover/img2.jpg')");
    }, function () {
        $(".projects__image").css("background-image", "none");
    });
    $("#project-3").hover(function () {
        $(".projects__image").css("background-image", "url('../test-slide/assets/img/cover/img3.jpg')");
    }, function () {
        $(".projects__image").css("background-image", "none");
    });
    $("#project-4").hover(function () {
        $(".projects__image").css("background-image", "url('../test-slide/assets/img/cover/img4.jpg')");
    }, function () {
        $(".projects__image").css("background-image", "none");
    });
    $("#project-5").hover(function () {
        $(".projects__image").css("background-image", "url('../test-slide/assets/img/cover/img5.jpg')");
    }, function () {
        $(".projects__image").css("background-image", "none");
    });
    $("#project-6").hover(function () {
        $(".projects__image").css("background-image", "url('../test-slide/assets/img/cover/img6.jpg')");
    }, function () {
        $(".projects__image").css("background-image", "none");
    });
    $("#project-7").hover(function () {
        $(".projects__image").css("background-image", "url('../test-slide/assets/img/cover/img7.jpg')");
    }, function () {
        $(".projects__image").css("background-image", "none");
    });
    $("#project-8").hover(function () {
        $(".projects__image").css("background-image", "url('../test-slide/assets/img/cover/img8.jpg')");
    }, function () {
        $(".projects__image").css("background-image", "none");
    });

}
