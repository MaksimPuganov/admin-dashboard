$(document).ready(function() {
    $('.nav-trigger').click(function() {
        $('.side-nav').toggleClass('visible');
    });

    var displayBlock = function (block, that) {
        var isClassActive = that.hasClass('active'),
            act = $('.nav__item.active'),
            sect = $('section'),
            isClassHidden = block.hasClass('hidden');

        if (!isClassActive) {
            act.removeClass('active');
            that.addClass('active');
        }

        if  (isClassHidden) {
            $('section').each(function () {
                var $that = $(this),
                    isHide = $that.hasClass('hidden');

                if (!isHide) {
                    sect.addClass('hidden')
                }
            })
            block.removeClass('hidden')
        }
    }



    $('#dash').click(function() {
        var block = $('.dashboard__block');

        displayBlock(block, $(this));
    })

    $('#network').click(function() {
        var block = $('.network__block');

        displayBlock(block, $(this));
    })

    $('#sensors').click(function() {
        var block = $('.sensors__block');

        displayBlock(block, $(this));
    })

    $('#notify').click(function() {
        var block = $('.notify__block');

        displayBlock(block, $(this));
    })


});
