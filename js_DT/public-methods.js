// Function to get the current year plus an optional offset
const getYearFromNow = (value = 0) => {
  const date = new Date();
  return date.getFullYear() + value;
};

// Function to get the list of commodities based on selected checkboxes
const getCommodities = () => {
  const checkboxes = $('#holderCommodity .mdo-checkbox');
  const values = Object.values(checkboxes).map((checkbox) => {
    const isChecked = $(checkbox).children('input').is(':checked');
    return isChecked ? $(checkbox).children('label').text() : '';
  });
  return ['Commodity'].concat(values.filter((i) => !!i));
};

// Function to get a specific commodity by index
const getCommodity = (i) => {
  return getCommodities()[i];
};

// Function to check subcategories and return a value
const checkSubCategory = (i) => {
  let sub = 0;
  if (+i === 10 || +i === 15) {
    sub = $('#sidebarSubCategorySelect1').val();
  }
  if (+i === 12) {
    sub = $('#sidebarSubCategorySelect2').val();
  }
  return sub;
};

// Function to get a web method based on the selected category and subcategory
function getWebMethod() {
  let i = $('#sidebarCategorySelect').val();
  i = `${Number(i) + Number(checkSubCategory(i))}`;
  const webMethods = [
    'GetCompanies',
    'GetProperties',
    'GetCommodity',
    'GetLocation', // TODO return 'GetLocation' after backend ready,
    'GetType',
    'GetStage',
    'GetStatus',
    'GetDeposit',
    'GetMining',
    'GetProcessing',
    'GetHMEType',
    'GetHMEModel',
    'GetJobCategory',
    'GetJobTitle',
    'GetPersonnel',
    'GetMillType',
    'GetMillModel',
    'GetConsultantCompany',
  ];
  return webMethods[i];
}

// Function to get a field ID based on the selected category
function getFieldID() {
  const i = $('#sidebarCategorySelect').val();
  const fieldsId = [
    'hCompanyID',
    'hPropertyID',
    'hCommodityID',
    'hLocationID',
    'hTypeID',
    'hStageID',
    'hStatusID',
    'hDepositID',
    'hMiningID',
    'hProcessingID',
    'hHMETypeID',
    'hHMEModelID',
    'hJobCategoryID',
    'hJobTitleID',
    'hPersonnelID',
    'hMillTypeID',
    'hMillModelID',
    'hConsultantCompanyID',
  ];
  return fieldsId[i];
}

// Function to handle the 'Add' button click
function btnAddClick() {
  // Code to handle the 'Add' button click
  // Adds checkboxes based on the selected category and search criteria
  let value = $('#txtCompanySearch').attr('data-id');
  let select = $('#sidebarCategorySelect').val();
  const tbxSearch = $('#txtCompanySearch').val();
  // Getting all text values from checkboxes and then checking if we are not adding the same value
  // I guess that here should be input highlighting when we are trying to add the same checkbox
  const checkboxValues = [];

  $(".mdo-checkbox").each((_, el) => {
    checkboxValues.push($(el).text().trim());
  });

  const addCheckbox = (name, parentSelector) => {
    const $ctrl = $('<div></div>').addClass('mdo-checkbox');
    const label = $('<label></label>')
      .attr({
        for: `${name}_${value}`,
      })
      .text(tbxSearch);
    const input = $('<input/>').attr({
      id: `${name}_${value}`,
      type: 'checkbox',
      name,
      checked: 'true',
      value,
    });
    $ctrl.append(input);
    $ctrl.append(label);
    $(parentSelector).css('display', 'block');
    $(parentSelector).append($ctrl);
  };
  select = `${Number(select) + Number(checkSubCategory(select))}`;

  if (!checkboxValues.includes(tbxSearch)) {
    if (tbxSearch.length > 0) {
      if (+select === 0) {
        addCheckbox('chkCompany', '#holderCompany');
      }
      if (+select === 1) {
        addCheckbox('chkProperties', '#holder');
      }
      if (+select === 2) {
        addCheckbox('chkCommodity', '#holderCommodity');
      }
      // ------------------ Location -----------------
      if (+select === 3) {
        addCheckbox('chkLocations', '#holderLocation');
      }
      if (+select === 4) {
        addCheckbox('chkType', '#holderType');
      }
      if (+select === 5) {
        addCheckbox('chkStage', '#holderStage');
      }
      if (+select === 6) {
        addCheckbox('chkStatus', '#holderStatus');
      }
      if (+select === 7) {
        addCheckbox('chkDeposit', '#holderDeposit');
      }
      if (+select === 8) {
        addCheckbox('chkMining', '#holderMining');
      }
      if (+select === 9) {
        addCheckbox('chkProcessing', '#holderProcessing');
      }
      if (+select === 10) {
        addCheckbox('chkHMEType', '#holderHMEType');
      }
      if (+select === 11) {
        addCheckbox('chkHMEModel', '#holderHMEModel');
      }
      if (+select === 12) {
        addCheckbox('chkJobCategory', '#holderJobCategory');
      }
      if (+select === 13) {
        addCheckbox('chkJobTitle', '#holderJobTitle');
      }
      if (+select === 14) {
        addCheckbox('chkPersonnel', '#holderPersonnel');
      }
      if (+select === 15) {
        addCheckbox('chkMillType', '#holderMillType');
      }
      if (+select === 16) {
        addCheckbox('chkMillModel', '#holderMillModel');
      }

      if (+select === 17) {
        addCheckbox('chkConsultantCompany', '#holderConsultantCompany');
      }

      resetSearchCriteria();
    }
  }
}

// Function to reset the search criteria
function resetSearchCriteria() {
  $('#txtCompanySearch').val('');
  $('#txtCompanySearch').removeAttr('data-id');
}

// Function to handle search events
function search(event) {
  const keyCode = event.keyCode ? event.keyCode : event.which;
  if (keyCode == 13 && $('#txtCompanySearch').is(':focus')) {
    $('#btnAdd').trigger('click');
  }
}

// Function to toggle the header menu
function toggleHeaderMenu() {
  $('body').toggleClass('menu-open');
}

// Function to toggle the mobile sidebar
function toggleSidebarMobile() {
  $('body').toggleClass('sidebar-open');
}

// Function to show information in a dialog window
function showInfo(id, options) {
  const windowWidth = window.innerWidth;
  const isMobile = windowWidth < 1150;
  const { isSignInModal = false } = options || {};
  const dialogOptions = isSignInModal
    ? {
        modal: true,
        resizable: false,
        draggable: false,
      }
    : {};
  let wWidth = 1003;
  let wHeight = 611;
  if (isSignInModal) {
    wWidth = 488;
    wHeight = 540;
  }
  if (!isSignInModal && isMobile) {
    wWidth = windowWidth > 440 ? 400 : windowWidth - 40;
    wHeight = window.innerHeight - 100;
  }

  const dialog = $(`#${id}`);

  if (dialog.data('src')) {
    dialog.find('iframe').attr('src', dialog.data('src'));
  }

  const helpMenu = dialog.dialog({
    width: wWidth,
    height: wHeight,
    classes: isSignInModal
      ? { 'ui-dialog': 'isSignInModalPosition sign-in-animation-in' }
      : {},
    ...dialogOptions,
  });
  helpMenu.dialog('open');
  isSignInModal && isMobile && $('.signIn-modal-active .top-menu').animate({left: '-30%'}, 300)
}

// Function to toggle the 'active' class of an element by ID
function toggleActiveById(e) {
  $(`#${e}`).toggleClass('active');
}

// Function to set the active subtab
function setActiveSubTab(itemIdList, id, view) {
  $('.tabs-main-menu li').each((_, el) => {
    $(el).removeClass('open');
  });
  const openedTab = $(`.tabs-main-menu #${id}`)
    .parent()
    .parent()
    .addClass('open');
    if (window.innerWidth > 1150) {
      $(openedTab.find('.tabs-sub-menu li')[0]).addClass('open');
    }
    if (openedTab.hasClass('no-content')) {
      $('.tabs-main-menu').removeClass('active');
    } else {
      $('.tabs-main-menu').addClass('active');
    }
	
	vw = view;
}

// Function to save the active tab
const saveActiveTab = () => {
  setTimeout(() => {
    const vw = new URLSearchParams(window.location.search).get('vw');
    const activeTab = $(`li[data-tab=${vw}]`);
    if (activeTab[0]) {
      activeTab.addClass('open');
    }
  }, 100);
};

// Function to handle a submenu click event
const subMenuClick = (e) => {
  $('li[data-tab]').each((_, el) => {
    $(el).removeClass('open');
  });
  $('li[data-tabs]').each((_, el) => {
    $(el).removeClass('open');
  });
  $(e.target).closest('li').addClass('open');
  $(e.target).parent().parent().parent().addClass('open');
  $('#tab_label').text($(e.target)[0].value);
};

// Function to toggle the visibility of mobile tabs
function tabsMobileToggle() {
  $('body').toggleClass('tabs-open');
};

// Function to handle the hover event on a tab
function tabOnHover(element) {
  if (!$(element).hasClass('no-content')) {
    $('.tabs-main-menu').addClass('active');
  }
  $(element).addClass('hovered');
};

// Function to handle the leave event on a tab
function tabOnLeave(element) {
  const openedTab = $('.tabs-main-menu').children('li.open');
  $(element).removeClass('hovered');
  if (openedTab.length > 0 && !openedTab.hasClass('no-content')) {
    return;
  }
  $('.tabs-main-menu').removeClass('active');
};

// Function to read and process query parameters
const readQueryParam = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const vw = urlParams.get("vw");
  $("#list_menu li").removeClass("open");
  $(".tabs-sub-menu li").on("click", subMenuClick);
  $(".tabs-main-menu li").each((_, el) => {
    const tabsList = ($(el).data("tabs") || "")
      .split(",")
      .map((id) => id.trim());
    if (tabsList && tabsList.includes(vw)) {
      $(el).addClass("open");
      $(".tabs-main-menu").addClass("active");
      tabsList.forEach((id) => {
        const tab = $(`.tabs-sub-menu [data-tab=${id}]`);
        if (id === vw) {
          saveActiveTab();
          $("#tab_label").text($(tab).find("input")[0].value);
        }
      });
    } else if (vw === "mapTab") {
      const mapBtn = $(`#mapTab`).parent().parent();
      mapBtn.addClass("open"); // exeption for map
      $("#tab_label").html($(mapBtn).find("input")[0].value);
    }
  });
};

// Function to set sidebar styles and heights
const setSidebarStyles = () => {
  const aside = $('aside');
  const wrapper = $('.sidebar-wrapper');
  const content = $('.sidebar-content');
  const selectors = $('.sidebar-selectors');
  const searchCriteria = $('.search-criteria');
  const scroll = $('.search-criteria .custom-scroll');
  
  $('.mdo-checkbox label').each((_, el) => {
    $(el).css('width', `calc(${searchCriteria.width()}px - 32px)`)
  });

  if (aside.height() > wrapper.height()) {
    wrapper.css('height', '100%');
    content.css('height', 'auto');
    searchCriteria.css('height', `auto`);
    scroll.css('height', 'auto');
    return;
  }
  wrapper.css('height', '100%');
  content.css('height', 'calc(100% - 86px)');
  searchCriteria.css('height', `calc(100% - ${selectors.height() + 16}px)`);
  scroll.css('height', 'calc(100% - 30px)');
};

// Function to set the height of the search results table
function setTableHeight() {
  const mainContainer = $('.main-container');
  const main = $('main');
  const searchResult = $('.search-results-container');
  const isMobile = window.innerWidth < 1150;

  if (isMobile) {
    const headerHeight = $('.header-content')[0]?.offsetHeight;
    const footerHeight = $('.footer-content')[0]?.offsetHeight;
    mainContainer.css(
      'height',
      `calc(100dvh - ${headerHeight + footerHeight}px)`
    );
    main.css('height', '100%');
    const tabsHeight = $('.tabs')[0].offsetHeight;
    const iconsHeight = $('main > .mobile-only')[0].offsetHeight; // only for local development
    searchResult.css(
      'height',
      `calc(100% - ${tabsHeight + iconsHeight + 16}px)`
    );
  } else {
    const listMenuHeight = $('#list_menu')[0].offsetHeight;
    mainContainer.css('height', 'auto');
    main.css('height', 'auto');
    searchResult.css('height', `calc(100% - ${listMenuHeight}px)`);
  }
}

// Function to handle sign-in
const signIn = () => {
  const isDesktop = window.innerWidth > 1150;
  
  $('body').addClass('signIn-modal-active');
  showInfo('MainBody_Overview_pnlSignIn', { isSignInModal: true });

  const signInModal = $('.isSignInModalPosition');
  signInModal.removeClass('sign-in-hidden')
  signInModal.removeClass('sign-in-animation-in');
  signInModal.addClass('sign-in-visible');
  signInModal.addClass('sign-in-animation-out');
  
  if (!$('.ui-dialog-titlebar').find('#signIn-modal-logo').length) {
    $('.ui-dialog-titlebar').append(
      "<img id='signIn-modal-logo' src='./images/logo.svg' alt='MDO' title='Mining Data Online'>"
    );
  }

  const closeSignInModalWindow = (isMenuClosed) => {
    if (!isDesktop) { 
      $('.signIn-modal-active .top-menu').animate({left: '0'}, 300)
      if (isMenuClosed) {
        signInModal.removeClass('sign-in-visible')
        setTimeout(() => {
          signInModal.addClass('sign-in-hidden')
          signInModal.removeClass('sign-in-animation-out')
          setTimeout(() => {
            signInModal.addClass('sign-in-animation-in')
            setTimeout(() => {
              signInModal.removeClass('sign-in-hidden')
            }, 400)
          }, 400)
        }, 400)
      } else {
        signInModal.removeClass('sign-in-animation-out')
        signInModal.addClass('sign-in-animation-in')
      }
    }

    setTimeout(() => {
      const logo = $('.ui-dialog-titlebar #signIn-modal-logo');
      if (logo.length) logo.remove();
      $('body').removeClass('signIn-modal-active');
    }, isDesktop ? 0 : 300);
  }

  $('.header-menu-button').one('click', () => {
    console.log('header');
    closeSignInModalWindow(true);
  });

  $('.signIn-modal-header_mobile-icon').one('click', () => {
    closeSignInModalWindow(false);
  });

  if (isDesktop) {
    $('.ui-dialog-titlebar-close').one('click', () => {
      closeSignInModalWindow(false);
    })
  }
};

// Function to handle sign-out
const signOut = () => {
  $('#header_nav').removeClass('authorized-user');
  $('#header_nav').addClass('not-authorized-user');
};

// Function to hide the table tooltip
const hideTableTooltip = () => {
  $('.tooltip-container').removeClass('touch-active');
};

// Function to set table shadows for scrollable tables
const setTableShadows = () => {
  const searchResult = $('.search-results-container.custom-scroll');

  searchResult.on('ps-scroll-down', () => {
    searchResult.find('.search-results-table').addClass('scrolled-y');
  });
  searchResult.on('ps-y-reach-start', () => {
    searchResult.find('.search-results-table').removeClass('scrolled-y');
  });
  searchResult.on('ps-scroll-right', () => {
    searchResult.find('.search-results-table').addClass('scrolled-x');
  });
  searchResult.on('ps-x-reach-start', () => {
    searchResult.find('.search-results-table').removeClass('scrolled-x');
  });
};

/*
const toggleTableLoader = () => {
  const tableLoader = $('.table-loader');
  const className = 'table-loader-hidden';
  if (tableLoader.hasClass(className)) {
    tableLoader.removeClass(className);
  } else {
    tableLoader.addClass(className);
  }
}
*/

const toggleTableLoader = () => {
  const table = $('.search-results-container');
  const tableLoader = $('.table-loader');
  const className = 'table-loader-hidden';
  if (tableLoader.hasClass(className)) {
    tableLoader.removeClass(className);
    table.hide();
  } else {
    tableLoader.addClass(className);
    table.show();
  }
}

// The code appears to contain various functions for handling UI and interaction,
// including form elements, dialogs, tabs, and more.
// The comments describe the purpose of each function and its role in the application.