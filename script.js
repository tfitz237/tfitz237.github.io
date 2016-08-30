            $(document).ready(function() {
                var scroll_left = 0;
                var currentPage = $('.content-about');
                var currentLink = $('.navbar-nav li:first-child');
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
                    $('.body').animate({scrollLeft:scroll_left}, 800, function() {
                        if(currentPage.height() > $('.body').height()) {
                            $('.body').css('overflow-y', 'scroll');
                        }
                        
                    });
                    $(currentLink).removeClass('active');
                    currentLink = $(this);
                    $(this).addClass('active');
                    return false;
                });
            });