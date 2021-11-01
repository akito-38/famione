class Parallax {
  constructor() {
    jQuery(window).on('scroll load resize', () => {
      this.scroll();
    });
  }
  scroll() {
    let top = jQuery(window).scrollTop();
    jQuery('.h_effect-fade').not('.is-acroll').each((i, e) => {
      if (jQuery(e).offset().top < top + jQuery(window).outerHeight() - 200) {
        jQuery(e).addClass('is-scroll');
      }
    });
  }
}

export default Parallax;
