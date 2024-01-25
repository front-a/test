const tooltipEvent = new Event('tooltipEvent');
document.addEventListener('tooltipEvent', () => {
  let timeout;
  $('.lock-tooltip').on({
    mouseenter: function (e) {
      timeout = setTimeout(() => {
        setPosition(e);
        $(this).addClass('hover_active');
      }, 1000);
    },
    touchstart: function (e) {
      setPosition(e);
      $(this).addClass('hover_active');
    },
    touchend: function (e) {
      clearTimeout(timeout);
      $(this).removeClass('hover_active');
    },
    mouseleave: function (e) {
      clearTimeout(timeout);
      $(this).removeClass('hover_active');
      cleanExtraRule();
    }
  });

  function setPosition(e) {
    const mainOffset = ($('.main-content') &&
      $('.main-content').offset() &&
      $('.main-content').offset().top) || 0;
    const el = e.currentTarget;
    const textEl = $(el).find('.tooltip-text');
    const top = $(el).offset().top - mainOffset - 28 - textEl.height();
    const left = $(el).offset().left + ($(el).width() / 2) - (textEl.width() / 2);
    let diff = 0;
    if (left + textEl.width() > window.innerWidth) {
      diff = left + textEl.width() - window.innerWidth;
      const styleSheet = Object.values(document.styleSheets).find(s => s.href.includes('mdo.css'));
      styleSheet.addRule('.main-content .tooltip-text::after', `left: ${48 + diff}px;`);
    }

    textEl.css('top', top);
    textEl.css('left', left < 0 ? 0 : left - diff);
  }

  function cleanExtraRule() {
    const styleSheet = Object.values(document.styleSheets).find(s => s.href.includes('mdo.css'));
    if (!styleSheet.cssRules) return;
    for (let i = 0; i < styleSheet.cssRules.length; i++) {
      if (styleSheet.cssRules[i].selectorText === '.main-content .tooltip-text::after') {
        styleSheet.deleteRule(i);
      }
    }
  }
});
