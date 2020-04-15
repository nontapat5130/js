'use strict';

(function () {

  // ในใฏใญใผใซใจใ•ใงใฏใ
  var ScrollEffectModule = new SCROLL_EFFECT_MODULE({
    elem: '.js-in-scroll-item',
    displayRatio: 0.9,
    addClassNameActive: 'is-scroll'
  });

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  // split title
  var $sectionTitle = $(".c-in-section__title");
  if ($sectionTitle.length) {
    var sectionTitle = $sectionTitle.text();
    var sectionTitleList = sectionTitle.split('');
    var title = "";
    var r = " c-in-span--alta ";
    for (var i = 0; i < sectionTitleList.length; i++) {

      title += '<span class="c-in-span c-in-span--' + i + (getRandomInt(2) ? r : ' ') + '">' + sectionTitleList[i] + '</span>';
    }
    $sectionTitle.html(title);
  }

  //nav
  var $hamburgerBtn = $("#c-hamburger");
  var $nav = $("#c-nav");

  function openNav() {
    $hamburgerBtn.addClass("is-close");
    $nav.addClass("is-active");
  }

  function closeNav() {
    $hamburgerBtn.removeClass("is-close");
    $nav.removeClass("is-active");
  }

  $hamburgerBtn.on("click", function () {
    if ($hamburgerBtn.hasClass("is-close")) {
      closeNav();
    } else {
      openNav();
    }
  });

  $(window).on("load", function () {
    $(".js-op-item").addClass("is-active");
    $(".c-in-section").addClass("is-active");
  });

  //ใใผใธใใใ—
  $('.js-pagetop').on("click", function () {
    $("html,body").animate({ scrollTop: 0 }, 1000, 'easeInOutQuad');
  });
})();
