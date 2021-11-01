class Tab {
  constructor() {
    $('.table-select').on('change', (e) => {
      var val = $(e.currentTarget).val();
      this.tabChange(val)
    })

    $('.js-select-btn').on('click', (e) => {
      var val = $(e.currentTarget).data('target');
      this.tabChange(val);
    })
  }

  tabChange(id) {
    $('#' + id).addClass('is-active').siblings().removeClass('is-active');
    $('.js-select-btn[data-target="' + id + '"]').addClass('is-current').siblings().removeClass('is-current');
    $('.table-select').val(id);
  }
}

export default Tab;
