(function($){

    $(document).on('ready', function(){

        $(document).foundation();

        var MediaQueryBreakpoint = Foundation.MediaQuery.current;

        if(MediaQueryBreakpoint === 'small') {
            var about_hidden_content = $('.about--texto p').not('.about--texto p:nth-child(1)');

            about_hidden_content.hide();

            $('.about--button-continue').each(function(index, item){
                $this = $(this);
                $this.css('display', 'block');

                $this.on('click', function(event){
                    event.preventDefault();
                    about_hidden_content.toggle();
                    $this.css('display', 'none');
                });

            });
        }


        $('.speakers').each(function(index, item){
            var speakers = $(this);

            speakers.find('[data-tab-content-hide]').hide();
            speakers.find('.speakers--tab--list--item').find('.speakers--tab--list--link').on('click', function(event){
                event.preventDefault();

                var target = $(this).data('tab-link');

                speakers.find('[data-tab-content-for]').hide();
                speakers.find('[data-tab-content-for="' + target + '"]').show();
                speakers.addClass('speakers__tab_' + target);
            });

        });

        $('.speakers .columns:last-child').addClass('end');

    });
})(jQuery);
