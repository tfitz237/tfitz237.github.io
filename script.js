$(document).ready(function() {
    var hash = window.location.hash.slice(1);
    var scroll_left = 0;
    var currentPage = $('.content-about');
    var currentLink = $('.navbar-nav li:first-child');
    if(hash.length > 0) {
        currentPage = $('.content-' + hash);
        scroll_left = currentPage.position().left;
        $('.body').animate({scrollLeft:scroll_left}, 1800);
        currentLink.removeClass('active');
        currentLink = $('a[href="#'+hash+'"]').parent();
        currentLink.addClass('active');
    }
    if(currentPage.height() > $('.body').height()) {
        $('.body').css('overflow-y', 'scroll');
    } else {
        $('.body').css('overflow-y', 'hidden');
    }
    $('.link-nav').click(function(event) {
        if($(this) == currentLink) return false;
        currentPage =  $('.content-' + $(this).attr('data-link'));
        scroll_left = currentPage.position().left;
        if(currentPage.height() < $('.body').height()) {
            $('.body').css('overflow-y', 'hidden');
        }
        $('.navbar-toggle').click();
        $('.body').animate({scrollLeft:scroll_left, scrollTop: 0}, 800, function() {
            if(currentPage.height() > $('.body').height()) {
                $('.body').css('overflow-y', 'scroll');
                
            }
            
        });
        $(currentLink).removeClass('active');
        currentLink = $(this);
        $(this).addClass('active');
        //return false;
    });
    var body = document.getElementsByClassName('body')[0];
    var ht = new Hammer(body);
    ht.on('swipeleft', function() {
       currentPage = (currentPage.next().length > 0) ? currentPage.next() : currentPage;
        scroll_left = currentPage.position().left;
        if(currentPage.height() < $('.body').height()) {
            $('.body').css('overflow-y', 'hidden');
        }
        if($('.navbar-collapse').css('display') != "none") {
            $('.navbar-toggle').click();
        }
        $('.body').animate({scrollLeft:scroll_left, scrollTop: 0}, 800, function() {
            if(currentPage.height() > $('.body').height()) {
                $('.body').css('overflow-y', 'scroll');
                
            }
            
        });
        currentLink.removeClass('active');
        currentLink = (currentLink.next().length > 0) ? currentLink.next() : currentLink;
        currentLink.addClass('active');
    });
    ht.on('swiperight', function() {
       currentPage = (currentPage.prev().length > 0) ? currentPage.prev() : currentPage;
        scroll_left = currentPage.position().left;
        if(currentPage.height() < $('.body').height()) {
            $('.body').css('overflow-y', 'hidden');
        }
        if($('.navbar-collapse').css('display') != "none") {
            $('.navbar-toggle').click();
        }
        $('.body').animate({scrollLeft:scroll_left, scrollTop: 0}, 800, function() {
            if(currentPage.height() > $('.body').height()) {
                $('.body').css('overflow-y', 'scroll');
                
            }
            
        });
        currentLink.removeClass('active');
        currentLink = (currentLink.prev().length > 0) ? currentLink.prev() : currentLink;
        currentLink.addClass('active');
    });
    $(window).on('resize', function() {
       if(currentPage.position().left != $('.body').scrollLeft()) {
           $('.body').scrollLeft(currentPage.position().left);
       }
    });
});