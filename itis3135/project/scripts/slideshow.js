$(document).ready(function () {
    $(".thumbnailListImage").mouseover(function () {
                $(this).css({
                        'opacity': 1.0,
                });
        });
    
    $(".thumbnailListImage").mouseout(function () {
                $(this).css({
                        'opacity': 0.5
                });
        });

    $(".thumbnailListImage").click(function () {
                var imageSrc = $(this).attr('src');
                $('#mainSlideImage').attr('src', imageSrc);
        });
});