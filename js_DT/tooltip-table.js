const tooltipTableEvent = new Event("tooltipTableEvent");
let isDesktop = window.innerWidth > 1150; // Initialize isDesktop based on the initial window width
let eventData;

// Function to update isDesktop based on window width
function updateIsDesktop() {
  isDesktop = window.innerWidth > 1150;
  document.dispatchEvent(tooltipTableEvent); // Trigger the tooltipTableEvent when isDesktop changes
}

// Event listener for window resize
window.addEventListener("resize", updateIsDesktop);

function updateTopPositionForSelector() {
  if (!isDesktop) {
    const selectorPositionOnPage = $(".select-commodity").offset().top;
    const selectorHeight = $(".select-commodity").height();
    $(".ui-selectmenu-menu").css(
      "top",
      `${selectorPositionOnPage + selectorHeight}px`
    );
  }
}

window.addEventListener("scroll", updateTopPositionForSelector);

document.addEventListener("tooltipTableEvent", () => {
  const container = $(".tooltip-container");
  const textContainer = $(".tooltip-container span");
  let timeout;

  $(".mobile-tooltip").on({
    mouseenter: function (e) {
      eventData = e;
      timeout = setTimeout(() => {
        showTooltip(eventData);
      }, 1000);
    },
    mouseleave: function () {
      clearTimeout(timeout);
      hideTooltip();
    },
    touchstart: function (e) {
      eventData = e;
      if (textContainer.text() === $(eventData.currentTarget).text()) {
        hideTooltip();
        return;
      }
      eventData.preventDefault();
      if (!textContainer.text()) {
        showTooltip(eventData);
      } else if (textContainer.text() !== $(eventData.currentTarget).text()) {
        hideTooltip();
        showTooltip(eventData);
      }
    },
  });

  $(".search-results-container").on("ps-scroll-y", (e) => {
    hideTooltip();
  });

  $(".search-results-container").on("ps-scroll-x", (e) => {
    hideTooltip();
  });

  function showTooltip(e) {
    const target = $(e.target).is("li")
      ? $(e.target).find("span")[0]
      : e.target;

    if (
      target.offsetWidth < target.scrollWidth ||
      !!$(target).parents(".asset-label").length
    ) {
      setPosition(e);
      $(container).addClass("touch-active");
    }
  }

  function hideTooltip() {
    $(container).removeClass("touch-active");
    $(container).removeClass("with-operation");
    textContainer.text("");
  }

  function setPosition(e) {
    const mainOffset =
      ($(".main-content") &&
        $(".main-content").offset() &&
        $(".main-content").offset().top) ||
      0;
    const el = e.currentTarget;
    const flag = $(el).parents(".asset-label").find(".flag");
    let extraText = "";
    if (
      !!flag.length &&
      (flag.hasClass("multi-operation") || flag.hasClass("single-operation"))
    ) {
      extraText = flag.hasClass("multi-operation")
        ? "\n Multi - mine Operation"
        : flag.hasClass("single-operation")
        ? "\n Part of an Operation"
        : "";
      $(container).addClass("with-operation");
      if (!isDesktop) {
        textContainer.html(
          `<a href="${
            $(el).parent().find("a").attr("href") || $(el).parent().attr("href")
          }" target="_blank" style="color: var(--color-blue);">${
            $(el).text().trim() || $(el).parent().find("a").text()
          } <br> ${extraText}</a>`
        );
      }
    } else {
      $(container).removeClass("with-operation");
      if (!isDesktop) {
        textContainer.html(
          `${
            $(el).text().trim() || $(el).parent().find("a").text()
          } <br> ${extraText}`
        );
      }
    }
    if (isDesktop) {
      textContainer.html(
        `${
          $(el).text().trim() || $(el).parent().find("a").text()
        } <br> ${extraText}`
      );
    }

    const top = $(el).offset().top - mainOffset - 28 - container.height();
    const left =
      $(el).offset().left + $(el).width() / 2 - container.width() / 2;

    container.css("top", top);
    container.css("left", left < 0 ? 0 : left);
  }
});
