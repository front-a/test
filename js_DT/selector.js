const selectorEvent = new Event('refreshSelector');

(() => {
  document.addEventListener('refreshSelector', () => {
    $(".custom-select").each(function (selector) {
      defineOptions($(this)[0]);
      const menu = $(this).find('select').selectmenu({
        select: (event, ui) => {
          if ($(event.target.parentElement).hasClass('sidebar-categories-selector')) {
            $(event.target.parentElement).attr('data-selected', ui.item.value);
            resetSearchCriteria();
          }
        }
      });
    });
  });

  function defineOptions(menu) {
    if (!menu) return;
    let opts = menu.getElementsByTagName('option');
    let isExtend = Object.values(opts).map((opt) => !!opt.dataset.forOf);

    if (isExtend.includes(true)) {
      const pos = Object.values(opts).findIndex((opt) => !!opt.dataset.forOf);
      const elem = opts[pos];
      const arr = eval(opts[pos].dataset.forOf);
      delete elem.dataset.forOf;
      if (arr.length <= 1) {
        $(menu).css('display', 'none');
        return;
      } else {
        $(menu).css('display', 'block');
      }
      const temp = elem.outerHTML;
      elem.outerHTML = arr.map((item, idx) => temp.replace('$index', idx)).join();
      isExtend = Object.values(opts).map((opt) => !!opt.dataset.forOf);
      opts = menu.getElementsByTagName('option');
      Object.values(opts).forEach((opt, idx) => {
        opt.value = idx;
      });
      if (isExtend) defineOptions();
    }
    Object.values(opts).forEach(opt => opt.innerHTML = checkContent(opt.innerHTML));
  }

  function checkContent(content) {
    if (!content.includes('{{') || !content.includes('}}')) return content;
    const start = content.indexOf('{{');
    const end = content.indexOf('}}');
    return eval(content.slice(start + 2, end));
  }
})();
