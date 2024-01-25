(function () {
  const resizeObserver = new ResizeObserver((entries) => {
    setTableHeight();
  });

  const interval = setInterval(() => {
    if (!$("#list_menu").length || !$(".custom-scroll").length) return;
    clearInterval(interval);
    resizeObserver.observe($("#list_menu")[0]);
    readQueryParam();
    document.querySelectorAll(".custom-scroll").forEach((container) => {
      new PerfectScrollbar(container);
    });
    setTableShadows();
  }, 300);
})();

(function () {
  const resizeObserver1 = new ResizeObserver((entries) => {
    setSidebarStyles();
  });
  const resizeObserver2 = new ResizeObserver((entries) => {
    setSidebarStyles();
  });

  const interval = setInterval(() => {
    if (!$(".sidebar-content").length) return;
    clearInterval(interval);
    resizeObserver1.observe($(".sidebar-selectors")[0]);
    resizeObserver2.observe($(".sidebar-wrapper")[0]);
    setSidebarStyles();
    setTableHeight();
  }, 300);
})();

const debounce = function (fn, time) {
  let timeout;

  return function () {
    let self = this;
    const functionCall = function () {
      return fn.apply(self, arguments);
    };
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

$.fn.exists = function () {
  return this.length !== 0;
};

$(window).resize(function(){
  let $searchResultsContainer = $('.search-results-container');

  if ($searchResultsContainer.exists()) {
    $searchResultsContainer[0].scrollLeft = 0;
  }
});