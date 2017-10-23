(function() {

    // function equalHeight(target) {
    //     var maxHeight = 0;
    //     var trgt = $(target);

    //     trgt.removeAttr("style");

    //     trgt.each(function() {
    //         maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    //     });

    //     trgt.each(function() {
    //        $(this).height(maxHeight);
    //     });
    // }

    // function scrollToAnchor(id){
    //     var headerHeight = 102;
    //     var aTag = $(id);

    //     $('html,body').animate({scrollTop: aTag.offset().top - headerHeight},'slow');
    // }

    // function fullHeight() {
    //     $('.top-wrapper').height(function (index, height) {
    //         return window.innerHeight ;
    //     });
    // }


    $(document).ready(function() {

        // fullHeight();

        $('.hamburger').click(function () {
            $('#menu-desktop').toggleClass('open');
        });

        $(".scroll_link").click(function() {
           scrollToAnchor($(this).attr('href'));
           $('#menu-desktop').removeClass('open');
        });

        // modal

        $('.modal_link').click(function() {
            $('#form-modal').fadeIn();
            $('#menu-desktop').removeClass('open');
            return false;
        });

        $('.modal__close').click(function() {
            $('.modal').fadeOut();
        });

        $('.form__input').on('focus', function() {
            $(this).siblings('.form__lbl').addClass('active');
        });

        $('.form__input').on('blur', function() {
            if (!$(this).val()) {
                $(this).siblings('.form__lbl').removeClass('active');
            }
        });

         //E-mail Ajax Send

       $("form").submit(function(e) {

            e.preventDefault();

            var th = $(this);

            $.ajax({
                type: th.attr('method'),
                url: th.attr('action'),
                data: th.serialize()

            }).done(function() {

                $('#form-succes').fadeIn();

                setTimeout(function() {
                    th.trigger("reset");
                    $('.modal').fadeOut();
                    $('.form__lbl').removeClass('active');
                }, 5000);
            });

        });

    });

    // $(window).resize(function(){

    //     equalHeight('.benefits__txt');
    //     equalHeight('.how__item');
    //     fullHeight();

    // });

})();