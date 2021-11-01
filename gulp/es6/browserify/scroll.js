class Scroll {
  constructor() {
    this.init();
  }

  init() {
    jQuery('.js-scroll').on('click', (e) => {
      jQuery('.js-menu-switch').removeClass('is-active');
      let target = jQuery(e.currentTarget).attr('href');
      if (target == '#') {
        target = 'html';
      }

      this.move(jQuery(target));
      return false;
      // jQuery('.js-menu').removeClass('is-active');

    });

    // var hash = location.hash;
    // if (hash&&hash!='#tab1'&&hash!='#tab2') {
    //   this.move(hash)
    // };

    // var $jump = $('.js-pageTop');
    // $(window).on('scroll load resize', function () {
    //   var top = $(window).scrollTop();
    //   if (500 < top) {
    //     $jump.stop(true).fadeIn(150);
    //   } else {
    //     $jump.stop(true).fadeOut(150);
    //   }
    // });
  }

  move(target) {
    jQuery("html,body").animate({
      scrollTop: jQuery(target).offset().top - 120
    }, 500);
  }
}

export default Scroll;
