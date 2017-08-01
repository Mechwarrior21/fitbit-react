import $ from 'jquery';
import 'slick-carousel';

$(function() {
    function assignSiblingClasses(target) {
        // Assigning Classes for resize animations
        var previousSlide = target.prev('.slide');
        var nextSlide = target.next('.slide');
        var outlierPreviousSlide = previousSlide.prev('.slide');
        var outlierNextSlide = nextSlide.next('.slide');
        var allPositionClasses = 'current-slide sibling-slide outlier-slide slide-position-1 slide-position-5';

        target.removeClass(allPositionClasses).addClass('current-slide');
        // Sibling Slides
        previousSlide.removeClass(allPositionClasses).addClass('sibling-slide');
        nextSlide.removeClass(allPositionClasses).addClass('sibling-slide');
        // Outlier Slides
        outlierPreviousSlide.removeClass(allPositionClasses).addClass('outlier-slide slide-position-1');
        outlierNextSlide.removeClass(allPositionClasses).addClass('outlier-slide slide-position-5');
    }

    $('.device-slider').slick({
        dots: true,
        infinite: true,
        speed: 600,
        centerMode: true,
        draggable: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    assignSiblingClasses($('.slick-active'));

    $('.device-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var parentElement = $(this).parent();
        var nextSlideClassNumber = nextSlide + 1;
        // Selecting by class number so we can account for clones which have a different data-slide-index
        var nextSlideElement = $('.device-slider .slide-' + nextSlideClassNumber);

        // Populating info for slides
        parentElement.find('h2').html(nextSlideElement.data('slide-title'));
        parentElement.find('p').html(nextSlideElement.data('slide-text'));

        assignSiblingClasses(nextSlideElement);
    });

    $('.device-slider').on('afterChange', function() {
        // Removing for left over class assignment on slider loop
        if ($('.slick-cloned').hasClass('current-slide')) {
            $('.slick-cloned').removeClass('current-slide');
        }
    });

    // Waiting for slick to init in order to assign class animation class so the user does
    // not see the initial slides growth transistion
    $(function() {
        $('.device-slider').addClass('animation-ready');
    });
});
