$(document).ready(function() {
    $('.nav-trigger').click(function() {
        $('.side-nav').toggleClass('visible');
    });

    var displayBlock = function (block, that) {

        //function show blocks

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
// show block Dashboard
    $('#dash').click(function() {
        var block = $('.dashboard__block');

        displayBlock(block, $(this));
    })
// show block Network
    $('#network').click(function() {
        var block = $('.network__block');

        displayBlock(block, $(this));
    })
// show block Sensors
    $('#sensors').click(function() {
        var block = $('.sensors__block');

        displayBlock(block, $(this));
    })
// show block Notification
    $('#notify').click(function() {
        var block = $('.notify__block');

        displayBlock(block, $(this));
    })
// show block Settings
    $('#settings').click(function() {
        var block = $('.settings__block');

        displayBlock(block, $(this));
    })
// enabled/disabled input for network settings
    $('.checkbox').click(function () {
        var check = $('.network__label input[type="checkbox"]:checked'),
            label = $('.network__input');
        if (check.length) {
            label.prop("disabled", true);
        } else {
            label.prop("disabled", false);
        }
    })

});
