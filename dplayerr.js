"use strict";

(function () {

  //modalBlurItem
  var $blurItem = $(".js-blur-item");

  // movieModal
  var $movieModal = $("#l-movie-modal");
  var $movieArea = $("#l-movie-modal__movie");
  var $movieModalClose = $(".js-movie-modal-close-item");

  var changeMovie = function changeMovie(videoId) {
    $movieArea.empty();
    var iframeEle = $("<iframe></iframe>", {
      src: "https://nontapat5130.github.io/" + videoId + "?autoplay=1&rel=0",
      id: "l-movie-modal-iframe",
      allowfullscreen: "true",
      webkitallowfullscreen: "true",
      mozallowfullscreen: "true",
      allow: "autoplay; encrypted-media"
    });
    $movieArea.append(iframeEle);
  };

  var openMovieModal = function openMovieModal() {
    $movieModal.addClass("is-active");
    $blurItem.addClass("is-filter");
    setTimeout(function () {
      $blurItem.addClass("is-filtered");
    }, 20);
  };

  var closeMovieModal = function closeMovieModal() {
    $movieModal.removeClass("is-active");
    $blurItem.removeClass("is-filtered");
    setTimeout(function () {
      $blurItem.removeClass("is-filter");
      $movieArea.empty();
    }, 550);
  };

  // modal on
  $(".js-movie").on("click", function () {
    changeMovie($(this).data("videoId"));
    openMovieModal();
  });

  // modal off
  $movieModalClose.on("click", function () {
    closeMovieModal();
  });

  // commentModal
  var $commentModal = $("#l-comment-modal");
  var $commentList = $("#l-comment-modal__list");
  var $commentName = $("#l-comment-modal__name");
  var $commentModalClose = $(".js-comment-modal-close-item");

  var changeComment = function changeComment(_list, _name) {
    $commentList.empty();
    $commentName.empty();
    $commentList.append(_list);
    $commentName.append(_name);
  };

  var openCommentModal = function openCommentModal() {
    $commentModal.addClass("is-active");
    $blurItem.addClass("is-filter");
    setTimeout(function () {
      $blurItem.addClass("is-filtered");
    }, 20);
  };

  var closeCommentModal = function closeCommentModal() {
    $commentModal.removeClass("is-active");
    $blurItem.removeClass("is-filtered");
    setTimeout(function () {
      $blurItem.removeClass("is-filter");
      $commentList.empty();
      $commentName.empty();
    }, 550);
  };

  // modal on
  $(".js-comment").on("click", function () {
    changeComment($(this).find(".js-comment__list").html(), $(this).find(".js-comment__name").html());
    openCommentModal();
  });

  // modal off
  $commentModalClose.on("click", function () {
    closeCommentModal();
  });
})();
