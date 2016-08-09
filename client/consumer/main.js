(function($) {

  'use strict';

  var App = {

    /**
     * Init
     */
    init: function() {
      App.toggle();
      App.dropdown();
      App.footer();
      App.pricing();
    },

    /**
     * Dropdown
     */
    dropdown: function() {
      var dropdown = $('.dropdown');
      if(dropdown.length) {
        var dropdownHeader = dropdown.find('.dropdown-header');
        dropdownHeader.on("click", function(e){
          e.preventDefault();
          $(this).parent().toggleClass("active");
        });
      }

      $(document).bind('click', function (e) {
        if ($(e.target).closest('.dropdown').length === 0 && $(e.target).closest('.toggle').length === 0) {
          if (dropdown.hasClass('active')) {
            dropdown.removeClass('active');
          }
        }
      });

    },

    /**
     * Toggle Navigation
     */
    toggle: function () {
      var toggle = $('.toggle');
      var navigation = $('.header-menu');
      var wrapper = $('.wrapper');
      if(toggle.length) {
        toggle.on("click", function(e){
          e.preventDefault();
          if (navigation.hasClass('active')) {
            navigation.removeClass('active');
            wrapper.removeClass('active');
          }
          else {
            navigation.addClass('active');
            wrapper.addClass('active');
          }

          toggle.toggleClass("active");
        });
      }

      $(document).bind('click', function (e) {
        if ($(e.target).closest('.header-menu').length === 0 && $(e.target).closest('.toggle').length === 0) {
          if (navigation.hasClass('active')) {
            navigation.removeClass('active');
            wrapper.removeClass('active');
          }
          if (toggle.hasClass('active')) {
            toggle.removeClass('active');
          }
        }
      });
    },

    /**
     * Footer action
     */

    footer: function() {
      //Change language
      var languageTitle = $('.language-title');
      var languageBody = $('.language-body');
      if(languageTitle.length) {
        languageTitle.on("click", function(e){
          e.preventDefault();
          languageBody.toggleClass("active");
        });
      }

      var laguageItem = $('.language-content a');
      if(laguageItem.length) {
        laguageItem.on("click", function(e){
          e.preventDefault();
          languageTitle.html($(this).attr('value'));
          if (languageBody.hasClass('active')) {
            languageBody.removeClass('active');
          }
        });
      }

      $(document).bind('click', function (e) {
        if ($(e.target).closest('.language').length === 0) {
          if (languageBody.hasClass('active')) {
            languageBody.removeClass('active');
          }
        }
      });

      //Back to top
      var $backToTop = $('.footer-action');
      if($backToTop) {
        $(window).scroll(function(){
          if($(this).scrollTop() > 300) {
            $backToTop.addClass('active');
          }
          else {
            $backToTop.removeClass('active');
          }
        });
        $backToTop.click(function(){
          $('html, body').animate({scrollTop : 0}, 800);
          return false;
        });
      }
    },

    /**
     * Pricing
     */
    pricing: function() {
      //Pricing title
      var actionTitle = $('.pricing-action a');
      if(actionTitle.length) {
        actionTitle.on('click', function(e){
          e.preventDefault();
          actionTitle.toggleClass('active');
        });
      }

      //Get maxheight of package item
      function checkWidth() {
        var currentWidth = $(window).width();
        var maxHeight = 0, packageBody = $('.package-body');
        if(currentWidth > 767) {
          if(packageBody.length) {
            packageBody.each(function() {
              maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
            });
            packageBody.height(maxHeight);
          }
        }
        else {
          packageBody.height('auto');
        }
      }
      checkWidth();
      $(window).resize(checkWidth);
    }

  };

  $(function() {
    App.init();
  });

})(jQuery);
