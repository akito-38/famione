class Menu {
  constructor() {
    this.init();
  }

  init() {
    $('.js-menu-switch').on('click', (e) => {
      $(e.currentTarget).addClass('is-active')
    });
    jQuery('.js-modal-close').on('click', (e) => {
      this.close();
    });
  }

  close() {
    jQuery('.js-menu-switch').removeClass('is-active');
  }
}
export default Menu;
